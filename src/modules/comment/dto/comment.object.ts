import { ObjectType, Field, Int } from '@nestjs/graphql'; 
import { PostObject } from 'src/modules/post/dto/post.object';
import { UserObject } from 'src/modules/user/dto/user.object';

@ObjectType()
export class CommentObject {
  @Field(() => Int, { description: 'Comment ID' })
  id: number;

  @Field({ description: 'Comment Content' })
  content: string;

  @Field(() => UserObject, { description: 'Comment Author' })
  user: UserObject;

  @Field(() => PostObject, { description: 'Comment Post' })
  post: PostObject;
}
