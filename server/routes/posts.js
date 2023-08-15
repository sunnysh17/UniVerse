import express from 'express';
import {getFeedPosts,getUserPosts,likePost} from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ
router.get('/',verifyToken,getFeedPosts); //grab user feed from home page
router.get("/:userId/posts",verifyToken,getUserPosts); //grab particular user posts


// UPDATE
router.patch("/:id/like",verifyToken,likePost); //for likinng and unliking posts

export default router;