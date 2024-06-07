import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { PostObject } from 'src/modules/post/dto/post.object';

@ObjectType({ description: 'Tag TabObject' })
export class TagObject {
  @Field(() => Int, { description: 'Tag ID' })
  id: number;

  @Field({ description: 'Tag Name' })
  @IsString()
  name: string;

  @Field(() => [PostObject], { nullable: true, description: 'Tag Posts' })
  posts?: PostObject[];
}
