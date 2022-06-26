package com.example.servingwebcontent.rest.model;

public class Task {
    private final int id;
    private final String name;

    private Boolean done;

    public Task(int id, String name) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Boolean getDone() { return done;}
    public Boolean setDone(boolean a) {
        return this.done = a;
    }


}
