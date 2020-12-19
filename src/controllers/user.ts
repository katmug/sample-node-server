import { Request, Response } from "express";
import config from "../config/config";
import User from '../models/user';
import logger from "../services/logger";

export const create = (req: Request, res: Response) => {
    let user = new User(req.body);
    user.save()
        .then((savedUser) => {
            return res.send(savedUser);
        }, (err) => {

            if (err.code == config.mongodb.errorCode.duplicate)
                res.send("error registering user");
            else
                res.send("error registering user");
        });
}



export const list = (req: Request, res: Response) => {
    User.find()
        .then((users) => {
            res.json(users)
        }, (err) => {
            res.send("error registering user");
        });
}


export default { create, list };