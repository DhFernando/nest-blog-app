import { InputType,  Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field({ description: 'User Username' })
  @IsString()
  username: string;

  @Field({ description: 'User Email' })
  @IsEmail()
  email: string;

  @Field({ description: 'User Role' })
  @IsString()
  @IsOptional()
  role?: string = 'user';
}
