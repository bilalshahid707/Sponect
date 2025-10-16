import express from "express";
import { newMember } from "../controllers/waitListController";

export const router = express.Router()

router.post('/new-member',newMember)

export default router