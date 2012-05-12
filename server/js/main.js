var fs = require('fs');

function main(config) {
    var ws = require("./ws"),
        server = new ws.MultiVersionWebsocketServer(config.port);

     
    server.onConnect(function(connection) {
        console.log("Obtained connection");
        console.log(connection);
        //new Player(connection, server);
    });
}

/**
*   Ripped from BrowserQuest
*   Loads a config file or a local config file for starting
*   up the server
*   https://github.com/mozilla/BrowserQuest/blob/master/server/js/main.js
*/

function getConfigFile(path, callback) {
    fs.readFile(path, 'utf8', function(err, json_string) {
        if(err) {
            console.error("Could not open config file:", err.path);
            callback(null);
        } else {
            callback(JSON.parse(json_string));
        }
    });
}

var defaultConfigPath = './server/config.json',
    customConfigPath = './server/config_local.json';

getConfigFile(defaultConfigPath, function(defaultConfig) {
    getConfigFile(customConfigPath, function(localConfig) {
        if(localConfig) {
            main(localConfig);
        } else if(defaultConfig) {
            main(defaultConfig);
        } else {
            console.error("Server cannot start without any configuration file.");
            process.exit(1);
        }
    });
});