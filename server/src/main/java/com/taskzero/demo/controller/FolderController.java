package com.taskzero.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskzero.demo.model.Folder;
import com.taskzero.demo.repository.FolderRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class FolderController {

    @Autowired
	FolderRepository folderRepository;

	@GetMapping("/folders/{id}")
	public ResponseEntity<Folder> getFolderById(@PathVariable("id") Long id) {

		Optional<Folder> folderData = folderRepository.findById(id);
		
		if (folderData.isPresent()) {
			return new ResponseEntity<>(folderData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/folders")
	public ResponseEntity<List<Folder>> getAllFolders() {
		try {
			List<Folder> folders = new ArrayList<Folder>();
			
			folderRepository.findAll().forEach(folders::add);

			if (folders.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(folders, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/folders/{id}")
	public ResponseEntity<Folder> updatetask(@PathVariable("id") Long id, @RequestBody Folder folder) {
		
		Optional<Folder> folderData = folderRepository.findById(id);

		if (folderData.isPresent()) {
			Folder _folder = folderData.get();
			_folder.setName(folder.getName());
			_folder.setTasks(folder.getTasks());
			return new ResponseEntity<>(folderRepository.save(_folder), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

    @PostMapping("/folders")
	public ResponseEntity<Folder> createFolder(@RequestBody Folder folder) {
		try {
			Folder _folder = folderRepository
					.save(new Folder(folder.getName(), folder.getTasks()));			
			return new ResponseEntity<>(_folder, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/folders/{id}")
	public ResponseEntity<HttpStatus> deletetask(@PathVariable("id") Long id) {
		try {
			folderRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    
}
