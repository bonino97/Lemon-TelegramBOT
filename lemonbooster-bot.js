//LIBRARIES
const Telegraf = require('telegraf');
const fetch = require('node-fetch');

//API KEYs
const botKey = '1075658805:AAEyt1oljdw-DvDSU7pN691fnCetUNYeuUA';

//BOT
const bot = new Telegraf(botKey);

bot.start((ctx) => {
    ctx.reply('Welcome!');
});

bot.help( (ctx) => {
    ctx.reply('/Enumeration ---> Executes Enumeration')
    ctx.reply('/Monitoring ---> Executes Monitoring')
});

bot.command(['Enumeration', 'enumeration', 'ENUMERATION'], (ctx) =>{
    fetch('http://monitoring.lemonsec.com/Enumeration')
        .then(res => {
            if(res.ok){
                ctx.reply('Ok!')
            }
        })
        .catch(err => console.log(err))
});

bot.command(['Monitoring','monitoring','MONITORING'], (ctx) =>{
    fetch('http://monitoring.lemonsec.com/Monitoring')
        .then(res => {
            if(res.ok){
                ctx.reply('Ok!')
            }
        })
        .catch(err => console.log(err))
});

bot.launch();