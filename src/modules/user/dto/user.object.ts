import { ObjectType, Field, Int } from '@nestjs/graphql'; 
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CommentObject } from 'src/modules/comment/dto/comment.object';
import { PostObject } from 'src/modules/post/dto/post.object';

@ObjectType({ description: 'User TabObject' })
export class UserObject {
    @Field(() => Int, { description: 'User ID' })
    id: number;
  
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
  
    @Field(() => [PostObject], { nullable: true, description: 'User Posts' })
    posts?: PostObject[];
  
    @Field(() => [CommentObject], { nullable: true, description: 'User Comments' })
    comments?: CommentObject[];
}
