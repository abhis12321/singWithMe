let  express = require('express');
let  path = require('path');
let  fs = require('fs');
let hbs = require('hbs');

let app = express();
let home = fs.readFileSync('./static/index.html');
// let staticpath = path.join(__dirname , "../static");
// app.use(express.static(staticpath));         // seriving => static files
app.use(express.static('public'));      
let tempviews = path.join(__dirname , "../templates/views");
let temppart = path.join(__dirname , "../templates/utilitis");
hbs.registerPartials(temppart)

app.set('view engine' , 'hbs');         //serving => dynamic files
app.set('views' , tempviews);           //rearranging => views folder

app.get('/' , (req, res) => {
// app.get('/ab?d' , (req, res) => {
// app.get('/a+a' , (req, res) => {
// app.get('/a*a' , (req, res) => {
// app.get(/a/ , (req, res) => {
// app.get(/.*fly$/ , (req, res) => {
// app.get('/' , (req, res , next) => {
    res.render('index'
    // , {style:`<link rel="stylesheet" href="./../templates/utilitis/style.css">`}
    );
//     next();
// },(req , res) => {
//     console.log('the next');
})

app.all('/' , (req , res , next) => {
    console.log("http request");
    res.send([{name:'jack sparrow',age:20}]);
    next();
})

app.get('/about' , (req, res) => {
    res.render('about');
})
app.get('/contact' , (req, res) => {
    res.render('contact');
})
app.get('/mail' , (req, res) => {
    res.render('mail');
})

app.get('/about/:id/class/:cl' , (req, res) => {
// app.get('/about/:id/class/:from.:to' , (req, res) => {
// app.get('/about/:id/class/:from-:to' , (req, res) => {
    console.log(req.params);
    res.render('about');
})


app.get('/' , (req , res) => {
    res.send(`${home}`);
})
app.get('/about' , (req , res) => {
    res.status(200).send(`<h1>It is the about page</h1><a href='/'>home</a>`);
})


app.listen(3000 , (err) => {
    console.log(`The request is listening at port ${3000}`);
})