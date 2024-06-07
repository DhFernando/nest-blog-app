import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CommentObject } from 'src/modules/comment/dto/comment.object';
import { TagObject } from 'src/modules/tag/dto/tag.object';
import { UserObject } from 'src/modules/user/dto/user.object';
 
@ObjectType({ description: 'Post TabObject' })
export class PostObject {
  @Field(() => Int, { description: 'Post ID' })
  id: number;

  @Field({ description: 'Post Title' })
  title: string;

  @Field({ description: 'Post Content' })
  content: string;

  @Field(() => UserObject, { description: 'Post Author' })
  user: UserObject;

  @Field(() => [CommentObject], { nullable: true, description: 'Post Comments' })
  comments?: CommentObject[];

  @Field(() => [TagObject], { nullable: true, description: 'Post Tags' })
  tags?: TagObject[];
}
