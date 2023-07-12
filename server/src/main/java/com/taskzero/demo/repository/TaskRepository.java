package com.taskzero.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskzero.demo.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	List<Task> findByTitleContaining(String title);
	List<Task> findByFolder_Id(long folderId);
}
