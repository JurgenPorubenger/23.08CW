var express = require('express');
var router = express.Router();
let usr = {names: [
    {name:'Petya', id:1, age:51},
    {name:'Vasia', id:2, age:51},
    {name:'Kolya', id:3, age:51},
    {name:'Vania', id:4, age:51},
    {name:'Cyborg', id:5, age:51}
  ]};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Express', table: usr.names });
});

router.get('/users/:id', function(req, res, next) {
  usr.names.forEach((item,i)=>{
    console.log(i+""+req.params.id);
    if(usr.names[i]['id']==req.params.id){
      res.render('index', { user: usr.names[i]['name'], age: usr.names[i]['age']});
    }
  });
});

module.exports = router;
