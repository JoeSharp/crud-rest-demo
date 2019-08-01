package com.joesharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@ResponseBody
public class AuthorController {

    @Autowired
    private AuthorRepository authorRepository;

    @GetMapping("/all")
    public Iterable<Author> getAll() {
        return authorRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public Author getById(@PathVariable(value="id") Integer id) {
        return authorRepository.findById(id).orElse(null);
    }

    @PostMapping
    public  Author create (@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @PutMapping
    public Author updateAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteAuthor(@PathVariable Integer id) {
        authorRepository.deleteById(id);
    }
}
