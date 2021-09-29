/* eslint-disable */
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

import AbstractModel from './AbstractModel';
import Product from './Product';
import Order from './Order';

@Entity('users')
export default class User extends AbstractModel {
  @Column({ type: 'varchar', length: 50, nullable: false })
  public name: string;

  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  public email: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public password: string;

  @Column({ type: 'varchar', length: 14, nullable: false })
  public document: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public phone_1: string;

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  public phone_2: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  public isAdmin: boolean;

  @Column({ type: 'varchar', length: 50, nullable: true, default: null })
  public avatar_url: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public street: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public neighborhood: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public city: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public state: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  public number_house: string;

  @Column({ type: 'varchar', length: 8, nullable: false })
  public cep: string;

  @OneToMany(type => Product, (product) => product.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'owner_id' })
  public products: Array<Product>;

  @OneToMany(type => Product, (product) => product.user, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'customer_id' })
  public orders: Array<Order>;
}
