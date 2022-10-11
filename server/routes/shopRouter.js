import express from 'express';
import Shop from '../models/shops.js';
import cors from './cors.js'
import { corsWithOptions } from './cors.js';

const shopRouter = express.Router();

shopRouter.route('/')
    .options(corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors, async (req, res, next) => {
        try {
            const shops = await Shop.find();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(shops);
        }
        catch (e) {
            next(e);
        }
    })
    .post(corsWithOptions, async (req, res, next) => {
        try {
            console.log(req.body);
            const shop = await Shop.create(req.body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(shop);
        }
        catch (e) {
            next(e);
        }
    })
    .put(corsWithOptions, (req, res, next) => {
        res.statusCode = 304;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT operation not allowed on this endpoint.');
    })
    .delete(corsWithOptions, async (req, res, next) => {
        try {
            const response = await Shop.deleteMany({});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        }
        catch (e) {
            next(e);
        }
    })
shopRouter.route('/:shopId')
    .options(corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors, async (req, res, next) => {
        try {
            const shop = await (Shop.findById(req.params.shopId));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(shop);
        } catch (e) { next(e) }
    })
export default shopRouter;
