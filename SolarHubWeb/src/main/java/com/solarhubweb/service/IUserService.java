/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solarhubweb.service;

import com.solarhubweb.model.UserModel;

/**
 * @author DucTien
 */
public interface IUserService {

    UserModel findByUserNameAndPasswordAndStatus(String userName, String password, Integer status);
}
