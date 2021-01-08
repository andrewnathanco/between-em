import { Request, Response } from "express";

export async function auth (req: Request, res: Response, next: any) {
  // check to make sure if there is authorization code
  if (!req.headers.authorization) {
    res.status(401).json({msg: "Not authorized."});   
  } else {
    

    // check to make sure the code is correct
    if (req.headers.authorization === "auth") {
      next();

      // otherwise return forbidden
    } else {
      res.status(403).json({msg: "Forbidden."});
    }
  }
}
