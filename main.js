const Discord = require('discord.js');
const client = new Discord.Client();
const {token, heure, minutes} = require('./config.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

let heurepassé = false;

setInterval(() => {
    const datefonc = new Date();

    if(datefonc.getHours()==heure && datefonc.getMinutes()==minute && heurepassé == false){
        heurepassé = true;
        ("It's time");
    }
    else if(datefonc.getHours()==heure && datefonc.getMinutes()== minute+1 && heurepassé == true){
        heurepassé = false;
        return
    }
}, 10000);

client.login('token');
