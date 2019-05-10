const site = {
	"hp": "https://heuteporno.com",
	"hm": "http://hentaimama.com/",
	"ph": "https://pornhub.com",
	"ph": "https//xnxx.com"
};

const defaultSite = "hp";

const Command = require('command');

module.exports = function hentaiAnywhere(mod) {
	const command = Command(mod);
	
	command.add(["lewd", "hentai", "porn"], (key)=>{
		if(key == undefined)
			key = defaultSite;
		
		mod.send("S_SHOW_AWESOMIUMWEB_SHOP", {
			unk: 104,
			url: site[key]
		});
	});
	
}