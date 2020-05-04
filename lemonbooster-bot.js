//LIBRARIES
const Telegraf = require('telegraf');
const fetch = require('node-fetch');

//API KEYs
const botKey = '1075658805:AAEyt1oljdw-DvDSU7pN691fnCetUNYeuUA';

//BOT
const bot = new Telegraf(botKey);

bot.start((ctx) => {
    ctx.reply(`
    
~Welcome to LemonBooster Bot~

Send me a message with /help to know the functions that i can execute! 👍

    `);
});

bot.help( (ctx) => {
    ctx.reply(`
    
Hey! Look, i can do this.

/Enumeration ---> Executes Enumeration 
/Monitoring ---> Executes Monitoring
/Takeover ---> Executes Subdomain Takeovers Scan
 
    `);
});

bot.command(['Enumeration', 'enumeration', 'ENUMERATION'], (ctx) =>{
    
    ctx.reply('You need an update, executing Subdomain Enumeration...');

    fetch('http://monitoring.lemonsec.com/Enumeration')
        .then(res => {
            if(res.ok){
                ctx.reply('Subdomain Enumeration Finish Correctly!')
            }
        })
        .catch(err => ctx.reply(err))
});

bot.command(['Monitoring','monitoring','MONITORING'], (ctx) =>{

    ctx.reply('Nice decision, executing Monitoring...');

    fetch('http://monitoring.lemonsec.com/Monitoring')
        .then(res => {
            if(res.ok){
                ctx.reply('Monitoring Finish Correctly!')
            }
        })
        .catch(err => ctx.reply(err))
});

bot.command(['Takeover','takeover','TAKEOVER'], (ctx) =>{

    ctx.reply('Scanning for Subdomain Takeovers...');

    fetch('http://monitoring.lemonsec.com/Takeover')
        .then(res => {
            if(res.ok){
                ctx.reply('Subdomain Takeover Finish Correctly!')
            }
        })
        .catch(err => ctx.reply(err))
});

bot.launch();