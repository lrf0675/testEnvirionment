const https = require('https');


module.exports = function(){

    const req = https.request('https://tm5s5q69cj.execute-api.us-east-2.amazonaws.com/dev/users/?userId=turner.lakeisha@gmail.com', function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));

        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            return chunk;
        });
        res.on('end', function() {
            console.log('No more data in response.');
        });
    });

    req.on('error', function(e){
        console.error("problem with request: "+e);
        return e;
    });

    req.end();

};