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
    
    /Enumeration ---> Executes Enumeration 
    /Monitoring ---> Executes Monitoring :performing_arts:

    `);
});

bot.command(['Enumeration', 'enumeration', 'ENUMERATION'], (ctx) =>{
    fetch('http://monitoring.lemonsec.com/Enumeration')
        .then(res => {
            if(res.ok){
                ctx.reply('Subdomain Enumeration Finish Correctly!')
            } else {
                ctx.reply('Subdomain Enumeration Fail...')
                ctx.reply('Response: ', res.msg)
            }
        })
        .catch(err => ctx.reply(err))
});

bot.command(['Monitoring','monitoring','MONITORING'], (ctx) =>{
    fetch('http://monitoring.lemonsec.com/Monitoring')
        .then(res => {
            if(res.ok){
                ctx.reply('Monitoring Finish Correctly!')
            } else {
                ctx.reply('Monitoring Fail...')
                ctx.reply('Response: ', res.msg)
            }
        })
        .catch(err => ctx.reply(err))
});

bot.launch();