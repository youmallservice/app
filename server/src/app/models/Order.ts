/* eslint-disable */
import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import AbstractModel from './AbstractModel';
import User from './User';
import ProductOrder from './ProductOrder';

@Entity('orders')
export default class Order extends AbstractModel {
  @Column({ type: 'timestamp', nullable: true, default: null })
  public date_payment: Date;

  @Column({ type: 'decimal', scale: 2, nullable: false })
  public total_price: number;

  @OneToMany(type => ProductOrder, (productOrder) => productOrder.order, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'order_id' })
  public productOrders: Array<ProductOrder>;

  @ManyToOne(type => User, (product) => product.orders)
  @JoinColumn({ name: 'customer_id' })
  public user: User;
}
