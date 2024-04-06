import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { activeStatus } from 'src/constants';

export type PostDocument = HydratedDocument<Post>;

// export type PostDocument = Post & Document<Types.ObjectId>;

@Schema({timestamps: true})
export class Post {
    @Prop()
    user_id: string;  

    @Prop({ required: true })
    content: string;

    @Prop()
    media_url: string;

    @Prop({ type: String, enum: activeStatus, default: activeStatus.ACTIVE, required: true, })
    status: activeStatus;

    @Prop({ type: Boolean, default: false })
    is_destroy: boolean;

    @Prop({ type: Date, default: Date.now })
    create_at: Date;

    @Prop({ type: Date, default: Date.now })
    update_at: Date;

    @Prop()
    likes: [];
}

export const PostSchema = SchemaFactory.createForClass(Post);
