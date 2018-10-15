const { prefix, token } = require('./config.json');

const { scirm_channel_m, 
		scirm_channel_1,
		scirm_channel_2,
		scirm_channel_3,
		scirm_channel_4,
		scirm_channel_5 
} = require('./channels-ids.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

	const msgr 			= message.content;
	const msgID			= message.id;
	const userName 		= message.author.username;
	const userID 		= message.author.id;
	const channelID 	= message.channel.id;
	const channelName	= message.channel.name;

	const msg = msgr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	
	try{
		if(botCalled(msg)){

			var args;
			var argsr;

			var cmd;

        	if(msg.substring(0,12) == "vilikatore ?"){
        		args 	= msg.substring(12).split(' ');
        		argsr	= msgr.substring(12).split(' ');

        		cmd  	= args[0];

        		args 	= args.splice(1);
        		argsr	= argsr.splice(1);
        	}else{
        		args = msg.split(' ');
        		argsr = msgr.split(' ');

        		cmd  = args[0];

        		args = args.splice(1);
        		argsr = argsr.splice(1);

				
        	}

        	


			console.log("----- BOT CALL INFO -----");
			console.log(
				" \n User Name: 	" 	+ 	userName 		+ 
				" \n User ID: 	" 		+ 	userID 			+ 
				" \n Channel Name: 	" 	+ 	channelName 	+ 
				" \n Channel ID: 	" 	+	channelID 		+
				" \n Message: 	"		+	msg 			+
				" \n Message ID: 	"	+	msgID			+
				" \n Arguments: 	"	+	args			+
				" \n 				"			
			);
		    console.log("----- BOT CALL INFO -----");





		    if (args.length <= 0) {
		    	message.channel.send('Ano ? Slyším tě, ale nezadal si žádné další příkazy, pokud nevíš co po mě žádat, vše najdeš zde: <#499324835340746772>');
		    }else{
		    	switch(args[0]){
			    	case 'scirm':
			    	case 'scirmy':
			    		if (args.length <= 1){
			    			message.channel.send('Jasan rozumím, bohužel si nedopsal/a zbytek příkazů, všechno najdeš zde: <#466602814005575683>');
			    		}else{
			    			switch(args[1]){
				    			case 'join':
				    			case 'pripojit':
				    				message.member.setVoiceChannel("501071278170439695");
				    				message.channel.send('Byl si přesunut, do '+ client.channels.get('501071278170439695').name);
				    			break;

				    			case 'mam':
				    			case 'hash':
				    			break;

				    			case 'info':
				    				message.channel.send(' Veškeré info o scirmech najdeš zde: <#466602814005575683>');
				    			break;

				    		}
			    		}
			    		
			    	break; 

			    	case 'co':

			    		switch(args[1]){
			    			case 'dela':
			    			case 'robi':
			    				switch(args[2]){
			    					case 'prave':
			    					break;

			    					case 'jarda':
			    					case 'jarous':
			    					case 'jarax':
			    						const jarda = client.users.get("340404985730826251");
			    						var vc = message.guild.member(jarda).voiceChannel;

			    						if(vc == null){
			    							message.channel.send('Jarda '+ getStatus(jarda.presence));
			    						}else{
			    							message.channel.send('Jarda '+ getStatus(jarda.presence) + " a také kecá v: " + vc.name);
			    						}
			    						
			    						
			    					break;
			    				
			    					case 'vilik':
			    						const vilik = client.users.get("314738664309522454");
			    						var vc = message.guild.member(vilik).voiceChannel;

			    						if(vc == null){
			    							message.channel.send('Vilík '+ getStatus(vilik.presence));
			    						}else{
			    							message.channel.send('Vilík '+ getStatus(vilik.presence) + " a kecá v: " + vc.name);
			    						}

			    					break;

			    					default:
			    						

			    						try{
			    							console.log(argsr[2]);	
			    							const user = client.users.find("username", argsr[2]);
			    							var vc = message.guild.member(user).voiceChannel;

			    							if(vc == null){
				    							message.channel.send(user.username + ", " +getStatus(user.presence));
				    						}else{
				    							message.channel.send(user.username + ", " +getStatus(user.presence) + " a kecá v: " + vc.name);
				    						}
			    						}
			    						catch(err){
			    							message.channel.send("Tento uživatel bohužel neexistuje :/ ");
			    						}
			    						

			    						
			    					break;
			    				}
			    			break;


			    			default:
			    				console.log("ahoj");
			    			break;
			    		}
			    	break;

			    	case 'help':
			    	case 'pomoc':

			    	break;

			    	case 'baf':
			    		message.channel.send('<@'+message.author.id+'> LEK !');
			    	break;

			    	case 'ping':
			    		message.channel.send('<@'+message.author.id+'> Pong !');
			    	break;


			    	case 'je':
			    	case 'jarda':
			    	break;

			    	case 'jak':
			    		var text = args[1] + " " + args[2] + " " + args[3];
			    		if (text.includes("moc me miluje")){
			    			try{

			    				var msgsss = message.mentions.members.first();
    							
	    						message.channel.send('<@'+message.author.id+'> ' + msgsss.user.username + ' tě miluje na: '+ (Math.floor(Math.random() * 100) + 0) + "%");
	    						
    						}
    						catch(err){
    							message.channel.send("Tento uživatel bohužel neexistuje :/ Tak nemůžu vědět jak moc tě miluje... ");
    						}	
			    		}
			    		
			    	break;

			    	default:
			    		message.channel.send('Promiň tento příkaz neznám :/ Soupis všech pro mě známých příkazů najdeš zde: <#499324835340746772>');
			    	break;

			    	case 'dobrou':
			    		switch(args[1]){
			    			case 'noc':
			    				message.channel.send('Kejmoš/ka <@'+userID+'> jde spát, tak mu popřejte dobrou noc !');
			    			break;
			    		}
			    	break;

			    	case 'miluju': 
			    		switch(args[1]){
			    			case 'jardu':
			    				message.channel.send('<@'+userID+'> Jarda tebe taky <3 ! \n https://goo.gl/WvmgVi');
			    			break;

			    			case 'vilika':
			    				message.channel.send('<@'+userID+'> Vilík je hovno, miluj Jardu, Jarda miluje všechny <3 \n https://goo.gl/WvmgVi');
			    			break;

			    			default:
			    				message.channel.send('Tato funkce je dostupná pouze pro Team JRX community');
			    			break;
			    		}			
		                
		            break;

			    }
		    }
			
		}else{
			//console.log(userName + ": ")
		}
	}
	
	catch(err){
		console.log("nezachyceno");
		console.log(err);
	}
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'uvítací-k-anál');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Vítej piňdoure, ${member}`);
});

function botCalled(msg) {
	const botCall_12 	= msg.substring(0,12);
	const botCall_02  	= msg.substring(0, 2);

	return (
		botCall_12.includes( "vilikatore ?"	)	||
		botCall_12.includes( "vilikatore?"	)	||
		botCall_12.includes( "vilikatore,"	)	||
		botCall_12.includes( "vilikatore"	)	||
		botCall_12.includes( "vilikator?"	)	||
		botCall_12.includes( "vilikator"	)	||
		botCall_12.includes( "vlktr"		)	||
		botCall_02.includes( "v?"			)	||
		botCall_02.includes( "!"			)	||
		botCall_02.includes( "?" 			)	
	);
	
}

function getStatus(arg) {
	const presence = arg;
	const game = presence.game;
	const status = presence.status;

	if(game == null){
		switch(status){
			case 'online':
				return 'je zrovna ' + status;
			break;

			case 'offline':
				return 'je zrovna' + status + ", snad se brzy vrátí";
			break;

			case 'idle':
				return 'si na chvilku odskočil, bude snad brzy zpět';
			break;

			case 'dnd':
				return 'předstírá že tu není, tak ho nechme v klidu.';
			break;

			default:
				return 'je nyní tajný';
			break;
		}

	}else{
		if(game.name == "Spotify"){
			return "poslouchá songy na " + game.name;
		}else{
			return "paří " + game.name;
		}
		
	}
	
}

client.login(token);