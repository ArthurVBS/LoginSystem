package com.system.login.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 150, unique = true)
  private String name;

  @Column(nullable = false, length = 150, unique = true)
  private String email;

  @Column(nullable = false, length = 32)
  private String password;
}
