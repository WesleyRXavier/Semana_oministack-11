const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());// seguranca , colcoa quem vai acessar a api
app.use(routes);



app.listen(3333);