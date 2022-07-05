package com.system.login.service.impl;

import com.system.login.Exception.NotFoundException;
import com.system.login.dto.UserDTO;
import com.system.login.entity.User;
import com.system.login.repository.UserRepository;
import com.system.login.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService {

  @Autowired
  private UserRepository repository;

  @Override
  public UserDTO create(UserDTO userDTO) {
    User user = new User();
    user.setName(userDTO.getName());
    user.setEmail(userDTO.getEmail());
    user.setPassword(userDTO.getPassword());
    User result = repository.save(user);

    return new UserDTO(result);
  }

  @Override
  public UserDTO getById(Long id) {
    if(repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    User result = repository.findById(id).get();
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByEmailAndPassword(String email, String password) {
    User result = repository.findByEmailAndPassword(email, password);
    return new UserDTO(result);
  }
}
