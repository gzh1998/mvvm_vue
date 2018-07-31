let mock = require('mockjs');
let num = [];

for (var i = 0; i < 5; i++) {
    num.push(mock.mock({
        name: "@cname",
        city: "@county(true)",
        price: 40,
        url: `./static/imgs/pic${i+1}.jpg`,
        checkall: false,
        cont: 0
    }))
}

module.exports = num;