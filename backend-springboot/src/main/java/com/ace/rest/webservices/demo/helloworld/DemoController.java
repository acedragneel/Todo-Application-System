package com.ace.rest.webservices.demo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DemoController {

    @GetMapping("/hello")
    public String HelloWorld(){
      return "HelloWorld!";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean HelloWorldBean(){
        return new HelloWorldBean("Good Morning");
    }

    @GetMapping("/hello-world/pathvariable/{name}")
    public HelloWorldBean getName(@PathVariable String name)
    {
        //throw new RuntimeException("Something went Wrong");
        return new HelloWorldBean(String.format("Hello World " + name));
    }
}
