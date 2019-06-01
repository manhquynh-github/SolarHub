package dto;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Order.class)
public abstract class Order_ {

	public static volatile SetAttribute<Order, OrderDetail> orderDetails;
	public static volatile SingularAttribute<Order, Date> lastModifiedDate;
	public static volatile SingularAttribute<Order, Long> totalPrice;
	public static volatile SingularAttribute<Order, OrderStatus> orderStatus;
	public static volatile SingularAttribute<Order, Long> id;
	public static volatile SingularAttribute<Order, Date> paymentDate;
	public static volatile SingularAttribute<Order, User> user;
	public static volatile SingularAttribute<Order, Date> orderDate;

}

