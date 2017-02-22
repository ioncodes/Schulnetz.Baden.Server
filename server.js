var express = require('express');
var fs = require('fs-extra');
var app = express();

app.get('/api/createAbsence', function(req, res) {
    var mode = req.query.mode;
    var username;
    var password;
    var suc = true;
    if(mode === undefined) {
        suc = false;
        res.send('Mode not set.');
    } else if(mode === 'login') {
        username = req.query.user;
        password = req.query.pass;
    } else {
        var json = fs.readJsonSync(__dirname + '/account.json', {throws:true});
        username = json.user;
        password = json.pass;
    }
    console.log(mode);
    console.log(username);
    console.log(password);

    if(suc) {
        if (username === undefined || password === undefined) {
            res.send('user or pass parameter missing.');
        } else {
            var err = false;
            const spawn = require('child_process').spawn;
            const mono = spawn('mono', [__dirname + '/SchulNETz.exe', username, password]);
            mono.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            mono.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
                if(!err) {
                    err = true;
                    res.send('Error!');
                }
            });
            mono.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                if(!err) {
                    res.send('Sent!');
                }
            });
        }
    }
});

app.listen(6969 || process.env.port, function() {
    console.log("Bot running on port 6969 <3");
});
