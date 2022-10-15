// Need a few libraries. NPM install... ejs, express, knex, and mysql

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'rds-terraform.c6qwovhemjl6.us-west-1.rds.amazonaws.com',
        port: 3306,
        user: 'root',
        password: 'asdfghjklasdfghjkl',
        database: 'icecreamdb'
    }
});

app.use(express.static('public'));

app.get('/', function(req, res) {
    knex.select().from('products')
        .then((results) => {
            res.render('pages/index', {
                results: results
            });
        });
});

app.listen(8000);
console.log("Server on port 8000");