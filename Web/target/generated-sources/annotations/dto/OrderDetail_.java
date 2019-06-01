package dto;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(OrderDetail.class)
public abstract class OrderDetail_ {

	public static volatile SingularAttribute<OrderDetail, Integer> quantity;
	public static volatile SingularAttribute<OrderDetail, Long> totalPrice;
	public static volatile SingularAttribute<OrderDetail, Long> id;
	public static volatile SingularAttribute<OrderDetail, Order> order;
	public static volatile SingularAttribute<OrderDetail, Toy> toy;

}

