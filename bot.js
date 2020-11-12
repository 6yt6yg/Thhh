require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${project_name}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const developer = [`NIRO DEVELOPMENT`, `https://discord.gg/bMvtyJD`]
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const ytdl = require('ytdl-core');
const ms = require("ms");
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const ytdlcore = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const pretty = require("pretty-ms");
const queue = new Map();
var table = require("table").table;
//const points = JSON.parse(fs.readFileSync("./Database/points.json", "utf8"));
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
    //الكونفج

const devs = process.env.OWNER_ID;

const stat = process.env.BOT_STATUS;

const prefix = process.env.PREFIX;

const project_name = "niro-system"; 

const color = process.env.EMBED_COLOR; 

const youtube = new YouTube("AIzaSyCPqpVlcivHbXdo91K7v5WSSSy87tPdkKA")

client.login(process.env.TOKEN); 

//سيب حقوقي ارجوك

//قدر تعبي//

const yt_api_key = "AIzaSyCPqpVlcivHbXdo91K7v5WSSSy87tPdkKA";

const Rules = process.env.SERVER_RULES;
/////بلاك سلت
const devs3 = [`${devs}`]
client.on('message', async message => {
if (message.author.bot) return undefined;
let user = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(' ');
let args = message.content.split(" ");
if (args[0].toLowerCase() == prefix + 'blacklist') {
if (!devs3.includes(message.author.id))
return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
message.channel.bulkDelete(1);
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("** __NEW Blacklist__ **")
.setColor("BLACK")
.addField("**- User :**", `[${user.tag}]`)
.addField("**- Blacklisted By :**", `[${message.author.tag}]`)
.addField("**- Reason :**", `[${reason}]`)
.addField("**- Blacklisted In :**", `[${message.guild.name}]`)
.addField("**- Time & Date :**", `[${message.createdAt}]`)
.setFooter(`${client.user.username}`)
.setFooter(message.guild.name, message.guild.iconURL);
let channel = message.guild.channels;
client.channels
.get(`{black_room}`).sendEmbed(embed)
.find("name", "blacklist-users");
channel.send(embed);
 }
});

const db = require('quick.db');
const devs2 = [`${devs}`]
client.on('message', async message => {
if (message.author.bot) return undefined;
let user = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(' ');
let args = message.content.split(" ");
if (args[0].toLowerCase() == prefix + 'blacklist') {
if (!devs2.includes(message.author.id))
return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 
let Blacklist = await db.fetch(`Blacklist_${user.id}`); 
if (Blacklist === null) Blacklist = 'off'; 
if (!user) return message.channel.send(`**Usage: ${prefix}blacklist \`<Mention/ID>\`**`); 
message.channel.send(`**Done Blacklisted The User**`); 
db.set(`Blacklist_${user.id}`, "on");
user.send(`⚠️${user}⚠️
**You Are Blacklisted FROM \`${client.user.username}\` 
Reason: \`${reason}\` **`)
  } 
}); 

client.on('message', async message => {
if (message.author.bot) return undefined;
let user = message.mentions.users.first();
let reason = message.content.split(' ').slice(2).join(' ');
let args = message.content.split(" "); 
  if (args[0].toLowerCase() == prefix + 'unblacklist') {
if (!devs2.includes(message.author.id))
return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__ **");
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 
let Blacklist = await db.fetch(`Blacklist_${user.id}`); 
if (Blacklist === null) Blacklist = 'off'; 
if (!user) return message.channel.send(`**Usage: ${prefix}unblacklist \`<Mention/ID>\`**`); 
message.channel.send(`**Done Unblacklisted The User**`); 
db.set(`Blacklist_${user.id}`, "off");
user.send(`⚠️${user}⚠️
**You Are UnBlacklisted FROM \`${client.user.username}\` 
Reason: \`${reason}\` **`)
  } 
});

client.on('message', async message => {
  if (message.author.bot) return undefined;
  if (message.content === prefix + 'status') {
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`); 
if (Blacklist === 'on') return message.channel.send(`**❌ | __Your Are Blacklisted Now__ **`); 
message.channel.send(`** __You Aren't Blacklisted__ **`); 
  } 
});
//تغير برفكس
const fs = require("fs"); // fs Package //
let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: process.env.PREFIX,
    };
    var prefix = prefixes[message.guild.id].prefix;
    var setp = prefixes[message.guild.id];
    if (message.content.startsWith(prefix + 'setp')) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply(`**:x: Error: You do not have the required permissions: Manage Server.**`);
 
        let args = message.content.split(" ").slice(1);
 
        if (!args.join(" ")) return message.reply(`**:x: Error: Say The Prefix Please.**`);
          const embed = new Discord.RichEmbed()
 
       .setColor("BLACK")
 .setTitle("Prefix Set!")
  .setDescription(`**Set to ${args[0]}**`);
   message.channel.send(embed);
       setp.prefix = args.join();
 
    }
 
    fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
});

client.on('message', message => { 
     if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: process.env.PREFIX,
    };
    var prefix = prefixes[message.guild.id].prefix;
    
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });
                    fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });

//حالة البوت لا تلعب فيها تقدر تعدل من env.
client.on("ready", () => {
  console.log(`${client.user.tag}`);

  console.log(`${client.guilds.size} Servers`);

  console.log(`${client.users.size} Members`);

  console.log(`${client.channels.size} Channels`);

  console.log(`[ ${client.guilds.map(g => g.name).join(", \n ")} ]`);

  client.user.setActivity(`${stat}`, { type: "streaming" });
});
//قوانين سيرفرك تقدر تعدلها من env.
client.on("message", async luxy => {
   if (!prefixes[luxy.guild.id]) prefixes[luxy.guild.id] = {
        prefix: process.env.PREFIX,
    };
    var prefix = prefixes[luxy.guild.id].prefix;
  if (luxy.author.bot) return;
  if (luxy.content === prefix + "rules") {
    let embed = new Discord.RichEmbed()

      .setColor(`${color}`)
      .setDescription(
        `**~~=~~ Server Rules ~~=~~
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
${Rules}
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
**`)
      .setFooter("NIRO Development");
    luxy.channel.send({ embed: embed });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
/////كود الهيلب او المساعده
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: process.env.PREFIX,
    };
    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "help")) {
    let pages = [
      `🎉**Giveaway Orders**🎉
> **🎉| ${prefix}gstart --> To Make a Giveaway - لعمل جيف اواي **
> **🎉| ${prefix}groll --> To Change The Giveaway Winner - لتغير الفائز بالجيف اواي **
> **🎉| ${prefix}gend --> To End The Giveaway - لأنهاء الجيف اواي **
`,
      `👑**Admin Orders**👑
> **👑| ${prefix}cr --> لصنع الوان للسيرفر**
> **👑| ${prefix}setmember --> لعمل روم صوتي بعدد الاعضاء في السيرفر  **
> **👑| ${prefix}vonline --> لعمل روم بعدد المتصلين في السيرفر **
> **👑| ${prefix}close --> لقفل الشات **
> **👑| ${prefix}open --> لفتح الشات **     
> **👑| ${prefix}hc --> لأخفاء الشات**    
> **👑| ${prefix}sc --> لأظهار الشات**     
> **👑| ${prefix}clear --> لمسح الشات**      
> **👑| ${prefix}say --> البوت يردد ما تقول **
> **👑| ${prefix}ban --> لحظر اي عضو في السيرفر**
> **👑| ${prefix}kick --> لطرد اي عضو في السيرفر**     
> **👑| ${prefix}mute --> لأعطاء اي شخص ميوت كتابي**    
> **👑| ${prefix}unmute --> لفك الميوت من اي شخص**
> **👑| ${prefix}role --> لأعضاء اي شخص رتبه معينه**
> **👑| ${prefix}reply --> لصنع رد تلقائي**
> **👑| ${prefix}ctext --> لصنع روم كتابي**
> **👑| ${prefix}cvoive --> لصنع روم صوتي**
> **👑| ${prefix}rename --> لتغير اسم الروم الكتابي**
> **👑| ${prefix}autorole --> لعمل رتبه تلقاءيه**
> **👑| ${prefix}temp on/off --> لعمل روم صوتي مؤقت**
`,
      `👥**Public Orders**👥
> **👥| ${prefix}new --> لفتح تكت**
> **👥| ${prefix}old --> لغلق التكت**
> **👥| ${prefix}rules --> لعرض قوانين السيرفر**
> **👥| ${prefix}ping --> تشوف بنج البوت**
> **👥| ${prefix}emoji --> تشوف كل الايموجي الي في السيرفر**
> **👥| ${prefix}short --> لعمل رابط مختصر للروابط**
> **👥| ${prefix}avatar --> تشوف صورة اي عضو**
> **👥| ${prefix}top --> تشوف تفاعل الناس**
> **👥| ${prefix}top text --> تشوف تفاعل الناس كتابي**
> **👥| ${prefix}top voice --> تشوف تفاعل الناس صوتي**
> **👥| ${prefix}credits --> تشوف رصيدك **
> **👥| ${prefix}daily --> للحصول على جائزه يوميه**
> **👥| ${prefix}email  --> لعمل ايميل وهمي**
> **👥| ${prefix}emojilist --> تسوف ايموجي السيرفر**
> **👥| ${prefix}server --> تشوف معلومات السبرفر**
> **👥| ${prefix}status --> تشوف لو انت بالع بلاك لست ولا لا*"
`,
      `**🎮Games Orders**🎮
> **🎮| ${prefix}xo --> لعبة اكس اوه**
> **🎮| ${prefix}math --> لعبة رياضيات**
> **🎮| ${prefix}hack --> لعبة التهكير**
> **🎮| ${prefix}kill --> لعبة قتل**
> **🎮| ${prefix}fkk --> لعبة تفكيك الكلمات**
> **🎮| ${prefix}capitals --> لعبة عواصم**
> **🎮| ${prefix}rps --> لعبة حجره زرقه مقص**
> **🎮| ${prefix}hq --> لعبة اسأله صعبه**`,
      `**🎶Music Orders🎶**
> **🎶| ${prefix}play --> لتشغيل الموسيقى**
> **🎶| ${prefix}stop --> لأيقاف الموسيقى**
> **🎶| ${prefix}pause --> لأيقاف الموسقى مؤقتا**
> **🎶| ${prefix}resume --> لأستكمال الموسيقى**
> **🎶| ${prefix}skip --> لتخطي الموسيقى**
> **🎶| ${prefix}volume --> للتحكم في الصوت**
> **🎶| ${prefix}repeat --> لتكرار الموسيقى**
> **🎶| ${prefix}queue --> لعرض قاءمة التشغيل**
> **🎶| ${prefix}np --> لعرض ما يتم تشغيله**
> **🎶| ${prefix}skipto --> تتخطى اغنيتين **
`,
      `**🛠️Bot Config🛠️**
> **⚒️| ${prefix}blacklist --> تبلع اي شخص بلاك لست فا ما يقدر يستعمل البوت**
> **⚒️| ${prefix}unblacklist --> تفك البلاك لست**
> **⚒️| ${prefix}prefix --> تغير البرفكس**`,
      `${developer}`
    ];
    let page = 1;

    let embed = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setFooter(`Page ${page} of ${pages.length}`)
      .setDescription(pages[page - 1]);

    message.channel.sendEmbed(embed).then(msg => {
      msg.react("◀").then(r => {
        msg.react("▶");

        const backwardsFilter = (reaction, user) =>
          reaction.emoji.name === "◀" && user.id === message.author.id;
        const forwardsFilter = (reaction, user) =>
          reaction.emoji.name === "▶" && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {
          time: 2000000
        });
        const forwards = msg.createReactionCollector(forwardsFilter, {
          time: 2000000
        });

        backwards.on("collect", r => {
          if (page === 1) return;
          page--;
          embed.setDescription(pages[page - 1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed);
        });
        forwards.on("collect", r => {
          if (page === pages.length) return;

          page++;
          embed.setDescription(pages[page - 1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed);
        });
      });
    });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
////كود الميوزك
let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["s", "تخطى"] },
  stop: { cmd: "stop", a: ["ايقاف"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["تخطي الكل", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
   if (!prefixes[msg.uild.id]) prefixes[msg.uild.id] = {
        prefix: process.env.PREFIX,
    };
    var prefix = prefixes[msg.guild.id].prefix;
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 25, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
 //               :watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
     if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.react("❌");
        return msg.channel.send("You don't have permission `ADMINSTRATOR`");
      }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
     
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const prettySeconds = require("pretty-seconds");
const fsn = require("fs-nextra");
//كود الرد التلقاءي
const replyMSG = JSON.parse(fs.readFileSync("./Database/replyMSG.json", "utf8"));

function saveReplay() {

  fs.writeFile("./Database/replyMSG.json", JSON.stringify(replyMSG), function(err) {

    if (err) throw err;

  });

}
/////كود صنع رد تلقائي
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "reply")) {
    if (message.author.bot || message.channel.type == "dm") return undefined;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    if (!replyMSG[message.author.id])
      replyMSG[message.author.id] = {
        contentmessage: "none",
        replayMessage: "none"
      };
    saveReplay();
    let contmessage;

    let filter = m => m.author.id === message.author.id;
    message.channel.send(" |** من فضلك اكتب الرساله الان...** ").then(msg => {
      message.channel
        .awaitMessages(filter, {
          maxMatches: 1,
          time: 12000,
          errors: ["time"]
        })

        .then(collected => {
          contmessage = collected.first().content;
          msg.edit(":scroll: | من فضلك اكتب الرد الان... :pencil2: ");

          message.channel
            .awaitMessages(filter, {
              maxMatches: 1,
              time: 12000,
              errors: ["time"]
            })

            .then(async collectedd => {
              replyMSG[message.author.id] = {
                contentmessage: contmessage,
                replayMessage: collectedd.first().content
              };
              saveReplay();
              var embed1 = new Discord.RichEmbed()
                .setTitle(`Done The Autoreply Setup`)
                .setThumbnail(message.author.avatarURL)
                .setColor(`${color}`)
                .setDescription(
                  `
                    Message:
                    ${contmessage}
                    Reply:
                    ${collectedd.first().content}`
                );
              let steve = await client.fetchUser("359541019836022784");
              embed1.setFooter(
                `رد تلقائي`,
                steve ? steve.displayAvatarURL : message.author.displayAvatarURL
              );
              msg.edit("  |** تم الاعداد بنجاح...**");

              message.channel.send(embed1);
            });
        });
    });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (
    !replyMSG[message.author.id] ||
    !replyMSG[message.author.id].contentmessage ||
    !replyMSG[message.author.id].replayMessage
  )
    return;
  let messagecontent = replyMSG[message.author.id].contentmessage;
  let reply = replyMSG[message.author.id].replayMessage;
  if (message.content == messagecontent) {
    if (messagecontent == "none" || reply == "none") return undefined;
    message.channel.send(`\`#\` ${reply}`);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "new")) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "Support Team"))
      return message.channel.send(
        `This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
      );
    if (
      message.guild.channels.exists(
        "name",
        "ticket-{message.author.id}" + message.author.id
      )
    )
      return message.channel.send(`You already have a ticket open.`);
    message.guild
      .createChannel(`ticket-${message.author.username}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        message.channel.send(
          `:white_check_mark: Your ticket has been created, #${c.name}.`
        );
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to .`
          )
          .setTimestamp();
        c.send({
          embed: embed
        });
      })
      .catch(console.error);
  }

  if (message.content.startsWith(prefix + "old")) {
    if (!message.channel.name.startsWith(`ticket-`))
      return message.channel.send(
        `You can't use the close command outside of a ticket channel.`
      );

    message.channel
      .send(
        `Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`
      )
      .then(m => {
        message.channel
          .awaitMessages(response => response.content === "${prefix}confirm", {
            max: 1,
            time: 10000,
            errors: ["time"]
          })
          .then(collected => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit("Ticket close timed out, the ticket was not closed.").then(
              m2 => {
                m2.delete();
              },
              3000
            );
          });
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
////كود الفيف اوي
const Enmap = require("enmap");
const cd = require("countdown");
const totime = require("to-time");
const dbg = new Enmap({ name: "Giveaway" });

client.on("ready", async (message) => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id && r.content == `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (!m || m.content == `🎉 **GIVEAWAY ENDED** 🎉`) return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}gstart`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}start [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}start 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(`React with 🎉 to enter!\nTime remaining: ${timespan}`)
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(`**🎉 GIVEAWAY 🎉**`, embed)
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (!msg || msg.content == `**🎉 GIVEAWAY ENDED 🎉**`) return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  } else if (args[0] == `${prefix}groll`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}groll [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (m.content != `**🎉 GIVEAWAY ENDED 🎉**`)
            return message.channel.send(`The giveaway is not ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          if (
            m.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          )
            return message.channel.send(``);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u.filter(user => !user.bot).random();
                await message.channel.send(`The new winner is: ${rusers}`);
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  } else if (args[0] == `${prefix}gend`) {
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}gend [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (m.content == `**🎉 GIVEAWAY ENDED 🎉**`)
            return message.channel.send(`The giveaway is ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          let gv = dbg.get(
            `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
          );
          let rusers = m.reactions.map(r =>
            r.users.filter(u => !u.bot).random(parseInt(gv.gwin))
          );
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(gv.gtext)
            .setFooter(`Ended at`);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u
                  .filter(user => !user.bot)
                  .random(parseInt(gv.gwin));
                m.edit(
                  `**🎉 GIVEAWAY ENDED 🎉**`,
                  embed2
                    .setTimestamp()
                    .setDescription(`Winners:\n${rusers || "No winners"}`)
                );
                if (
                  m.reactions
                    .filter(a => a.emoji.name == "🎉")
                    .map(reaction => reaction.count)[0] <= 1
                ) {
                  return message.channel.send(`No winners :rolling_eyes:`);
                } else {
                  message.channel.send(
                    `Congratulations ${rusers}! You won the **${gv.gtext}**`
                  );
                }
                await dbg.delete(
                  `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
                );
                return;
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async msg => {
   if (!prefixes[msg.guild.id]) prefixes[msg.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[msg.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${msg.author.id}`);

if(Blacklist === 'on') return msg.channel.send(``);
  let args = msg.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (msg.content.split(" ")[0].toLowerCase() === prefix + "cr") {
    if (!args) return msg.channel.send("`type namber of color roles`");
    if (!msg.member.hasPermission("MANAGE_ROLES")) return;
    msg.channel.send(`** Done Colors Was Successful Created ${args}**`);
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < `${parseInt(args) + 1}`; x++) {
      msg.guild.createRole({ name: x, color: "RANDOM" });
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content === prefix + "info") {
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;

      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .setThumbnail(client.user.avatarURL)
        .addField("**الدعوات**", `** ↝** [ شخص **${Number(inviteCount)}** ]`)
        .addField(
          "**تم الانضمام للسيرفر من**",
          `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`
        )
        .addField(
          "**رابط دعوة الانضمام**",
          `** ↝** [ **${inviteCode || "Zm2U6we"}** ]`
        )
        .setColor(`${color}`)
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

const invites = {};
client.on("ready", (message) => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});
const m7 = JSON.parse(fs.readFileSync("./Database/m7.json", "utf8"));
client.on("message", async  message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "setinv")) {
    let args = message.content.split(" ").slice(1);
    if (!message.channel.guild)
      return message.reply("**هذا الأمر فقط للسيرفرات**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":information_source: | **لا تملك الصلاحيات الكافيه**"
      );
    let room = args[0];
    if (!room) return message.reply("**اكتب اسم الروم**");
    if (!message.guild.channels.find("name", args[0]))
      return message.reply("**لا يمكنني اجاد الروم**");
    let embed = new Discord.RichEmbed()
      .setTitle("**تم الاعداد بنجاح**")
      .addField("الروم:", room)
      .addField("بواسطة:", `${message.author}`)
      .addField(
        "Time now: ",
        `${moment(message.createdAt).format(" D/MM/YYYY h:mm")}`
      )
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    m7[message.guild.id] = {
      channel: room
    };
    fs.writeFile("./Database/m7.json", JSON.stringify(m7), err => {
      if (err) console.error(err);
    });
  } else {
    client.on("guildMemberAdd", member => {
      member.guild.fetchInvites().then(guildInvites => {
        const gamer = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        let findchannel = member.guild.channels.find(
          "name",
          `${m7[message.guild.id].channel}`
        );
        findchannel
          .send(
            ` join ${member} invited by ${inviter}   (  ${invite.uses} invites )  `
          )
          .catch(err => {
            message.reply(`**انا لا اجد الروم**`);
            console.error(err);
          });
      });
    });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async Epic => {
   if (!prefixes[Epic.guild.id]) prefixes[Epic.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[Epic.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${Epic.author.id}`);

if(Blacklist === 'on') return Epic.channel.send(``);
  if (Epic.content.startsWith(prefix + "vonline")) {
    if (!Epic.guild.member(Epic.author).hasPermissions("MANAGE_CHANNELS"))
      return Epic.reply(":x: **I Dont Have Permissions**");
    if (
      !Epic.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return Epic.reply(":x: **You Dont Have Permissions**");
    Epic.guild
      .createChannel(
        `Voice Online : [ ${
          Epic.guild.members.filter(m => m.voiceChannel).size
        } ]`,
        "voice"
      )
      .then(c => {
        console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
        c.overwritePermissions(Epic.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(
            `Voice Online :  ${
              Epic.guild.members.filter(m => m.voiceChannel).size
            } .`
          );
        }, 1000);
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
////////////
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "setmember")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌ **لا تمتلك صلاحيه**");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ **لا امتلك صلاحيه**");
    message.channel.send("✅| **تم عمل الروم بنجاح**");
    message.guild
      .createChannel(`Members : [ ${message.guild.members.size} ]`, "voice")
      .then(c => {
        console.log(`Done make room in: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(() => {
          c.setName(`Members : [ ${message.guild.members.size} ]`);
        }, 1000);
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

const shorten = require("isgd");
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "short")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.channel.send("**type `&short <link>` **");
    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        if (res.startsWith("Error:"))
          return message.channel.send("**Usage**: " + prefix + "short <link>");
        message.channel.send(`${res}`);
      });
    } else {
      shorten.custom(args[0], args[1], function(res) {
        if (res.startsWith("Error:")) return message.channel.send(`**${res}**`);
        message.channel.send(`**${res}**`);
      });
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async ninja => {
  

   if (!prefixes[ninja.guild.id]) prefixes[ninja.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[ninja.guild.id].prefix;

  let Blacklist = await db.fetch(`Blacklist_${ninja.author.id}`);

if(Blacklist === 'on') return ninja.channel.send(``);
  if (ninja.content === prefix + "close") {
    if (!ninja.channel.guild)
      if(!ninja.channel.guild) return;

    if (!ninja.member.hasPermission("MANAGE_MESSAGES"))
      return ninja.reply("**ليس لديك صلاحيات**");
    ninja.channel
      .overwritePermissions(ninja.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        ninja.reply("**تم قفل الشات :no_entry: **");
      });
  }
  if (ninja.content === prefix + "open") {
    if (!ninja.channel.guild)
      if(!ninja.channel.guild) return;

    if (!ninja.member.hasPermission("MANAGE_MESSAGES"))
      return ninja.reply("**ليس لديك صلاحيات**");
    ninja.channel
      .overwritePermissions(ninja.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        ninja.reply("**تم فتح الشات :white_check_mark:**");
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
/*
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });*/
/////////////)///)/()))/////
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(`${color}`)
      .addField("**Time Taken:**", msg + " ms 📶 ")
      .addField("**WebSocket:**", api + " ms 📶 ")
      .setTimestamp();
    message.channel.send({ embed: embed });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
///////////////
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content === prefix + "hc") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You Dont Have Perms ❌");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("Channel Hided Successfully ! ✅  ");
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
////
/////
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content === prefix + "sc") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("You Dont Have Perms ❌");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("Channel Hided Successfully ! ✅  ");
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });


/*client.on('message' , async message => {
     if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);

fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });*/

client.on('message', async message => {
	     if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if(message.content.split(' ')[0] == prefix +`kick`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | لا تمتلك صلاحية طرد الاعضاء!');
      if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(':no_entry: | انا لا امتلك صلاحية طرد الاعضاء!');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send("نرجوا اتباع التنسيق الاتي: ogkick @Name والسبب");
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send(':no_entry: | لماذا تريد طرد نفسك؟');
      if(user.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | محاولة فاشلة جميلة :3');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنك طرد **${user.user.username}** لأن رتبته اعلي منك!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** لأن رتبته اعلي من رتبتي!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`:no_entry: | لا يمكنني طرد **${user.user.username}** `);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`:no_entry: | لا يمكننك طرد **${user.user.username}** لأنه يمتلك رتبة عالية!`);
      message.guild.member(user).kick(reason, user);
      message.channel.send(`:white_check_mark: | تم بنجاح طرد ${user.user.username} من السيرفر! :airplane: ``${reason}```);
    }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
    
let warns = JSON.parse(fs.readFileSync("./Database/warnings.json"));;
/*const client = new Discord.Client();*/
 
 
client.on('message', async message => {
      if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "warn") { //??? ???????
 
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if(!reason) return message.reply ("**???? ??? ?????**");
 
 
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 
  warns[user.id].warns++;
 
  fs.writeFile("./Database/warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
 
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   client.channels.find('name', 'log').send({
    embed : banembed
  })
 
    if(warns[user.id].warns == 2){ //??? ???????? ??????
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
 
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**??? ???? ?????? ?????**:x: ") .then(m => m.delete(5000));
 
    let mutetime = "60s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);
 
    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.reply(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[user.id].warns == 3){  //??? ???????? ??????
    message.guild.member(user).ban(reason);
    message.reply(`<@${user.id}> has been banned.`)
  }
 
}
}
);
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
      return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!message.guild.member(user).bannable)
      return message.reply(
        "**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `
    );
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    let say = new Discord.RichEmbed()
      .addField(
        "Emebad:",
        `${message.author.username}#${message.author.discriminator}`
      )
      .setDescription(args.join("  "))
      .setColor(`${color}`);
    message.channel.sendEmbed(say);
    message.delete();
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async msg => {
   if (!prefixes[msg.guild.id]) prefixes[msg.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[msg.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${msg.author.id}`);

if(Blacklist === 'on') return msg.channel.send(``);
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

  if (command === "clear") {
    const emoji = client.emojis.find("name", "wastebasket");
    let textxt = args.slice(0).join("");
    if (msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
        msg.delete().then;
        msg.channel
          .send("***```ضع عدد الرسائل التي تريد مسحها 👌```***")
          .then(m => m.delete(3000));
      } else {
        msg.delete().then;
        msg.delete().then;
        msg.channel.bulkDelete(textxt);
        msg.channel
          .send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```")
          .then(m => m.delete(3000));
      }
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.boss) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "mute") {
    if (!message.channel.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("انت لا تملك صلاحيات !! ")
        .then(msg => msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message
        .reply("البوت لايملك صلاحيات ")
        .then(msg => msg.delete(5000));
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole)
      return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {
        msg.delete(5000);
      });
    if (message.mentions.users.size < 1)
      return message.reply("** يجب عليك المنشن اولاً **").then(msg => {
        msg.delete(5000);
      });
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
      .setColor(`${color}`)
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setThumbnail(user.displayAvatarURL)
      .addField(
        "**:busts_in_silhouette:  المستخدم**",
        "**[ " + `${user.tag}` + " ]**",
        true
      )
      .addField(
        "**:hammer:  تم بواسطة **",
        "**[ " + `${message.author.tag}` + " ]**",
        true
      )
      .addField("**:book:  السبب**", "**[ " + `${reason}` + " ]**", true)
      .addField("User", user, true);
    message.channel.send({ embed: muteembed });
    var muteembeddm = new Discord.RichEmbed()
      .setAuthor(`Muted!`, user.displayAvatarURL)
      .setDescription(
        `      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`
      )
      .setFooter(`في سيرفر : ${message.guild.name}`)
      .setColor(`${color}`);
    user.send(muteembeddm);
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ")
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

    let role = message.guild.roles.find(r => r.name === "Muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.sendMessage(
        "**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:"
      );

    await toMute.removeRole(role);
    message.channel.sendMessage(
      "**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:"
    );

    return;
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  let roleembed = new Discord.RichEmbed()
    .setDescription(
      `
    أمثله على الأوامر :
    -role @mention rolename : لأعطاء رتبة لعضو معين
    -role all rolename : لأعطاء رتبة للجميع
    -role humans rolename : لأعطاء رتبة للاشخاص فقط
    -role bots rolename : لأعطاء رتبة لجميع البوتات`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL
    );
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **__ليس لديك صلاحيات__**");
  if (msg.toLowerCase().startsWith(prefix + "roleembed")) {
    if (!args[0]) return message.channel.sendEmbed(roleembed);
    if (!args[1]) return message.channel.sendEmbed(roleembed);
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء الى **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الى الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] تم اعطاء الى البشريين رتبة**"
      );
    }
  } else {
    if (!args[0])
      return message.reply("**:x: يرجى وضع الشخص المراد اعطائها الرتبة**");
    if (!args[1])
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply("**:x: يرجى وضع الرتبة المراد اعطائها للشخص**");
    if (message.mentions.members.first()) {
      message.mentions.members.first().addRole(role1);
      return message.reply(
        "**:white_check_mark: [ " +
          role1.name +
          " ] رتبة [ " +
          args[0] +
          " ] تم اعطاء **"
      );
    }
    if (args[0].toLowerCase() == "all") {
      message.guild.members.forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء الكل رتبة**"
      );
    } else if (args[0].toLowerCase() == "bots") {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البوتات رتبة**"
      );
    } else if (args[0].toLowerCase() == "humans") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.addRole(role1));
      return message.reply(
        "**:white_check_mark: [ " + role1.name + " ] تم اعطاء البشريين رتبة**"
      );
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "ctext")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(" ");
    message.guild.createChannel(`${argrst}`, "text");
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "cvoice")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(" ");
    message.guild.createChannel(`${argrst}`, "voice");
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

/////
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "rename")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNEL")) return;
    var a = message.content
      .split(" ")
      .slice(1)
      .join("  ");
    if (!a) return message.reply(`Example \`${prefix}rename Light\``);
    message.channel
      .setName(`${a}`)
      .then(newChannel =>
        message.channel.send(`channel sacessfoly renamed [**${a}**]`)
      )
      .catch(console.error);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

let ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`));
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  var sender = message.author;

  if (!message.guild) return;
  if (!ar[message.guild.id])
    ar[message.guild.id] = {
      onoff: "Off",
      role: "Member"
    };

  if (message.content.startsWith(prefix + `autorole`)) {
    let perms = message.member.hasPermission(`MANAGE_ROLES`);

    if (!perms)
      return message.reply(
        `You don't have permissions, required permission : Manage Roles.`
      );
    let args = message.content.split(" ").slice(1);
    if (!args.join(" "))
      return message.reply(`${prefix}autorole toggle / set [ROLE NAME]`);
    let state = args[0];
    if (
      !state.trim().toLowerCase() == "toggle" ||
      !state.trim().toLowerCase() == "setrole"
    )
      return message.reply(
        `Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`
      );
    if (state.trim().toLowerCase() == "toggle") {
      if (ar[message.guild.id].onoff === "Off")
        return [
          message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`),
          (ar[message.guild.id].onoff = "On")
        ];
      if (ar[message.guild.id].onoff === "On")
        return [
          message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`),
          (ar[message.guild.id].onoff = "Off")
        ];
    }
    if (state.trim().toLowerCase() == "set") {
      let newRole = message.content
        .split(" ")
        .slice(2)
        .join(" ");
      if (!newRole)
        return message.channel.send(`${prefix}autorole set [ROLE NAME]`);
      if (!message.guild.roles.find(`name`, newRole))
        return message.reply(`I Cant Find This Role.`);
      ar[message.guild.id].role = newRole;
      message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`);
    }
  }
  if (message.content === prefix + "info") {
    let perms = message.member.hasPermission(`MANAGE_GUILD`);
    if (!perms) return message.reply(`You don't have permissions.`);
    var embed = new Discord.RichEmbed()

      .addField(
        `Autorole : :sparkles:  `,
        `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`
      )

      .setColor(`BLUE`);
    message.channel.send({ embed });
  }

  fs.writeFile("./AutoRole.json", JSON.stringify(ar), err => {
    if (err) console.error(err);
  });
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "emoji")) {
    if (message.author.bot) return;
    var emojiid = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    console.log(emojiid);
    if (emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid))
      return message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`);
    else
      message.channel.send("This is the emoji that you requested:-", {
        files: [`https://cde . discordapp.com/emojis/${emojiid}.png`]
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.content.startsWith(prefix + "avatar")) {
    if (!message.channel.guild) return;
    var mentionned = message.mentions.users.first();
    var client;
    if (mentionned) {
      var client = mentionned;
    } else {
      var client = message.author;
    }
    const embed = new Discord.RichEmbed()
      .addField("Requested by:", "<@" + message.author.id + ">")
      .setColor(`${color}`)
      .setImage(`${client.avatarURL}`);
    message.channel.sendEmbed(embed);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
//top
var top = require("./Database/top.json");
function save() {
  fs.writeFileSync("./Database/top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember, message) {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (newMember.user.bot) return;
  if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
  if (!top[newMember.guild.id][newMember.user.id])
    top[newMember.guild.id][newMember.user.id] = {
      text: 0,
      voice: parseInt(Math.random() * 10),
      msgs: 0,
      id: newMember.user.id
    };
  save();
  if (!oldMember.voiceChannel && newMember.voiceChannel) {
    var addXP = setInterval(async function() {
      top[newMember.guild.id][newMember.user.id].voice += parseInt(
        Math.random() * 4
      );
      save();
      if (!newMember.voiceChannel) {
        clearInterval(addXP);
      }
    }, 60000);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async function(message) {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!top[message.guild.id]) top[message.guild.id] = {};
  if (!top[message.guild.id][message.author.id])
    top[message.guild.id][message.author.id] = {
      text: parseInt(Math.random() * 10),
      voice: 1,
      msgs: 0,
      id: message.author.id
    };
  if (top[message.guild.id][message.author.id].msgs > 10) {
    top[message.guild.id][message.author.id].text += parseInt(
      Math.random() * 4
    );
    top[message.guild.id][message.author.id].msgs = 0;
  }
  save();
  var args = message.content.split(" ");
  var cmd = args[0].toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "top text")) {
    var topArray = Object.values(top[message.guild.id]);
    var num = 0;
    var textStr = `${topArray
      .sort((a, b) => b.text - a.text)
      .slice(0, 5)
      .filter(user => user.text > 0 && message.guild.members.get(user.id))
      .map(function(user) {
        if (user.text > 0) {
          return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
        }
      })
      .join("\n")}`;
    var embed = new Discord.RichEmbed()
      .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
      .setColor("13B813")
      .addField(
        `**:speech_balloon: | TEXT LEADERBOARD**`,
        `${textStr}   \n\n\n **\`${prefix}top text\`**`,
        true
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send({
      embed: embed
    });
    //   if (!message.content.startsWith(prefix)) return;
  } else {
    if (message.content.startsWith(prefix + "top voice")) {
      var topArray = Object.values(top[message.guild.id]);
      var num = 0;
      var voiceStr = `${topArray
        .sort((a, b) => b.voice - a.voice)
        .slice(0, 5)
        .filter(user => user.voice > 0 && message.guild.members.get(user.id))
        .map(function(user) {
          if (user.voice > 0) {
            return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
          }
        })
        .join("\n")}`;
      var embed = new Discord.RichEmbed()
        .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
        .setColor("13B813")
        .addField(
          `**:microphone2: | VOICE LEADERBOARD**`,
          `${voiceStr}   \n\n\n **:sparkles:\`${prefix}top voice\``,
          true
        )

        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send({
        embed: embed
      });

      //  break;
      // if (!message.content.startsWith(prefix)) return;
    } else {
      if (message.content.startsWith(prefix + "top")) {
        var topArray = Object.values(top[message.guild.id]);
        var num = 0;
        var textStr = `${topArray
          .sort((a, b) => b.text - a.text)
          .slice(0, 10)
          .filter(user => user.text > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.text > 0) {
              return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`;
            }
          })
          .join("\n")}`;
        num = 0;
        var voiceStr = `${topArray
          .sort((a, b) => b.voice - a.voice)
          .slice(0, 10)
          .filter(user => user.voice > 0 && message.guild.members.get(user.id))
          .map(function(user) {
            if (user.voice > 0) {
              return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`;
            }
          })
          .join("\n")}`;
        var embed = new Discord.RichEmbed()
          .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL)
          .addField(
            "**TOP 5 TEXT :speech_balloon:**",
            `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``,
            true
          )
          .addField(
            "**TOP 5 VOICE :microphone2:**",
            `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``,
            true
          )
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor(`${color}`);
        message.channel.send({
          embed: embed
        });
      }
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
///////)()?;-7///

const temp = JSON.parse(fs.readFileSync('./Database/temp.json', 'utf8'));
client.on('message', async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith( prefix +'temp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === prefix +'temp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
         fs.writeFile("./Database/temp.json", JSON.stringify(temp), (err) => {
        if(err) console.error(err)
       })
      });
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

let xp = require("./Database/xp.json"); //سوي ملف بأسم xp.json

client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  let Addxp = Math.floor(Math.random() * 6) + 8;

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level + 1;
  let nextLvL = xp[message.author.id].level * 1000; //كل كم اكس بي لحتا يرتفع لفله انصحكم تخلونه فوق ال الف
  xp[message.author.id].xp = curxp + Addxp;
  if (nextLvL <= xp[message.author.id].xp) {
    xp[message.author.id].level = xp[message.author.id].level + 1;

    let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setColor(`${color}`)
      .setDescription(`New Level: ` + curlvl)
      .setTimestamp()
      .setFooter(message.author.username + "#" + message.author.discriminator);
    message.channel.send(lvlup);
  }
  fs.writeFile("./Database/xp.json", JSON.stringify(xp), err => {
    if (err) console.log(err);
  });
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nextlvlxp = curlvl * 200;
  let difference = nextlvlxp - curxp;

  if (message.content == prefix + "profile") {
    if (!xp[message.author.id]) {
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    fs.writeFile("./Database/xp.json", JSON.stringify(xp), err => {
      if (err) console.log(err);
    });
    var embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor(`${color}`)
      .setTitle("Your Profile.")
      .addField("XP: ", curxp, true)
      .addField("Level: ", curlvl, true)
      .setFooter(
        ` ${difference} xp till level up `,
        message.author.displayAvatarURL
      );
    message.channel.send(embed);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });


///#)/+#)\¢\¢{}¢\¢\¢[¢{¢}]
//$

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  let Fire = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (Fire === "acredits") {
    let args = message.content.split(" ");
    if (!devs2.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**اكتب عدد الرصيد**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += +args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`** Adedd Money For : \`${args[1]}\` Done **`);
  } else if (Fire === "rcredits") {
    let args = message.content.split(" ");
    if (!devs2.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**اكتب عدد الرصيد**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./Database/credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**, Remove Money For : \`${args[1]}\`**`);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
////////////////////////////////////////////////

const credits = JSON.parse(fs.readFileSync("./Database/credits.json"));
var time = require("./Database/time.json");
client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./Database/credits.json", JSON.stringify(credits, null, 4));
  if (args[0].toLowerCase() == `${prefix}credits`) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is  \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]) || [",", "."].includes(args[2]))
        return message.channel.send(`**:x: | خطا **`);

      if (args[2] < 1) return message.channel.send(`**:x: | خطا**`);
      if (mention.bot) return message.channel.send(`**:x: | خطا**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | خطا**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error ,You dont have credits in your account**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | خطا**`);
      let resulting =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] - args[2] * (5 / 100));
      let tax =
        parseInt(args[2]) == 1
          ? parseInt(args[2])
          : Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let Canvas = require("canvas");
      let canvas = Canvas.createCanvas(108, 40);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.font = "20px Arial Bold";
      ctx.fontSize = "20px";
      ctx.fillStyle = "#ffffff";
      message.channel
        .send(
          `**${
            message.author.username
          }, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
        )
        .then(async essss => {
          message.channel.send(`\`${num}\``).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  essss.delete();
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt **\`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
                      message.author.username
                    }; (ID (${message.author.id})\`\`\``
                  );
                  m.delete();
                  credits[author].credits += Math.floor(
                    -resulting.toLocaleString()
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting.toLocaleString()
                  );
                  fs.writeFileSync(
                    "./Database/credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  essss.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }
  if (args[0].toLowerCase() === `${prefix}daily`) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, your daily :dollar: credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./Database/time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm: | ${message.author.username} you received your :yen: 250 daily credits!**`
      );
      fs.writeFile("./Database/credits.json", JSON.stringify(credits), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async msg => {
   if (!prefixes[msg.guild.id]) prefixes[msg.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[msg.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${msg.author.id}`);

if(Blacklist === 'on') return msg.channel.send(``);
  if (msg.content === prefix + "server") {
    var w1 = msg.guild.createdAt.getFullYear();
    var w2 = msg.guild.createdAt.getMonth();
    var w3 = msg.guild.createdAt.getDate();

    let embed = new Discord.RichEmbed()

      .addField("**اسم السيرفر🔠** :", msg.guild.name)
      .addField("**صورة السيرفر📷**: ", msg.guild.iconURL)
      .addField("**ايدي السيرفر🆔️**:", msg.guild.id)
      .addField("**تاريخ الانشاء 📅**: ", w3 + "/" + w2 + "/" + w1)
      .addField("** مملوك بواسطة 👑 **: ", msg.guild.owner)
      .addField("**الأعضاء👥**: ", msg.guild.memberCount)
      .addField("**مستوى التحقق↗️**: ", msg.guild.verificationLevel)
      .addField("** المنطقة🌍**: ", msg.guild.region)
      .addField("** 🔍عدد الرومات/الفئات**: ", msg.guild.channels.size)
      .addField("**عدد الرولات🔐**: ", msg.guild.roles.size)
      .setDescription(" **لرؤيةجميع الرتب إستخدم #roles **")
      .setColor(`${color}`)
      .setDescription(`${msg.guild.name}`);
    msg.channel.sendEmbed(embed);
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", async message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
  if (message.author.bot) return;
  if (message.content === prefix + "email") {
    function randomem() {
      let email = "";
      const ReBeL =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._";
      for (let i = 0; i < 5; i++)
        email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
      return email;
    }
    function randompass() {
      let pass = "";
      const CoDeS =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 8; i++)
        pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
      return pass;
    }
    const random1 = randomem();
    const random2 = randompass();
    message.author
      .send(
        `
Email : **${random1}@gmail.com**
Password : **${random2}**
`
      )
      .catch(err => {
        if (err == "DiscordAPIError: Cannot send messages to this user") {
          return message.channel.send("**sorry your dm is close**");
        }
      });

    message.channel.send("**account has ben sended in your dm | ☑ **");
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on("message", function(message) {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayRPS = ["**# - Rock**", "**# - Paper**", "**# - Scissors**"];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("Rock", "🇸", true)
      .addField("Paper", "🇸", true)
      .addField("Scissors", "🇵", true);
    message.channel.send(RpsEmbed).then(msg => {
      msg.react("🇸");
      msg.react("🇷");
      msg
        .react("🇵")
        .then(() => msg.react("🇸"))
        .then(() => msg.react("🇷"))
        .then(() => msg.react("🇵"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "🇸" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "🇷" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🇵" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 12000
      });

      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 12000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 12000
      });
      reaction1.on("collect", r => {
        message.channel.send(result);
      });
      reaction2.on("collect", r => {
        message.channel.send(result);
      });
      reaction3.on("collect", r => {
        message.channel.send(result);
      });
    });
  }
});
{
}
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

//////////
client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.content == prefix + "hq") {
    message.react("🤔", "👌");
    var x = [
      "اين يلعب مصطفي فتحي؟",
      "ما هو اسم ملعب بارشالونة",
      "ما هو يوم الحج الأكبر؟",
      "ما هو أطول أنهار أوربا ؟",
      "ما هو اسم بيت الدجاج",
      "ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م",
      "ما هو أول جامع أقيم في مصر",
      "ما هو أطول نهر في آسيا",
      "ما هو أقرب كوكب إلى الشمس",
      "ما هو الحيوان الذي يُسمى البهنس",
      "ما هو اول مسجد أسس بالمدينة",
      "متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟",
      "متى قامت أمريكا بأول رحلة فضائية",
      "متى كانت غزوة خيبر؟",
      'ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟',
      "ما هي السورة التي يطلق عليها عروس القرآن",
      "ماذا يسمى من لايقرأ ولايكتب",
      "ماهي أول دولة استخدمت طابع البريد",
      "ماهو شعار الولايات المتحدة الامريكية",
      "ماهو اذكي الحيوانات",
      "من هو مكتشف أمريكا",
      'مامعنى "فرعون" اجب؟',
      "ماهو اقرب كوكب إلى الارض",
      "ما هي نسبه المياه من الكره الارضيه?",
      "كم عدد السجدات في القرآن الكريم؟",
      "من هو بطل كاس العالم في عام 1966",
      "أين أفتتح اول متحف في العالم?",
      "ماأسم أنثى الحمار?",
      "كم تبلغ درجه حراره الشمس؟",
      "من هي مدينة الضباب",
      "أين توجد أطول سكة حديد في العالم?"
    ];
    var x2 = [
      "التعاون",
      "كامب نو",
      "يوم النحر",
      "الدانوب",
      "قن",
      "البنك الهولندي",
      "جامع عمرو بن العاص",
      "اليانجستي",
      "عطارد",
      "الاسد",
      "مسجد قباء",
      "6",
      "سنة 1962",
      "عام 7هـ",
      "الاحزاب",
      "سورة الرحمن",
      "امي",
      "بريطانيا",
      "النسر الاصلع",
      "الدلفين",
      "كولمبس",
      "البيت الكبير",
      "الزهره",
      "71%",
      "15 سجدة",
      "انكلترا ",
      "القاهرة",
      "الاتان",
      "15 مليون درجه مئوية",
      "لندن",
      "كندا"
    ];
    var x3 = Math.floor(Math.random() * x.length);
    message.channel
      .send(
        `📢 You have a minute to answer the question, the question says: **${x[x3]}**`
      )
      .then(msg1 => {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
          thing: true,
          maxMatches: 1,
          time: 60000,
          maxUses: 1,
          errors: ["time"]
        });
        r.catch(() => {
          return message.channel.send(
            `:negative_squared_cross_mark: The time is up and no one has written the right answer `
          );
        });

        r.then(collected => {
          message.channel.send(
            `${collected.first().author}  You have typed the correct answer`
          );
          message.react("✅");
        });
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
//////////
client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.content == prefix + "capitals") {
    var x = [
      "ما عاصمة **المغرب**",
      "ما عاصمة **افغانستان**",
      "ما عاصمة **الجزائر **",
      "ما عاصمة **الارجنتين",
      "ما عاصمة ** مصر**",
      "ما عاصمة ** استراليا**",
      "ما عاصمة ** البرازيل**",
      "ما عاصمة **قطر  **",
      "ما عاصمة **السعودية  **",
      "ما عاصمة **سوريا  **",
      "ما عاصمة **تركيا  **",
      "ما عاصمة **العراق  **",
      "ما عاصمة **لبنان  **",
      "ما عاصمة **فلسطين  **",
      "ما عاصمة **امريكا  **",
      "ما عاصمة **كندا  **",
      "ما عاصمة **البرازيل  **"
    ];
    var x2 = [
      "الرباط",
      "كابل",
      "الجزائر",
      "بوينس ايرس",
      "القاهرة",
      "كانبرا",
      "برازيليا",
      "الدوحة",
      "الرياض",
      "دمشق",
      "انقرة",
      "بغداد",
      "بيروت",
      "القدس",
      "وشنطن",
      "اوتاوا",
      "برازيليا"
    ];

    var x3 = Math.floor(Math.random() * x.length);
    message.channel
      .send(
        `**${x[x3]}**
You have 20 seconds to answer the question`
      )
      .then(msg1 => {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
          maxMatches: 1,
          time: 20000,
          errors: ["time"]
        });
        r.catch(() => {
          return message.channel
            .send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
         الصحيحةة هيا **${x2[x3]}**`);
        });

        r.then(collected => {
          message.channel.send(
            `${collected.first().author}You have solved the question🎉`
          );
        });
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
///////////
client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.reply("** This command only for servers **");
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command === "kill") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**الانتحار مو زين و الله**`);
    if (sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("**** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

///////////
client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "xo")) {
    let array_of_mentions = message.mentions.users.array();
    let symbols = [":o:", ":heavy_multiplication_x:"];
    var grid_message;

    if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
      let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let random2 = Math.abs(random1 - 1);
      if (array_of_mentions.length == 1) {
        random1 = 0;
        random2 = 0;
      }
      var player1_id = message.author.id;
      let player2_id = array_of_mentions[random2].id;
      var turn_id = player1_id;
      var symbol = symbols[0];
      let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
      if (player1_id == player2_id) {
        initial_message += "\n_(والله لفضحك تلعب مع نفسك 😂)_";
      }
      message.channel
        .send(`Xo ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
      message.channel
        .send(
          ":one::two::three:" +
            "\n" +
            ":four::five::six:" +
            "\n" +
            ":seven::eight::nine:"
        )
        .then(new_message => {
          grid_message = new_message;
        })
        .then(console.log("Successful tictactoe game initialization"))
        .catch(console.error);
      message.channel
        .send("plz wate for 🆗 reaction🤗")
        .then(async new_message => {
          await new_message.react("1⃣");
          await new_message.react("2⃣");
          await new_message.react("3⃣");
          await new_message.react("4⃣");
          await new_message.react("5⃣");
          await new_message.react("6⃣");
          await new_message.react("7⃣");
          await new_message.react("8⃣");
          await new_message.react("9⃣");
          await new_message.react("🆗");
          await new_message
            .edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
            .then(new_new_message => {
              require("./xo.js")(
                client,
                message,
                new_new_message,
                player1_id,
                player2_id,
                turn_id,
                symbol,
                symbols,
                grid_message
              );
            })
            .then(console.log("Successful tictactoe listener initialization"))
            .catch(console.error);
        })
        .then(console.log("Successful tictactoe react initialization"))
        .catch(console.error);
    } else {
      message
        .reply(`menchen user you wont to play with him🕹️`)
        .then(console.log("Successful error reply"))
        .catch(console.error);
    }
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

///////////
client.on("message", message => {
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  if (message.content.startsWith(prefix + "hack")) {
    if (!message.author.id === "") return;
    if (message.author.bot) return;
    message.delete();
    let args = message.content.split(" ").slice(1);

    let virusname = args.join(" ");
    if (virusname < 1) {
      return message.channel.send("**```type user you wont to hack👾👾```**");
    }
    message.channel
      .send({
        embed: new Discord.RichEmbed()
          .setTitle("Loading " + virusname + "...")
          .setColor(0xff0000)
      })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓ ] 1%")
              .setColor(0xff0000)
          });
        }, 1000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓ ] 2%")
              .setColor(0xff0000)
          });
        }, 2000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓ ] 3%")
              .setColor(0xff0000)
          });
        }, 3000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: Loading Discord Virus [▓▓▓▓ ] 4%")
              .setColor(0xff0000)
          });
        }, 4000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" + virusname + "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%"
              )
              .setColor(0xff0000)
          });
        }, 5000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%"
              )
              .setColor(0xff0000)
          });
        }, 6000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%"
              )
              .setColor(0xff0000)
          });
        }, 7000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%"
              )
              .setColor(0xff0000)
          });
        }, 8000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%"
              )
              .setColor(0xff0000)
          });
        }, 9000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%"
              )
              .setColor(0xff0000)
          });
        }, 10000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%"
              )
              .setColor(0xff0000)
          });
        }, 11000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%"
              )
              .setColor(0xff0000)
          });
        }, 12000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%"
              )
              .setColor(0xff0000)
          });
        }, 13000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%"
              )
              .setColor(0xff0000)
          });
        }, 14000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%"
              )
              .setColor(0xff0000)
          });
        }, 15000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%"
              )
              .setColor(0xff0000)
          });
        }, 16000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%"
              )
              .setColor(0xff0000)
          });
        }, 17000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]:" +
                  virusname +
                  "done it's going good 100.9%"
              )
              .setColor(0xff0000)
          });
        }, 18000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يتم تهكير ")
              .setColor(0xff0000)
          });
        }, 19000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: تحديث بسيط" + virusname + ".key")
              .setColor(0xff0000)
          });
        }, 22000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 5...")
              .setColor(0xff0000)
          });
        }, 25000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 4...")
              .setColor(0xff0000)
          });
        }, 26000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 3...")
              .setColor(0xff0000)
          });
        }, 27000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 2...")
              .setColor(0xff0000)
          });
        }, 28000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle("[" + virusname + "]: يرجى انتضار ثواني 1...")
              .setColor(0xff0000)
          });
        }, 29000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%"
              )
              .setColor(0xff0000)
          });
        }, 30000);
        setTimeout(function() {
          m.edit({
            embed: new Discord.RichEmbed()
              .setTitle(
                "[" +
                  virusname +
                  "]: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added"
              )
              .setColor(0xff0000)
          });
        }, 31000);
        setTimeout(function() {
          m.delete();
        }, 32000);
        setTimeout(function() {
          message.channel.send("**This user has ben hacked😂😆**");
        }, 33000);
      });
  }
});
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });

client.on('message', async message => {
  

   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;

  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
    if (message.content == prefix + "math") {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"10000000000+2=?",
"232+21=?",
"12+23=?",        
"9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10000000002",
  "253",
  "35",
'81',
        "72",
        "16",
        "42",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يحل المسأله :  __**${x[x3]}**__
لديك 15 ثانية لحل ضرب`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
        })
        })
    }
})
fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
client.on('message', async message => {
  
   if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;

  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
    if (message.content == prefix + "fkk")
      {
        var x = ["محمد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"ريضيات",
"بسم الله رحمن رحيم",
"طماطم",
"سيرفر",
];
        var x2 = ['م ح م د',
        "م د ر س ة",
        "ب ي ت ",
        "ا ل ل ه",
"ب ي ت م ق د س",
"م ه ن د س",
"ر ي ض ي ا ت",
"ب س م ا ل ل ه ر ح م ن ر ح ي م",
"ط م ا ط م",
"س ي ر ف ر",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  فكك
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
        })
        })
    }
})

fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });
    
    client.on('message', async message => {
    	     if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {

        prefix: process.env.PREFIX,

    };

    var prefix = prefixes[message.guild.id].prefix;
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);

if(Blacklist === 'on') return message.channel.send(``);
                      if (message.content.startsWith(prefix + "fast")) {
                        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                      
                      const type = require('./2sr3.json');
                      const item = type[Math.floor(Math.random() * type.length)];
                      const filter = response => {
                          return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                      };
                      message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                      
                            
                      msg.channel.send(`${item.type}`).then(() => {
                              message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                              .then((collected) => {
                          message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                          console.log(`[Typing] ${collected.first().author} typed the word.`);
                                })
                                .catch(collected => {
                                  message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                                })
                          })
                        })
                      }
                      });
                      fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {

        if (err) console.error(err);

    });