package dto;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(OrderStatus.class)
public abstract class OrderStatus_ {

	public static volatile SingularAttribute<OrderStatus, String> name;
	public static volatile SetAttribute<OrderStatus, Order> orders;
	public static volatile SingularAttribute<OrderStatus, Long> id;

}

