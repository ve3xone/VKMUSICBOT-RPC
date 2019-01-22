const fetch = require('node-fetch')
	, DiscordRPC = require('discord-rpc')
	, userid = String(require('fs').readFileSync('./user_id.txt'))
	, usrtoken = String(require('fs').readFileSync('./token.txt'))
	, statusget = `https://api.vk.com/method/users.get?user_id=${userid}&fields=status&lang=0&access_token=${usrtoken}&v=5.92`
	, rpc = new DiscordRPC.Client({ transport: 'ipc' });

function discordrpcupdate() {
	fetch(statusget)
		.catch(error => {
			rpc.clearActivity();
			rpc.destroy();
			console.error(`\n[VK] ERROR ON REQUEST:\n  Type: ${error.type}\n  Code: ${error.code}`);
			process.exit(1)
		})
		.then(res => res.json())
		.then(data => {
			if(data.error) {
				if(data.error.error_msg) {
					console.log('[DATA] Error: ' + data.error.error_msg)
				}
				else {
					console.log(data.error)
				};
				rpc.clearActivity();
				rpc.destroy();
				process.exit(1)
			};

			console.clear();
			if(data.response[0].status_audio) {
				const author = data.response[0].status_audio.artist;
				const song = data.response[0].status_audio.title;
				console.log(`\n  ------Сейчас играет------\n\n  Автор: ${author}\n  Название: ${song}`);
				rpc.setActivity({
					details: author,
					state: song,
					largeImageKey: 'vk',
					smallImageKey: 'play'
				})
			}
			else {
				console.log('\n\n  Похоже, что у тебя сейчас не играет музыка');
				rpc.clearActivity()
			}
		})
		.catch(error => console.error(error))
};

rpc.login('537357404908552192')
	.catch(error => {
		console.error(`[DISCORD] ERROR: ${error.message}`);
		process.exit(1)
	})
	.then(function() {
		discordrpcupdate();
		setInterval(discordrpcupdate, 5000)
	})