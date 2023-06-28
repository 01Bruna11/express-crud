import express from "express"
//var express = require('express');
var router = express.Router();
import db from "../db/firebase.connection";

/* GET users listing. */
const professorCollection = db.collection("professor")

router.get('/', async function(req, res, next) {
    var documento = await professorCollection.get();
    res.send(documento.docs.map(qualquer=>{return{data:qualquer.data(), id:qualquer.id }}));
});

router.get('/:id', async function(req, res, next) {
    var documento = await professorCollection.doc(req.params.id).get();
    res.send(documento.data());
});

router.post('/', async function(req, res, next) {
    var documento = await professorCollection.add(req.body);
    res.send(documento.id);
});

router.put('/:id', async function(req, res, next) {
    var documento = await professorCollection.doc(req.params.id).set(req.body);
    res.send(documento);
});

router.delete('/:id', async function(req, res, next) {
    var documento = await professorCollection.doc(req.params.id).delete();
    res.send(documento);
});

//module.exports = router;
export default router