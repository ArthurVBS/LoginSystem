package com.system.login.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_ACCEPTABLE, reason = "Entity already exists")
public class AlreadyExistsException extends RuntimeException {
}
