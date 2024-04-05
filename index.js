const exp = require('express');
const app = exp()
const path = require('path');

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.static(path.join(__dirname, './static')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './frontend/views'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

app.listen(process.env.PORT, ( )=>{
    console.log("servidor en linea");
});
