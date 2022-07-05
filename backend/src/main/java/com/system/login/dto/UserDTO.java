package com.system.login.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.system.login.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
  private Long id;

  @NotNull(message = "The name must not be null or empty")
  @Size(min = 2, max = 150, message = "The name must be between 2 and 150 characters")
  private String name;

  @NotNull(message = "The email must not be null or empty")
  @Size(min = 2, max = 150, message = "The email must be between 2 and 150 characters")
  private String email;

  @NotNull(message = "The password must not be null or empty")
  @Size(min = 2, max = 32, message = "The password must be between 2 and 32 characters")
  private String password;
  public UserDTO(User user) {
    this.id = user.getId();
    this.name = user.getName();
    this.email = user.getEmail();
    this.password = user.getPassword();
  }
}
