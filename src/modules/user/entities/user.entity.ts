import { Model } from 'objection';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Post } from 'src/modules/post/entities/post.entity';
 

export class User extends Model {
  static tableName = 'users';

  id!: number;
  username!: string;
  email!: string;
  role!: string; // Assuming you have a role column in the users table

  $beforeInsert(): void  {
    this.id = 1
  }
  // Define relationships if needed
  static relationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: Post,
      join: {
        from: 'users.id',
        to: 'posts.userId'
      }
    },
    comments: {
      relation: Model.HasManyRelation,
      modelClass: Comment,
      join: {
        from: 'users.id',
        to: 'comments.userId'
      }
    }
    // Define other relationships if needed
  };
}
