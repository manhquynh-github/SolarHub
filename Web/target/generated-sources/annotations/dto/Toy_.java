package dto;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Toy.class)
public abstract class Toy_ {

	public static volatile SetAttribute<Toy, OrderDetail> orderDetails;
	public static volatile SingularAttribute<Toy, String> imageUri;
	public static volatile SingularAttribute<Toy, Boolean> gender;
	public static volatile SingularAttribute<Toy, Long> price;
	public static volatile SingularAttribute<Toy, String> name;
	public static volatile SingularAttribute<Toy, ToyStatus> toyStatus;
	public static volatile SingularAttribute<Toy, String> description;
	public static volatile SingularAttribute<Toy, Long> id;
	public static volatile SingularAttribute<Toy, Category> category;

}

