const Transaction = require('../models/Transactions');

// Gets all transactions
// route: GET /api/v1/transactions

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// Add transactions
// route: POST /api/v1/transactions

exports.addTransactions = async (req, res, next) => {

    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });

    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });

        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// Delete transactions
// route: DELETE /api/v1/transactions/:id

exports.deleteTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.findByIdAndDelete(req.params.id);

        if (!transactions) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        
        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}