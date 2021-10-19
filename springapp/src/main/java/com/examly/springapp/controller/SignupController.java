package com.examly.springapp.controller;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.services.UserService;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SignupController {
    private final UserService userService;
	
	public SignupController(UserService userService) {
		this.userService = userService;
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
    //Signup Api
    @PostMapping("/signup")
	@ResponseBody
	public ResponseEntity<UserModel> saveUser(@Valid @RequestBody UserModel user){
		//Checking if user is not registered
		if(userService.findByEmail(user.getEmail()) == null){
			UserModel newUser = userService.saveUser(user);
			userService.setLoginStatusAsTrue(user.getEmail());
			String id = newUser.getId();
			String role = newUser.getRole();
			if(newUser.getRole() == null){
				userService.setUserRole(id, role);
			}
			return new ResponseEntity<UserModel>(newUser,HttpStatus.OK);
		}
		else{
			HashMap<String, String> map1 = new HashMap<String, String>();
            map1.put("message", "User already exists");
            return new ResponseEntity(map1, HttpStatus.BAD_REQUEST);
		}
	}

}
