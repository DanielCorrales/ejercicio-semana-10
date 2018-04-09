const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Calculadora de Daniel Corrales'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/suma', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a + b;
    if (!a || !b) {
        res.send(`
        <html>
            <head>
                <style>
                    h1 {
                        background-color: gray;
                    }
                    h2 {
                        background-color: brown;
                        color: white;
                    }
                    div {
                        width: 700px;
                    }
                </style>
            </head>
            <body>
                    <div>
                        <h1> Suma </h1>
                        <h2> No hay parámetros </h1>
                    </div>
            </body>
        </html>`);
    } else res.send(`
    <hmtl>
        <head>
            <title> Suma </title>
            <style> 
             h1 {
                    background-color: gray;
                }
            h2 {
                background-color: whitesmoke;
            }
            div {
                width: 700px;
            }
            </style>
        </head>
        <body>
            <div>
                <h1> Suma </h1>
                <h2>${"El resultado de la suma es = " + c} </h2>
            </div>
        </body>
    </html>`);
});

app.get('/resta', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a - b;
    if (!a || !b) {
        res.send(`
        <html>
            <head>
                <style>
                    h1 {
                        background-color: gray;
                    }
                    h2 {
                        background-color: brown;
                        color: white;
                    }
                    div {
                        width: 700px;
                    }
                </style>
            </head>
            <body>
                    <div>
                        <h1> Resta </h1>
                        <h2> No hay parámetros </h1>
                    </div>
            </body>
        </html>`);
    } else res.send(`
    <hmtl>
        <head>
            <title> Resta </title>
            <style> 
             h1 {
                    background-color: gray;
                }
            h2 {
                background-color: whitesmoke;
            }
            div {
                width: 700px;
            }
            </style>
        </head>
        <body>
            <div>
                <h1> Resta </h1>
                <h2>${"El resultado de la resta es = " + c} </h2>
            </div>
        </body>
    </html>`);
});

app.get('/multiplicar', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a * b;
    if (!a || !b) {
        res.send(`
        <html>
            <head>
                <style>
                    h1 {
                        background-color: gray;
                    }
                    h2 {
                        background-color: brown;
                        color: white;
                    }
                    div {
                        width: 700px;
                    }
                </style>
            </head>
            <body>
                    <div>
                        <h1> Multiplicación </h1>
                        <h2> No hay parámetros </h1>
                    </div>
            </body>
        </html>`);
    } else res.send(`
    <hmtl>
        <head>
            <title> Multiplicación </title>
            <style> 
             h1 {
                    background-color: gray;
                }
            h2 {
                background-color: whitesmoke;
            }
            div {
                width: 700px;
            }
            </style>
        </head>
        <body>
            <div>
                <h1> Multiplicación </h1>
                <h2>${"El resultado de la multiplicación es = " + c} </h2>
            </div>
        </body>
    </html>`);
});

app.get('/dividir', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c = a / b;
    if (!a || !b) {
        res.send(`
        <html>
            <head>
                <style>
                    h1 {
                        background-color: gray;
                    }
                    h2 {
                        background-color: brown;
                        color: white;
                    }
                    div {
                        width: 700px;
                    }
                </style>
            </head>
            <body>
                    <div>
                        <h1> División </h1>
                        <h2> No hay parámetros </h1>
                    </div>
            </body>
        </html>`);
    } else res.send(`
    <hmtl>
        <head>
            <title> División </title>
            <style> 
             h1 {
                    background-color: gray;
                }
            h2 {
                background-color: whitesmoke;
            }
            div {
                width: 700px;
            }
            </style>
        </head>
        <body>
            <div>
                <h1> División </h1>
                <h2>${"El resultado de la División es = " + c} </h2>
            </div>
        </body>
    </html>`);
});