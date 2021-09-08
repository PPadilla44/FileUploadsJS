const Items = require('../controllers/items');

module.exports = function (app) {
    app.get('/', Items.getItems);
    app.post('/', Items.createItem);
}