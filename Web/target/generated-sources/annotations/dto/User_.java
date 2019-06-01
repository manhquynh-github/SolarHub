package dto;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(User.class)
public abstract class User_ {

	public static volatile SingularAttribute<User, Role> role;
	public static volatile SingularAttribute<User, UserStatus> userStatus;
	public static volatile SingularAttribute<User, String> address;
	public static volatile SingularAttribute<User, Boolean> gender;
	public static volatile SingularAttribute<User, Date> lastModifiedDate;
	public static volatile SingularAttribute<User, String> fullName;
	public static volatile SingularAttribute<User, String> password;
	public static volatile SingularAttribute<User, String> phoneNumber;
	public static volatile SingularAttribute<User, Date> createdDate;
	public static volatile SetAttribute<User, Order> orders;
	public static volatile SingularAttribute<User, Long> id;
	public static volatile SingularAttribute<User, String> email;
	public static volatile SingularAttribute<User, String> username;

}

