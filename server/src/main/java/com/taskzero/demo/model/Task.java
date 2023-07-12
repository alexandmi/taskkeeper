package com.taskzero.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;

	@JsonBackReference
	@ManyToOne(fetch=FetchType.LAZY, optional = false)
    @JoinColumn(name="folder", nullable = false)
    private Folder folder;

	public Task() {

	}

	public Task(String title, String description, boolean completed, Folder folder) {
		this.title = title;
		this.description = description;
		this.folder = folder;
	}

	public long getId() {
		return id;
	}

	public Folder getFolder() {
		return folder;
	}

	public void setFolder(Folder folder) {
		this.folder = folder;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description + "]";
	}

}
