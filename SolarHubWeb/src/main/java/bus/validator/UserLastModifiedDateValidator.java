/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bus.validator;

import bus.validator.common.DateValidator;

/**
 *
 * @author CMQ
 */
public class UserLastModifiedDateValidator extends DateValidator {
    public UserLastModifiedDateValidator() {
        super("Ngày chỉnh sửa người dùng cuối cùng");
    }
}
