/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solarhubweb.dao;

import com.solarhubweb.model.CategoryModel;

import java.util.List;

/**
 * @author DucTien
 */
public interface ICategoryDAO extends GenericDAO<CategoryModel> {

    List<CategoryModel> findAll();
}
