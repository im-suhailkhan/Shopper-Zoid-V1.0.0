//package com.stackroute.controller;
//
//import com.stackroute.domain.User;
//import com.stackroute.exception.ResourceNotFoundException;
//import com.stackroute.repository.UserRepository;
//import com.stackroute.service.CurrentUser;
//import com.stackroute.service.UserPrincipal;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.GetMapping;
//
//public class UserController {
//    @Autowired
//    private UserRepository userRepository;
//
//    @GetMapping("/user/me")
//    @PreAuthorize("hasRole('USER')")
//    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
//        return userRepository.findById(userPrincipal.getId())
//                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
//    }
//}
