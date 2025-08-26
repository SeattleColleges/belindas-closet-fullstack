import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

export enum Role {
  ADMIN = 'admin',
  CREATOR = 'creator',
  USER = 'user',
}

export interface LookingForItem {
  type: string;
  size?: string;
  gender?: string;
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  pronoun: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER
  })
  role: Role;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ type: 'timestamp', nullable: true })
  resetPasswordExpires: Date;

  @Column({ type: 'json', nullable: true })
  lookingFor: LookingForItem[];

  @OneToMany(() => Product, product => product.createdByUser)
  createdProducts: Product[];

  @OneToMany(() => Product, product => product.updatedByUser)
  updatedProducts: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
