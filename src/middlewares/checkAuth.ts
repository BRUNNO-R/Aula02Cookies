import { NextFunction, Request, Response } from "express";

const checkAuth = (req:Request, res:Response, next:NextFunction) =>
{
    if(req.cookies['logado']) next();
    else res.redirect('/login');
};
export default checkAuth;