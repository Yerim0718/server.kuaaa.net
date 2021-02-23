import { RequestHandler } from 'express';
import { getConnection } from 'typeorm';

import Article from '../../lib/model/article';

const msg: string = 'GET /articles/';

const test: RequestHandler = (req, res, next) => {
  res.send(msg);
  return next();
};

const getArticleList: RequestHandler = async (req, res, next) => {
  const db = getConnection();
  const rows = await db.getRepository(Article).find();
  res.json(rows);
  return next();
}

export { test, getArticleList };