import { Router } from "express";

import { todoList, addTodo, setDone, sendEmail } from "../controllers/todoController";

const router = Router()

router.get("/", todoList)
router.post("/", addTodo)
router.put("/:id", setDone)
router.post("/send-email", sendEmail)

export default router