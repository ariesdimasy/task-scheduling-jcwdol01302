import { Router } from "express";

import { todoList, addTodo, setDone } from "../controllers/todoController";

const router = Router()

router.get("/", todoList)
router.post("/", addTodo)
router.put("/:id", setDone)

export default router