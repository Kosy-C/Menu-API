import HttpException from "../common/http-exception";
import { Request, Response, NextFunction } from "express";
import { request } from "http";

export const errorHandler = (
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction
)=>{
    const status = error.statusCode || error.status || 500;

    response.status(status).send(error);
};
/*
Here, you receive an error of type HttpException and return an 
appropriate error based on its properties. If error.status and 
error.message are defined, you include those in the server response. 
Otherwise, you default to a generic 500 Internal Server Error status 
code and a generic message.
*/
