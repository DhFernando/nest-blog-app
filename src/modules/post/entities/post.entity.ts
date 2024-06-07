import { Model } from 'objection';
import { Comment } from 'src/modules/comment/entities/comment.entity';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import { User } from 'src/modules/user/entities/user.entity';
 

export class Post extends Model {
  static tableName = 'posts';

  id!: number;
  title!: string;
  content!: string;
  userId!: number;

  // Define relationships if needed
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'posts.userId',
        to: 'users.id'
      }
    },
    comments: {
      relation: Model.HasManyRelation,
      modelClass: Comment,
      join: {
        from: 'posts.id',
        to: 'comments.postId'
      }
    },
    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: Tag,
      join: {
        from: 'posts.id',
        through: {
          from: 'post_tag.postId',
          to: 'post_tag.tagId'
        },
        to: 'tags.id'
      }
    }
    // Define other relationships if needed
  };
}
