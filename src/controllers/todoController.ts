import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function todoList(req: Request, res: Response) {
    try {

        const result = await prisma.todo.findMany()

        return res.status(200).send({
            success: true,
            data: result
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: JSON.stringify(err)
        })
    }

}

export async function addTodo(req: Request, res: Response) {
    try {

        const { title, reminder } = req.body

        console.log("title => ", title, "reminder => ", new Date(reminder))

        const result = await prisma.todo.create({
            data: {
                title: title,
                reminder: new Date(reminder)
            }
        })

        return res.status(200).send({
            success: true,
            data: result
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: JSON.stringify(err)
        })
    }

}

export async function setDone(req: Request, res: Response) {
    try {

        const { id } = req.params
        const { done } = req.body

        const result = await prisma.todo.update({
            data: {
                done: done
            },
            where: {
                id: Number(id)
            }
        })

        return res.status(200).send({
            success: true,
            data: result
        })

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: JSON.stringify(err)
        })
    }
}