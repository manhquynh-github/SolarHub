/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package bus.validator;

import bus.validator.common.PhoneValidator;

/**
 *
 * @author CMQ
 */
public class UserPhoneValidator extends PhoneValidator {
    public UserPhoneValidator() {
        super("Số điện thoại khách hàng");
    }
}
