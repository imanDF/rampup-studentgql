import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Student {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  name: string;
  @Field()
  @Column()
  gender: string;
  @Field()
  @Column()
  address: string;
  @Field()
  @Column()
  mobileNumber: string;
  @Field()
  @Column()
  dateOfBirth: string;
  @Field()
  @Column()
  age: string;
}
