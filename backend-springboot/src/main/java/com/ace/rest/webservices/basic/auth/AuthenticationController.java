package com.ace.rest.webservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean getName()
    {
        //throw new RuntimeException("Something went Wrong");
        return new AuthenticationBean("You are authenticated");
    }
}
