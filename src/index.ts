import express from 'express';
import { listings } from './listings';
import bodyParser from "body-parser"

//const express = require('express');
const app = express();
const port = 9000;
app.use(bodyParser.json());//tells the server to formate to josn with middleware

app.get("/", (req, res) => { return res.send(listings)});
app.get("/hello1", (req, res) => res.send("Hello World 1!" + port));

app.post("/delete-listing/:id", (req, res) => {
    const id: string = req.body.id;
    for(let i: number = 0;i<listings.length;i++) {
        if(listings[i].id === id) {
            return res.send(listings.splice(i, 1));
        }
    }
    return res.send("id not found");
});


app.listen(port);
console.log(`[app]: http://localhost:${port}`);
console.log("log");


const one: number = 1;//now will crash if typpes are wrong
const two: number = 2;
const str1: string = "imatype";
const vartpe: any = "im wild";//anytype
const vartpe2: any = undefined;//anytype
console.log(`${one+two}`);