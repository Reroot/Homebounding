import express from 'express';
//const express = require('express');
const app = express();
const port = 9000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
console.log("log");
const one: number = 1;//now will crash if typpes are wrong
const two: number = 2;
const str1: string = "imatype";
const vartpe: any = "im wild";//anytype
const vartpe2: any = undefined;//anytype
console.log(`${one+two}`);