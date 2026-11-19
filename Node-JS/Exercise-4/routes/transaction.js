import express from "express";
import {
  CreateTransaction,
  deleteTransaction,
  getMonthlyTransaction,
  GetTransactions,
  updateTransaction,
} from "../controllers/transactionController.js";
import { validate } from "../middlewares/validation.js";
import { transactionZodSchema } from "../schemas/transactionSchema.js";
import { protect } from "../middlewares/auth.js";
const router = express.Router();

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions for the logged-in user
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of transactions
 */

router.get("/", protect, GetTransactions);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - type
 *               - category
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *                 enum: [expense,income]
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction created
 */

router.post("/", protect, validate(transactionZodSchema), CreateTransaction);

router.get("/monthly", protect, getMonthlyTransaction);

/**
 * @swagger
 * /transaction/{id}:
 *   put:
 *     summary: Update a transaction by ID
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         title: id
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *               category :
 *                 type: string
 *               date:
 *                 type:string
 *     responses:
 *       200:
 *         description: Transaction updated
 */

router.put("/:id", protect, validate(transactionZodSchema), updateTransaction);

/**
 * @swagger
 * /transaction/{id}:
 *   delete:
 *     summary: Delete a transaction by ID
 *     tags: [Transaction]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         title: id
 *         required: true
 *         description: Transaction ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction deleted
 */
router.delete("/:id", protect, deleteTransaction);

export default router;
