/* eslint-disable */
import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

import AbstractModel from './AbstractModel';
import User from './User';
import ProductType from './ProductType';
import ProductPhoto from './ProductPhoto';
import ProductOrder from './ProductOrder';

@Entity('products')
export default class Product extends AbstractModel {
  @Column({ type: 'varchar', length: 50, nullable: false })
  public name: string;

  @Column({ type: 'decimal', scale: 2, nullable: false })
  public price: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  public description: string;

  @Column({ type: 'integer', nullable: false })
  public quantity: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  public size: string;

  @Column({ type: 'integer', nullable: false, default: 0 })
  public quantity_views: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  public show_banner: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  public avatar_url: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  public thumbnail_url: string;

  @ManyToOne(type => User, (user) => user.products)
  @JoinColumn({ name: 'owner_id' })
  public user: User;

  @ManyToOne(type => ProductType, (productType) => productType.products)
  @JoinColumn({ name: 'type_id' })
  public type: ProductType;

  @OneToMany(type => ProductPhoto, (productPhoto) => productPhoto.product, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'product_id' })
  public photos: Array<ProductPhoto>;

  @OneToMany(type => ProductOrder, (productOrder) => productOrder.product, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'product_id' })
  public productOrders: Array<ProductOrder>;
}
