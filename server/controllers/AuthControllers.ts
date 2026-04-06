import { Request, Response } from "express";


// Controllers For User Registration 

export const registerUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
    } catch (error) {
        
    }
}