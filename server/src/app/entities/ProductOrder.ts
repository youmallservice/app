/* eslint-disable */
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import AbstractModel from './AbstractModel';
import Product from './Product';
import Order from './Order';

@Entity('products_orders')
export default class ProductsOrder extends AbstractModel {
  @Column({ type: 'integer', nullable: false })
  public quantity: number;

  @ManyToOne(type => Product, (product) => product.productOrders)
  @JoinColumn({ name: 'product_id' })
  public product: Product;

  @ManyToOne(type => Order, (order) => order.productOrders)
  @JoinColumn({ name: 'order_id' })
  public order: Order;

}
