import { Model } from 'objection'; 
import { Post } from 'src/modules/post/entities/post.entity';

export class Tag extends Model {
  static tableName = 'tags';

  id!: number;
  name!: string;

  // Define relationships if needed
  static relationMappings = {
    posts: {
      relation: Model.ManyToManyRelation,
      modelClass: Post,
      join: {
        from: 'tags.id',
        through: {
          from: 'post_tag.tagId',
          to: 'post_tag.postId'
        },
        to: 'posts.id'
      }
    }
    // Define other relationships if needed
  };
}
