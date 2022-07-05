package com.system.login.controller;

import com.system.login.Exception.NotFoundException;
import com.system.login.dto.UserDTO;
import com.system.login.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserServiceImpl service;

  @GetMapping(value = "/{id}")
  public UserDTO getById(@PathVariable Long id){
    return service.getById(id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create(@Valid @RequestBody UserDTO userDTO) {
    service.create(userDTO);
    return ResponseEntity.ok("Created");
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationException(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getAllErrors().forEach((err) -> {
      String fieldName = ((FieldError) err).getField();
      String errorMessage = err.getDefaultMessage();

      errors.put(fieldName, errorMessage);
    });

    return errors;
  }

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  public Map<String, String> handleNotFoundException() {
    Map<String, String> error = new HashMap<>();

    error.put("id", "Not found");

    return error;
  }
}
