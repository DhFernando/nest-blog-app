import { Model } from 'objection';
import { Post } from 'src/modules/post/entities/post.entity';
import { User } from 'src/modules/user/entities/user.entity';
 

export class Comment extends Model {
  static tableName = 'comments';

  id!: number;
  content!: string;
  userId!: number;
  postId!: number;

  // Define relationships if needed
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'comments.userId',
        to: 'users.id'
      }
    },
    post: {
      relation: Model.BelongsToOneRelation,
      modelClass: Post,
      join: {
        from: 'comments.postId',
        to: 'posts.id'
      }
    }
    // Define other relationships if needed
  };
}
