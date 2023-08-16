import  express from "express";
const router = express.Router();
import { ValidateToken } from "../middleware/ValidateToken.js";
import { createPost, getPost } from "../controllers/Post/Index.js";
import { updatePost } from "../controllers/Post/update.js";


//create user
router.post("/api/v1/create-post", ValidateToken, createPost);
router.get("/api/v1/get-all-post", ValidateToken, getPost); 
router.post("/api/v1/update-post", ValidateToken, updatePost)

export { router as postRoute };