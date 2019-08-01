package com.joesharp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AuthorController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
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
    public @ResponseBody Author create (
            @RequestBody Author author) {
        return authorRepository.save(author);
    }

    @PutMapping
    public @ResponseBody Author updateAuthor(
            @RequestBody Author author) {
        return authorRepository.save(author);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteAuthor(@PathVariable Integer id) {
        authorRepository.deleteById(id);
    }
}
