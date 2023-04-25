// Gets all transactions
// route: GET /api/v1/transactions

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

// Add transactions
// route: POST /api/v1/transactions

exports.addTransactions = (req, res, next) => {
    res.send('POST transactions');
}

// Delete transactions
// route: DELETE /api/v1/transactions/:id

exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions');
}