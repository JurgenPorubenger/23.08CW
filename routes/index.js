var express = require('express');
var router = express.Router();
let usr = { names: [
    {name:'Petya', id:1, age:21},
    {name:'Vasia', id:2, age:31},
    {name:'Kolya', id:3, age:41},
    {name:'Vania', id:4, age:51},
    {name:'Cyborg', id:5, age:61}
  ]};
let main = { articles: [
        { artTitle: 'BlaBlaBla1',
            text: 'LoremLorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
            autor: function () {
               return usr.names[0].name
            },
            id:1
        },
        { artTitle: 'BlaBlaBla2',
            text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            autor: function () {
                return usr.names[1].name
            },
            id:2
        },
        { artTitle: 'BlaBlaBla3',
            text: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
            autor: function () {
                return usr.names[2].name
            },
            id:3
        },
        { artTitle: 'BlaBlaBla4',
            text: 'Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно',
            autor: function () {
                return usr.names[3].name
            },
            id:4
        },
        { artTitle: 'BlaBlaBla5',
            text: 'Используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно',
            autor: function () {
                return usr.names[4].name
            },
            id:5
        },
    ]
    };


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog Page', articles: main.articles });
});
router.get('/blog/:id', function(req, res, next) {
    main.articles.forEach((item,i)=>{
        if(main.articles[i]['id']==req.params.id){
            // console.log(req.params.id+" "+ main.articles.text)
            res.render('blogPage', { title: main.articles[i].artTitle, text: main.articles[i].text, autor: main.articles[i].autor(), id: main.articles[i].id});
        }
    })
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express', table: usr.names });
});

router.get('/users/:id', function(req, res, next) {
  usr.names.forEach((item,i)=>{
    console.log(i+""+req.params.id);
    if(usr.names[i]['id']==req.params.id){
      res.render('user', { user: usr.names[i]['name'], age: usr.names[i]['age']});
    }
  });
});

module.exports = router;
