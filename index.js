const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, port = 3000
 				, app = express()
        , axios = require('axios')
        , config = require('./config')

console.log('https://swapi.co/api/people?key=' + config.privateKey)
app.use(cors())
app.use(bodyParser.json())
app.use("/", express.static(__dirname + '/public'));

app.get('/api/getJedi', (req, res)=> {
  console.log('server')
  axios.get('https://swapi.co/api/people?key=' + config.privateKey).then(response=>{
    return res.send(response.data)
  }).catch(console.log)
})

app.listen(port, function() {
  console.log('Server listening on port', port)
})
