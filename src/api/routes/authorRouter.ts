import express from 'express';
import { authorGet, authorsGet, authorDelete, authorPost, authorPut } from "../controllers/authorController";

const authorRouter = express.Router();

authorRouter.route('/').get(authorsGet).post(authorPost);

authorRouter.route('/:id').get(authorGet).put(authorPut).delete(authorDelete);

export default authorRouter;
