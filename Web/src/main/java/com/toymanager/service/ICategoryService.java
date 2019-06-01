/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.toymanager.service;


import dto.Category;

import java.util.List;

/**
 * @author DucTien
 */
public interface ICategoryService {

    List<Category> findAll();
}
