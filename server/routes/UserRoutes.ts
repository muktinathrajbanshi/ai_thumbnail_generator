import  Express  from "express";
import { getThumbnailbyId, getUsersThumbnails } from "../controllers/UserController.js";

const UserRouter = Express.Router();

UserRouter.get("/thumbnails", getUsersThumbnails)
UserRouter.get("/thumbnail/:id", getThumbnailbyId)

export default UserRouter;
