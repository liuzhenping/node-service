import express from 'express';
import articleRequestController from '../controllers/articleRequestController';

const articleRequestAPI = express.Router();

articleRequestAPI.route('/')
    .get(articleRequestController.getAllArticle)
    .post(articleRequestController.createArticle)
    .put(articleRequestController.updateArticle);

articleRequestAPI.get('/:id', articleRequestController.getArticleById);

export default articleRequestAPI;
