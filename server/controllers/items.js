const { Item } = require("../models/item");

module.exports = {

    getItems: (req, res) => {
        Item.find()
            .then(item => res.json(item))
            .catch(err => res.status(400).json(err));
    },

    createItem: (req, res) => {
        const { title, image } = req.body;
        Item.create( { title, image } )
            .then(item => res.json(item))
            .catch(err => res.status(400).json(err));
    }

}