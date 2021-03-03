package com.ace.rest.webservices.demo.todo;

import com.ace.rest.webservices.demo.todo.Todo;

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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/jpa")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJPAResource {
    
    @Autowired
    private TodoJPARepository todojpaREpository;

    @GetMapping("/users/{userName}/todos")
    public List<Todo> getAllTodos(@PathVariable String userName)
    {   	
        return todojpaREpository.findByuserName(userName);
    }
    
    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodoById(@PathVariable String username,@PathVariable long id)
    {
    	//returns optional so for get() to get the value
        return todojpaREpository.findById(id).get();
    }
    
    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
    		@PathVariable String username,
    		@PathVariable long id,
    		@RequestBody Todo todo)
    {
    	todo.setUserName(username);
    	
        Todo UpdatedTodo = todojpaREpository.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.OK);
    }
    
    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
    		@PathVariable String username,
    		@RequestBody Todo todo)
    {
    	todo.setUserName(username);
    	
        Todo createdTodo = todojpaREpository.save(todo);
        
        //Location
        //Get the current resource url
        //users/{username}/todos/{id}
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
        .buildAndExpand(createdTodo.getId()).toUri();
        
        return ResponseEntity.created(uri).build();
    	
    }
    
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
    		@PathVariable String username,@PathVariable long id)
    {
    	todojpaREpository.deleteById(id);
    	
    	return ResponseEntity.noContent().build();
    }
}
