package com.ace.rest.webservices.basic.auth;

public class AuthenticationBean {

    private String name;

    public AuthenticationBean(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "AuthenticationBean{" +
                "name='" + name + '\'' +
                '}';
    }
}
