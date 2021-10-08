/* eslint-disable */
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import AbstractModel from './AbstractModel';
import Product from './Product';

@Entity('product_photos')
export default class ProductPhoto extends AbstractModel {
  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  public url: string;

  @ManyToOne(type => Product, (product) => product.photos)
  @JoinColumn({ name: 'product_id' })
  public product: Product;
}
