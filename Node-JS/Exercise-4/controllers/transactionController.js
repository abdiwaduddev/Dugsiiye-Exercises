import Transaction from "../models/transactionSchema.js";

// Create Transaction

export const CreateTransaction = async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create({
      ...req.body,
      createdBy: "6afb1fd7595971f7155b2b0a",
    });
    res.status(201).json({
      success: true,
      data: newTransaction,
    });
  } catch (error) {
    next(error);
  }
};

// Get Transaction

export const GetTransactions = async (req, res, next) => {
  try {
    const getTransaction = await Transaction.find().sort({ createdAt: -1 });
    res.json(getTransaction);
  } catch (error) {
    next(error);
  }
};
// Get transaction with monthly

export const getMonthlyTransaction = async (req, res, next) => {
  try {
    const { year, month } = req.query;

    if (!year || !month) {
      return res.status(400).json({
        success: false,
        error:
          "Please provide both 'year' and 'month' query parameters (e.g., ?year=2025&month=05)",
      });
    }

    // Create start and end date boundaries for the requested month
    const startDate = new Date(Date.UTC(year, month - 1, 1));
    const endDate = new Date(Date.UTC(year, month, 1)); // First day of next month

    const transactions = await Transaction.find({
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    }).sort({ date: -1 });

    // Optional: Calculate summary totals for that month
    const totals = transactions.reduce(
      (acc, curr) => {
        if (curr.type === "income") acc.totalIncome += curr.amount;
        if (curr.type === "expense") acc.totalExpense += curr.amount;
        return acc;
      },
      { totalIncome: 0, totalExpense: 0 },
    );

    res.status(200).json({
      success: true,
      year: parseInt(year),
      month: parseInt(month),
      summary: {
        ...totals,
        netBalance: totals.totalIncome + totals.totalExpense, // expense is negative in your schema (-50)
      },
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    next(error);
  }
};

// Update Transaction
export const updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      req.body,
      { new: true },
    );

    if (!transaction) {
      return res
        .status(404)
        .json({ success: false, error: "Transaction not found" });
    }

    res.json(transaction);
  } catch (error) {
    next(error);
  }
};

// Delete Transaction

export const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!transaction)
      return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
