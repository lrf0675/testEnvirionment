const request = require('request-promise');


module.exports = {

    getUsers: function(req,res) {
      const options = {
        url: 'https://tm5s5q69cj.execute-api.us-east-2.amazonaws.com/dev/users/?'+req.params.userId,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8'
        }
      };

      request(options).then(function(data){
        //console.log(data);
        res.send(data);
      }).catch(function(err){
        //console.log(err);
        res.send(err);
      })
    }

};