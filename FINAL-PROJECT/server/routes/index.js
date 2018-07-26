'use strict';

var express = require('express');
var router = express.Router();
var data = [];

router.get('/', function(req, res) {
  res.json(data);
});

router.post('/', function(req, res) {
    
    var carToSave = {
            status: req.body.status,
            id: req.body.id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            cor: req.body.cor,
            imageUrl: req.body.imageUrl
        }
    
    var matchFound = data.some(hasExistingCar);
    var indexOfMatch;

    function hasExistingCar(value, index, array) {
        if (array[index].id === req.body.id)
            indexOfMatch = index;
            return array[index].id === req.body.id;
    }
    
    if (data.length !== 0 && matchFound){
        //console.log('has match? ', matchFound);
        //console.log(indexOfMatch);
        //console.log('Changing status...');
        data[indexOfMatch].status = req.body.status;
        //console.log(data[indexOfMatch]);
        matchFound = [];
    }     
    
    if (data.length !== 0 && !matchFound){
        //console.log('has match? ', matchFound);
        //console.log('Saving car #', data.length+1);
        data.push(carToSave);
        //console.log(data);
        matchFound = [];
    }
    
    if (data.length === 0){
        //console.log('Saving first car...');
        data.push(carToSave);
        //console.log(data);
        matchFound = [];
    }
    res.json({ message: 'success' });
});

module.exports = router;
