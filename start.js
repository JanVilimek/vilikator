var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var hashes = [];

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function(evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt) {
    if( (message.substring(0, 12) == "Vilíkátore? ")    || 
        (message.substring(0, 12) == "vilíkátore? ")    || 
        (message.substring(0, 12) == "vilikatore? ")    ||
        (message.substring(0, 12) == "Vilikatore? ")    ||
        (message.substring(0, 11) == "Vilikatore " )    ||
        (message.substring(0, 11) == "Vilíkatore " )    ||
        (message.substring(0, 11) == "vilikatore " )    ||
        (message.substring(0, 11) == "vilíkatore " )    ||
        (message.substring(0, 2 ) == "! "))
    {

        console.log(user + " - " + userID);
        console.log("in " + channelID);
        console.log(message);
        console.log("----------");

        if( (message.substring(0, 12) == "Vilíkátore? ")    || 
            (message.substring(0, 12) == "vilíkátore? ")    || 
            (message.substring(0, 12) == "vilikatore? ")    ||
            (message.substring(0, 12) == "Vilikatore? "))   
        {
            var args = message.substring(12).split(' ');
        }

        else 
        if( (message.substring(0, 11) == "Vilikatore " )    ||
            (message.substring(0, 11) == "Vilíkatore " )    ||
            (message.substring(0, 11) == "vilikatore " )    ||
            (message.substring(0, 11) == "vilíkatore " ))
        {
            var args = message.substring(11).split(' ');
        }

        else
        {
            var args = message.substring(2).split(' ');
        }

        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            /*case 'scirm':
                if (args.length >= 1) {
                    bot.sendFiles(channelID, ["https://i.ytimg.com/vi/Fy-OTXOKGxw/mqdefault.jpg"]);
                } else {
                    bot.sendMessage({
                        to: channelID,
                        message: 'Pong!'

                    });
                }
            break;
*/
            case 'channel-id':
                bot.sendMessage({
                    to: userID,
                    message: '<@'+userID+'> číslo kanálu je '+channelID
                });
            break;

            case 'baf':
                bot.sendMessage({
                        to: channelID,
                        message: 'LEK ! <:vilikwhat:476867390823464982>'
                });
            break;
            
            case 'pošli':
                switch(args[0]){
                    case 'všem':
                        bot.sendMessage({
                            to: 390316247339892738,
                            message: '<@everyone> číslo kanálu je '+channelID

                        });
                    break;
                }
            break;

            case 'miluju':
                if(args[0] == 'jardu'){
                    bot.sendMessage({
                     to: channelID,
                     message: '<@'+userID+'> Jarda tebe taky <3 ! \n https://goo.gl/WvmgVi'
                   });
                }else{
                    bot.sendMessage({
                     to: channelID,
                     message: '<@'+userID+'> Vilík je hovno, miluj Jardu, Jarda miluje všechny <3 \n https://goo.gl/WvmgVi'
                   });
                }
                   
            break;

            case 'co':
            case 'čo':
            case 'Co':
            case 'Čo':
                switch(args[0]){
                    case 'dělá':
                    case 'dela':
                    case 'Delá':
                    case 'delá':
                    case 'děla':
                    case 'Děla':
                    case 'robi':
                    case 'robí':
                    case 'Robi':
                    case 'Robí':
                        switch(args[1]){
                            case 'jarda':
                            case 'Jarda':
                            case 'Jarouš':
                            case 'jarouš':
                            case 'jarous':
                            case 'Jarous':
                                bot.sendMessage({
                                    to: channelID,
                                    message: '<@'+userID+'> Jarda už zase paří ty DarkOrbity'
                                });
                            break;

                            case 'vilík':
                            case 'vilik':
                            case 'Vilik':
                            case 'Vilík':
                                bot.sendMessage({
                                    to: channelID,
                                    message: '<@'+userID+'> Vilík mi tu dráždí obvody :P'
                                });
                            break;

                            case 'omeleta':
                            case 'omeletka':
                            case 'Omeleta':
                            case 'Omeletka':
                                bot.sendMessage({
                                    to: channelID,
                                    message: '<@'+userID+'> Leští si pánev'
                                });
                            break;

                            default:
                                bot.sendMessage({
                                    to: channelID,
                                    message: '<@'+userID+'> Promiň, to opravdu nevím, tohoto človíčka tajně nesleduji :smile:'
                                });
                            break;
                        }
                    break;
                }
            break;

            case 'dobrou':
            case 'Dobrou':
                switch(args[0]){
                    case 'noc':
                        if(user == "Vilík"){
                            bot.sendMessage({
                                to: channelID,
                                message: '<@'+userID+'> jde spát a já tedy taky.. Tak dobrou a snad zítra'
                            });  
                        }else 
                        if(user == "Jarda Jarax"){
                            bot.sendMessage({
                                to: channelID,
                                message: '<@'+userID+'> jde už spát, tak mu popřejte dobrou noc stejně jako já !'
                            });  
                        }else{
                            bot.sendMessage({
                                to: channelID,
                                message: 'Kejmoš/ka <@'+userID+'> jde spát, tak mu popřejte dobrou noc !'
                            });  
                        }

                    break;

                    case 'chut':
                    break;
                }
                
            break; 


            case 'dobré':
            case 'Dobré':
                switch(args[0]){
                    case 'ráno':
                        bot.sendMessage({
                            to: channelID,
                            message: 'Dobré ráno tobě ! <@'+userID+'>'
                        });  
                    break;
                }
            break;       


            case '?':
            case 'help':
            case 'pomoc':               
                bot.sendMessage({
                    to: channelID,
                    message: 'Všechny informace najdeš zde: '
                });
            break;
        }

        //https://goo.gl/4U45pd

        bot.on("ready", function(event) {
            console.log("Connected!");
            console.log("Logged in as: ");
            console.log(bot.username + " - (" + bot.id + ")");

            bot.sendMessage({
                to: 390316247339892738,
                message: 'Vilíkátor je právě online !'

            });
        });

        bot.on("presence", function(user, userID, status, game, event) {
            /*console.log(user + " is now: " + status);*/
            switch(userID){
                case 314738664309522454:
                    console.log(user + " is now: " + status);
                break;
            }
        });

        bot.on("any", function(event) {
            console.log(rawEvent);
        });

        bot.on("disconnect", function() {
            console.log("Bot disconnected");
            /*bot.connect()*/ //Auto reconnect
        });
    }
});