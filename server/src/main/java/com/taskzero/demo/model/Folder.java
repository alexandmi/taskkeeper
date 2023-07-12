package com.taskzero.demo.model;

import jakarta.persistence.*;
import java.util.Iterator;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "FOLDERS")
public class Folder {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@JsonManagedReference
	@OneToMany(mappedBy="folder", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Task> tasks;

	public Folder() {

	}

	public Folder(String name, Set<Task> tasks) {
		this.name = name;
		this.tasks = tasks;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Task> getTasks(){
		return tasks;
	}

	public void setTasks(Set<Task> tasks){
		this.tasks = tasks;
	}

	@Override
	public String toString() {
		// this variable is used if you want to print some task elements from the folder
		Task[] tasksArray = new Task[tasks.size()];	
		Iterator<Task> it= tasks.iterator();
		for(int i=0;it.hasNext();i++){
			tasksArray[i] = it.next();
		}
		return "Folder [id=" + id + ", name=" + name +"]";
	}

}
