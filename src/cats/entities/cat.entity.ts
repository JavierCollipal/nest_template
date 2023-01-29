import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@ObjectType()
@Schema()
export class Cat {
  @Field(() => String)
  _id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  age: number;

  @Field()
  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);