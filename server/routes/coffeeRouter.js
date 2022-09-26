import express from 'express';
import Coffee from '../models/coffees.js';
import cors from './cors.js'
import { corsWithOptions } from './cors.js';

const coffeeRouter = express.Router();

coffeeRouter.route('/')
    .options(corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors, async function (req, res, next) {
        try {
            const coffee = await Coffee.find();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(coffee);
        }
        catch (e) {
            next(e);
        }
    })
    .post(corsWithOptions, async function (req, res, next) {
        try {
            const coffee = await Coffee.create(req.body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(coffee);
        }
        catch (e) {
            next(e);
        }
    })
    .put(async function (req, res, next) {
        res.statusCode = 400;
        res.end('PUT OPERATION IS NOT SUPPORTED')
    })
    .delete(async function (req, res, next) {
        res.statusCode = 400;
        res.end('DELETE OPERATION IS NOT SUPPORTED');
    })

coffeeRouter.route('/:coffeeId')
    .options(corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors, async function (req, res, next) {
        try {
            const coffee = await (Coffee.findById(req.params.coffeeId));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(coffee);
        }
        catch (e) {
            next(e);
        }
    })

export default coffeeRouter;