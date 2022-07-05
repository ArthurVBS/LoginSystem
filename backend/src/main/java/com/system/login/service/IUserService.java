package com.system.login.service;

import com.system.login.dto.UserDTO;

public interface IUserService {

  UserDTO create(UserDTO userDTO);

  UserDTO getById(Long id);

  UserDTO getByEmailAndPassword(String email, String password);

}
