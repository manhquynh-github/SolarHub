package dto;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(UserStatus.class)
public abstract class UserStatus_ {

	public static volatile SingularAttribute<UserStatus, String> name;
	public static volatile SingularAttribute<UserStatus, Long> id;
	public static volatile SetAttribute<UserStatus, User> users;

}

