import express from 'express';
import ArticleRequestController from '../controllers/ArticleRequestController';

const articleRequestAPI = express.Router();

articleRequestAPI.route('/')
    .get(ArticleRequestController.getAllArticle)
    .post(ArticleRequestController.createArticle)
    .put(ArticleRequestController.updateArticle);

articleRequestAPI.get('/:id', ArticleRequestController.getArticleById);

export default articleRequestAPI;
