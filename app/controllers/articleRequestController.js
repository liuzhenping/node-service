import Article from "../models/article";
import HttpStatus from '../constant/HttpStatus';

const articleRequestController = {
    getAllArticle: async (req, res) => {
        try {
            const articles = await Article.find({});
            res.status(HttpStatus.OK).json({
                result: articles
            });
        } catch (err) {
            console.log(err);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            });
        }
    },
    createArticle: async (req, res) => {
        try {
            const article = new Article({
                title: req.body.title,
                content: req.body.content
            });
            const result = await article.save();
            res.status(HttpStatus.CREATED).json({
                result: result
            });
        } catch (err) {
            console.log(err);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            });
        }
    },
    updateArticle: async (req, res) => {
        try {
            const article = await Article.findOneAndUpdate({_id: req.body._id}, {
                title: req.body.title,
                content: req.body.content
            }, {useFindAndModify: false, new: true});
            res.status(HttpStatus.CREATED).json({
                result: article
            });
        } catch (err) {
            console.log(err);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            });
        }
    },
    getArticleById: async (req, res, next) => {
        try {
            const article = await Article.findById(req.params.id);
            res.status(HttpStatus.OK).json({
                result: article
            });
        } catch (err) {
            console.log('Error get article', err);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err,
            });
        }
    },
};

export default articleRequestController;
