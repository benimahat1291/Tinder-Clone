const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.tinderCards.find((err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })

    },

    create: function (req, res) {
        const dbCard = req.body;
        db.tinderCards.create(dbCard, (err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    }
}
