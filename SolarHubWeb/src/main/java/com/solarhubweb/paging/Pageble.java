/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.solarhubweb.paging;

import com.solarhubweb.sort.Sorter;

/**
 * @author DucTien
 */
public interface Pageble {

    Integer getPage();

    Integer getOffset();

    Integer getLimit();

    Sorter getSort();
}
