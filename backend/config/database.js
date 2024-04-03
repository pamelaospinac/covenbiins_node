const mongoose = require('mongoose');
require('dotenv').config();

const URI = 'mongodb+srv://pospina3:Sspziipd9MQMYxwO@clusteradsoficha2557466.g1xltr1.mongodb.net/?retryWrites=true&w=majority&appName=ClusterADSOFICHA25574'
mongoose.connect(URI);

module.exports = mongoose;