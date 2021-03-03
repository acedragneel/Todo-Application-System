package com.ace.rest.webservices.demo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

    public JwtTokenRequest() {
        super();
//        
//        {
//            "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2UiLCJleHAiOjE2MTM4Mjc2NTksImlhdCI6MTYxMzIyMjg1OX0.mzIefZQHg0pULGvSLz2cxq25Uk-LyXmOP0P63ppgVjMuT3E-Oig0c6wJyL2mtYeRTRXP941Ffn9Ya8a_NUZvlA"
//        }
        
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

