package com.ace.rest.webservices.demo.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJPARepository extends JpaRepository<Todo, Long> {

	List<Todo> findByuserName(String userName);
}
