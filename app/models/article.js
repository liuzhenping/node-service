import mongoose from 'mongoose';

const ArticleSchema = mongoose.Schema(
    {
        title: String,
        content: mongoose.Schema.Types.Mixed
    },
    {
        timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}
    }
);

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
