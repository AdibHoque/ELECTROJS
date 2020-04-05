const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const {Client , Util , RichEmbed, MessageAttachment, avatarURL} = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const PREFIX = ('e!') 
const talkedRecently = new Set();
const randomPuppy = require('random-puppy');
const request = require('node-fetch');
const fs = require('fs'); 
const superagent = require('superagent')
const ud = require("relevant-urban");
const nekoapi = require('nekos-image-api')
const ameClient = require("amethyste-api")
const ameApi = new ameClient(os.getenv('ameToken'))
const math = require("mathjs")
const client = new Client({ disableEveryone: true });
const nclient = require('nekos.life');
const neko = new nclient();
const Canvas = require('canvas');
const corona_tracker = require('corona-tracker');
const db = require('quick.db');

const applyText = (canvas, text, defaultFontSize) => {
    const ctx = canvas.getContext("2d");
    do {
        ctx.font = `${defaultFontSize -= 10}px Bold`;
    } while (ctx.measureText(text).width > 600);
    return ctx.font;
}; 

const youtube = new YouTube(os.getenv('YOUTUBEAPIKEY'));

const queue = new Map();
client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Yo this ready!'));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));


client.on('message', async msg => { // eslint-disable-line
	
  
  
  
  
  
	if (!msg.content.startsWith(PREFIX)) return undefined;

  
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
  const t = args.slice(1).join(' ');
  const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
  let message = msg
  const everyone = message.guild.roles.find(r => r.name === "@everyone"); 

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)
  if(command === 'pussy') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Pussy')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
};
  if(command === 'ass') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Ass')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
};  
  if(command === 'thighs') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'thigh'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Thighs')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
}; 
  if(command === 'anal') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Analyzed!')
      .setImage(response.body.message)
      .setFooter(`PROTIP: Use lubricants while having anal sex or it could be proven deadly for you and your partner. It is way better not having it all!`)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
}; 
  if(command === '4k') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('4k Porn')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
}; 
  if(command === 'porngif') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Porngif')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
};
  if(command === 'gonewild') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'gonewild'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Gonewild!')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> **| PLEASE SWITCH TO A NSFW MARKED CHANNEL TO USE THIS COMMAND!**")
  }
}; 
  if(command === 'hentai') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaimidriff') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hmidriff'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai Midriff')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaiass') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hass'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai Ass')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaianal') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hanal'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai anal')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaithighs') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hthigh'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai Thigh')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaineko') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hneko'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai Neko')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      console.log(response);
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'hentaikitsune') {
     if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hkitsune'})
    .end((err, response) => {
      const embed = new RichEmbed()
      .setTitle('Hentai Kitsune')
      .setImage(response.body.message)
      .setColor(`#ffbf00`)
      msg.channel.send(embed);
    });
  } else {
    msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'boobs') {
    if (msg.channel.nsfw === true) {
      nekoapi.nsfw.boobs().then(res => {
        const embed = new RichEmbed()
        .setTitle(`Boobies!`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
};
  if(command === 'lesbian') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.lesbian().then(res => {
        const embed = new RichEmbed()
        .setTitle(`lesbian`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
};
    if(command === 'bjgif') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.bJ().then(res => {
        const embed = new RichEmbed()
        .setTitle(`Bj`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
  if(command === 'blowjob') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.blowJob().then(res => {
        const embed = new RichEmbed()
        .setTitle(`Blowjob`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
};
    if(command === 'pussygif') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.pussyGif().then(res => {
        const embed = new RichEmbed()
        .setTitle(`pussy Gif`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'feet') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.feet().then(res => {
        const embed = new RichEmbed()
        .setTitle(`feet`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'femdom') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.femdom().then(res => {
        const embed = new RichEmbed()
        .setTitle(`femdom`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'pussyart') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.pussyArt().then(res => {
        const embed = new RichEmbed()
        .setTitle(`pussy Art`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'smallboobs') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.smallBoobs().then(res => {
        const embed = new RichEmbed()
        .setTitle(`small Boobs`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'girlsolo') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.girlSolo().then(res => {
        const embed = new RichEmbed()
        .setTitle(`girl Solo`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'girlsologif') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.boobs().then(res => {
        const embed = new RichEmbed()
        .setTitle(`girl Solo Gif`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'classic') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.classic().then(res => {
        const embed = new RichEmbed()
        .setTitle(`classic`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
}; 
    if(command === 'cumsluts') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.cumsluts().then(res => {
        const embed = new RichEmbed()
        .setTitle(`cumsluts`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
};
    if(command === 'hentaigif') {
    if (msg.channel.nsfw === true) {
      neko.nsfw.randomHentaiGif().then(res => {
        const embed = new RichEmbed()
        .setTitle(`Hentai Gif`)
        .setImage(res.url)
        .setColor(`#ffbf00`)
        msg.channel.send(embed);
      });
    } else {
      msg.channel.send("<a:ElectroFail:656772856184832025> | **Please switch to a NSFW marked channel to use this command!**")
  }
};
  if(command === 'triggered') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("triggered", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "triggered.gif"
        }]
      });
    }).catch(err => {
      throw err;
    })
}
  if(command === 'brilliance') {
    let mention = message.mention.members.first() || message.member;
    ameApi.generate("discordhouse", {
      "url" : mention.user.avatarURL,
      "house" : "brilliance"
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "hypesquad-badge.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'bravery') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("", {
        "url" : mention.user.avatarURL, 
        "house" : "bravery"
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "hypesquad-badge.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
}  
  if(command === 'balance') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("", {
        "url" : mention.user.avatarURL,
        "house" : "balance"
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "hyoesquad-badge.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
}
  if(command === 'gay') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("gay", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "gay.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'missionpassed') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("missionpassed", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "missionpassed.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'brazzers') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("brazzers", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "brazzers.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'rip') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("rip", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "rip.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'thanos') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("thanos", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "thanos.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'burn') {
    let mention = message.mentions.members.first() || message.member;
    ameApi.generate("burn", {
        "url" : mention.user.avatarURL
    }).then(image => {
      msg.channel.send({
        files: [{
          attachment: image, 
          name: "burn.png"
        }]
      });
    }).catch(err => {
      throw err;
    })
} 
  if(command === 'phcomment') {
    let text = args.slice(1).join(" "); 
    let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${message.member.user.username}&image=${message.member.user.avatarURL}&text=${text}`));
    let json = await res.json();
    msg.channel.send({
      files: [{
        attachment: json.message,
        name: "pornhub.png"
      }]
    });
  }
  if(command === 'electroav') {
    let mention = message.mentions.members.first() || message.member; 
    const canvas = Canvas.createCanvas(1024, 1024);
	  const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(mention.user.avatarURL);
	  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/656517276832366595/688663417887653893/ElectroBadge.png');
	  ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "electroav.png"
      }]
    });
  }
   if(command === 'corona') {
    let country = args[1]
    corona_tracker.getInfections(country).then(r=>{
    console.log(r);
      let cases = r[0].totalCases
      let deaths = r[0].totalDeaths
      let newcases = r[0].febCases
      let newdeaths = r[0].febDeaths
      let recovered = r[0].totalRecovered
      const embed = new RichEmbed()
      .setTitle(r[0].country)
      .setDescription(`Latest Covid-19 Information`) 
      .addField(`Confirmed Cases:`, `${cases}⁣           `)
      .addField(`Total Deaths:`, `${deaths}⁣           `)
      .addField(`Total Recovered:`, `${recovered}⁣           `)
      .addField(`New Cases:`,`${newcases}⁣           `)
      .addField(`New Deaths:`, `${newdeaths}⁣           `)
      .setThumbnail('https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/flat/64/'+r[0].country+'.png')
      .setColor(`#ffbf00`)
      msg.channel.send(embed)
   }).catch(e=>{
    msg.channel.send(`${e}\nPlease write the first letter of the country name in highercase.`);
   });
   }
   if(command === 'coronaav') {
    let mention = message.mentions.members.first() || message.member; 
    const canvas = Canvas.createCanvas(1024, 1024);
	  const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(mention.user.avatarURL);
	  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/656517276832366595/690119126244524049/CoronaAv.png');
	  ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "coronavirusav.png"
      }]
    });
  }
   if(command === 'coronaav-green') {
    let mention = message.mentions.members.first() || message.member; 
    const canvas = Canvas.createCanvas(1024, 1024);
	  const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(mention.user.avatarURL);
	  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/656517276832366595/690119125929951263/CoronaAvGreen.png');
	  ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "coronavirusavgreen.png"
      }]
    });
  }  
   if(command === 'coronaav-purple') {
    let mention = message.mentions.members.first() || message.member; 
    const canvas = Canvas.createCanvas(1024, 1024);
	  const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(mention.user.avatarURL);
	  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/656517276832366595/690119124805877791/CoronaAvPurple.png');
	  ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "coronavirusavpurple.png"
      }]
    });
  }  
   if(command === 'coronaav-pink') {
    let mention = message.mentions.members.first() || message.member; 
    const canvas = Canvas.createCanvas(1024, 1024);
	  const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(mention.user.avatarURL);
	  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('https://cdn.discordapp.com/attachments/656517276832366595/690119124520534035/CoronaAvPink.png');
	  ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    msg.channel.send({
      files: [{
        attachment: canvas.toBuffer(),
        name: "coronavirusavpink.png"
      }]
    });
  }  
  if(command === 'define') {
  let worder = args.slice(1).join(' ');
if (!worder) {
  return msg.channel.send("Specify a word")
};
  let defin = await ud(worder).catch((err) => {
  message.channel.send("Word not found")
  return;
});
const embed = new RichEmbed()
.setTitle(defin.word)
.setAuthor(defin.author)
.setURL(defin.urbanURL)
.addField("Definition",'```'+defin.definition+'```')
.addField("Example", '```'+defin.example+'```')
.setFooter(`👍`+ defin.thumbsUp + ` | ` +`👎` + defin.thumbsDown)
.setColor(`#FFBF00`)
message.channel.send(embed)
} 
  if(command === 'math') {
    let resp; 
    try {
      resp = math.evaluate(args.slice(1).join(''));
    } catch(e) {
      throw e;
    }
    const embed = new RichEmbed()
    .setDescription('🔢  |  **'+message.member.user.username+'**, your expression evaluates to `'+resp+'`')
    .setColor(`#ffbf00`)
    msg.channel.send(embed)
}
  if(command === 'avtest') {
    msg.channel.send(`${msg.member.user.avatarURL}`)
}
	if(command === 'setuplog') {
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(`You must be a admin to use this command! `)
    let role = message.guild.roles.find("name", "@everyone");
message.guild.createChannel("⚡electro-logs", 'text').then(c => {
  c.overwritePermissions(role, {"READ_MESSAGES": false})
  message.channel.send(`Successfully created <#${c.id}>.`)
})
  }
  if (command === 'joinchannel') {
    let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")

 let cArgs = message.mentions.channels.first() 
 
 if(!cArgs) return message.channel.send("You must specify a valid id for the welcome channel!")
	 
 try{
	 client.guilds.get(message.channel.guild.id).channels.get(cArgs.id).send("Welcome channel set!")
	 
 await db.set(`jc${message.channel.guild.id}`, cArgs.id)
 
 message.channel.send("You have successfully set the welcome channel to <#" + cArgs.id + ">")
return;
 }catch(e){
	return message.channel.send("Error: missing permissions or channel doesn't exist")
 }
}
  if (command === 'leavechannel') {
    let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("You are missing the permission `ADMINISTRATOR`")

 let cArgs = message.mentions.channels.first() 
 
 if(!cArgs) return message.channel.send("You must specify a valid id for the leave channel!")
	 
 try{
	 client.guilds.get(message.channel.guild.id).channels.get(cArgs.id).send("Leave channel set!")
	 
 await db.set(`lc${message.channel.guild.id}`, cArgs.id)
 
 message.channel.send("You have successfully set the leave channel to <#" + cArgs.id + ">")
return;
 }catch(e){
	return message.channel.send("Error: missing permissions or channel doesn't exist")
 }
}  
  if (command === 'testwelcomer') {
    let permission = message.member.hasPermission("ADMINISTRATOR")
    if (!permission) return msg.channel.send("**<a:ElectroFail:656772856184832025> | YOU NEED THE** `ADMINISTRATOR` **PERMISSION IN ORDER TO USE THIS COMMAND!**")
    await client.emit("guildMemberAdd", msg.member);
    await client.emit("guildMemberRemove", msg.member);
    let c = await db.fetch(`jc${message.channel.guild.id}`)
    let d = await db.fetch(`lc${message.channel.guild.id}`)
    msg.channel.send(`**Join channel** - <#${c}>`)
    msg.channel.send(`**Leave channel** - <#${d}>`)
  }
  if (command === 'note') {
    const note = t
    if (!note) return msg.channel.send(`<a:ElectroFail:656772856184832025> **| PLEASE SPECIFY WHAT TO NOTE!**`)
    await db.set(`note${msg.member.user.id}`, note)
    msg.channel.send(`Noted!`)
  }
  if (command === 'getnote') {
    const n = await db.fetch(`note${msg.member.user.id}`)
    const embed = new RichEmbed()
    .setTitle(`NOTE`)
    .setAuthor(msg.member.user.username, msg.member.user.avatarURL)
    .setDescription(`${n}`)
    msg.channel.send(`**${msg.member.user.username}'s note**: ${n}`)
  }
  if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('<a:ElectroFail:656772856184832025> | **PLEASE JOIN A VC TO BE ABLE TO USE THIS COMMAND!**');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('<a:ElectroFail:656772856184832025> | **I NEED THE `CONNECT` PERMISSION IN THAT VC TO WORK!**');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('<a:ElectroFail:656772856184832025> | **I NEED THE `SPEAK` PERMISSION IN THAT VC TO WORK!**');
		}
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`)
    }else{
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          const embed = new RichEmbed()
          .setTitle(`SONG SELECTION`)
          .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
          .setFooter(`Please provide a value to select one of the search results ranging from 1-10.`)
          .setColor(`#ffbf00`)
          msg.channel.send(embed);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('<a:ElectroFail:656772856184832025> | **SONG SELECTION TIMED OUT, CANCELLING SONG SELECTION!**');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('<a:ElectroFail:656772856184832025> | **I COULD NOT OBTAIN ANY SEARCH RESULTS, PLEASE PROVIDE VALID SONG NAMES!**');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('<a:ElectroFail:656772856184832025> | **PLEASE JOIN A VC TO BE ABLE TO USE THIS COMMAND!**');
		if (!serverQueue) return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
		serverQueue.connection.dispatcher.end('<a:ElectroSuccess:656772759812046851> | **THIS SONG HAS BEEN SUCCESSFULLY SKIPPED!**');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('<a:ElectroFail:656772856184832025> | **PLEASE JOIN A VC TO BE ABLE TO USE THIS COMMAND!**');
		if (!serverQueue) return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('<a:ElectroSuccess:656772759812046851> | **THIS SONG HAS BEEN SUCCESSFULLY STOPPED!**');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('<a:ElectroFail:656772856184832025> | **PLEASE JOIN A VC TO BE ABLE TO USE THIS COMMAND!**');
		if (!serverQueue) return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
		if (!args[1]) return msg.channel.send(`The current volume is: **${(serverQueue.volume*20)}**`);
		serverQueue.volume = args[1]/20;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100);
		return msg.channel.send(`<a:ElectroSuccess:656772759812046851> | **THE VOLUME HAS BEEN CHANGED TO ${args[1]}!**`);
    
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
		return msg.channel.send(`
__**SON QUEUE:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('<a:ElectroSuccess:656772759812046851> | **THIS SONG HAS BEEN SUCCESSFULLY PAUSED!**');
		}
		return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('<a:ElectroSuccess:656772759812046851> | **THIS SONG HAS BEEN SUCCESSFULLY RESUMED!**');
		}
		return msg.channel.send('<a:ElectroFail:656772856184832025> | **NOTHING IS BEEN PLAYED RIGHT NOW!**');
	}

	return undefined;
});

client.on('guildMemberAdd', async member => {
	
	let wChan = await db.fetch(`jc${member.guild.id}`)
	
	if(wChan == null) return;
	
	if(!wChan) return;
  try{
    // Background language
                        let canvas = Canvas.createCanvas(1024, 450),
                        ctx = canvas.getContext("2d"); 
                        let background = await Canvas.loadImage("https://cdn.glitch.com/5c8b778c-3aaa-4253-b149-acb8c9267727%2FWELCOME.png?v=1585391650755");
                        // This uses the canvas dimensions to stretch the image onto the entire canvas
                        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                        // Draw username
                        ctx.fillStyle = "#ffffff";
                        ctx.font = applyText(canvas, member.user.username, 48);
                        ctx.fillText(member.user.username, canvas.width - 660, canvas.height - 248);
                        // Draw server name
                        ctx.font = applyText(canvas, 'text', 53);
                        ctx.fillText('TO '+member.guild, canvas.width - 690, canvas.height - 65);
                        // Draw discriminator
                        ctx.font = "40px Sans-Serif";
                        ctx.fillText(member.user.discriminator, canvas.width - 623, canvas.height - 178);
                        // Draw number
                        ctx.font = "22px Bold";
                        ctx.fillText(' -'+member.guild.memberCount+'TH MEMBER', 40, canvas.height - 50);
                        // Draw # for discriminator
                        ctx.fillStyle = "#ffbf00";
                        ctx.font = "75px SketchMatch";
                        ctx.fillText("#", canvas.width - 690, canvas.height - 165);
                
                        // Pick up the pen
                        ctx.beginPath();
                        //Define Stroke Line
                        ctx.lineWidth = 10;
                        //Define Stroke Style
                        ctx.strokeStyle = "#ffbf00";
                        // Start the arc to form a circle
                        ctx.arc(180, 225, 135, 0, Math.PI * 2, true);
                        // Draw Stroke
                        ctx.stroke();
                        // Put the pen down
                        ctx.closePath();
                        // Clip off the region you drew on
                        ctx.clip();
                    
                        let avatar = await Canvas.loadImage(member.user.avatarURL);
                        // Move the image downwards vertically and constrain its height to 200, so it"s a square
                        ctx.drawImage(avatar, 45, 90, 270, 270)
                        member.guild.channels.get(wChan).send(`${member} JUST JOINED THE SERVER!`,{
      files: [{
        attachment: canvas.toBuffer(),
        name: "ELECTRO-WELCOME.png"
      }]
    }); 
  }catch(e){
    console.log(e);
	  // dont do anything if error occurs
	  // if this occurs bot probably can't send images or messages
  }
});

client.on('guildMemberRemove', async member => {
	
	let lChan = await db.fetch(`lc${member.guild.id}`)
	
	if(lChan == null) return;
	
	if(!lChan) return;
  try{
    // Background language
                        let canvas = Canvas.createCanvas(1024, 450),
                        ctx = canvas.getContext("2d"); 
                        let background = await Canvas.loadImage("https://cdn.glitch.com/5c8b778c-3aaa-4253-b149-acb8c9267727%2FGOODBYE.png?v=1585391659519");
                        // This uses the canvas dimensions to stretch the image onto the entire canvas
                        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                        // Draw username
                        ctx.fillStyle = "#ffffff";
                        ctx.font = applyText(canvas, member.user.username, 48);
                        ctx.fillText(member.user.username, canvas.width - 660, canvas.height - 248);
                        // Draw server name
                        ctx.font = applyText(canvas, 'text', 53);
                        ctx.fillText('WE WILL MISS YOU :(', canvas.width - 690, canvas.height - 65);
                        // Draw discriminator
                        ctx.font = "40px Sans-Serif";
                        ctx.fillText(member.user.discriminator, canvas.width - 623, canvas.height - 178);
                         // Draw # for discriminator
                        ctx.fillStyle = "#ffbf00";
                        ctx.font = "75px SketchMatch";
                        ctx.fillText("#", canvas.width - 690, canvas.height - 165);
                
                        // Pick up the pen
                        ctx.beginPath();
                        //Define Stroke Line
                        ctx.lineWidth = 10;
                        //Define Stroke Style
                        ctx.strokeStyle = "#ffbf00";
                        // Start the arc to form a circle
                        ctx.arc(180, 225, 135, 0, Math.PI * 2, true);
                        // Draw Stroke
                        ctx.stroke();
                        // Put the pen down
                        ctx.closePath();
                        // Clip off the region you drew on
                        ctx.clip();
                    
                        let avatar = await Canvas.loadImage(member.user.avatarURL);
                        // Move the image downwards vertically and constrain its height to 200, so it"s a square
                        ctx.drawImage(avatar, 45, 90, 270, 270)
                        member.guild.channels.get(lChan).send(`${member} JUST LEFT THE SERVER!`,{
      files: [{
        attachment: canvas.toBuffer(),
        name: "ELECTRO-GOODBYE.png"
      }]
    }); 
  }catch(e){
    console.log(e);
	  // dont do anything if error occurs
	  // if this occurs bot probably can't send images or messages
  }
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`<a:ElectroSuccess:656772759812046851> | **${song.title}** HAS BEEN ADDED TO THE QUEUE!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if  (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`<a:ElectroSuccess:656772759812046851> | Started playing: **${song.title}**`);
}





client.login(os.getenv('Token'))
