/* eslint-disable */
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

import AbstractModel from './AbstractModel';
import Product from './Product';

@Entity('products_types')
export default class ProductType extends AbstractModel {
  @Column({ type: 'varchar', length: 50, nullable: false })
  public name: string;

  @OneToMany(type => Product, (product) => product.type, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'type_id' })
  public products: Array<Product>;
}
