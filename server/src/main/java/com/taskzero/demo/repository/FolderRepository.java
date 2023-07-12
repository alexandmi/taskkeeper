package com.taskzero.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskzero.demo.model.Folder;

public interface FolderRepository extends JpaRepository<Folder,Long>{
    
}
