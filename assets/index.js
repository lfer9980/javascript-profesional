import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'
import Ads from './plugins/Ads/index.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ 
	el: video, 
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton = document.getElementById('button-play');
const muteButton = document.getElementById('button-mute')
playButton.onclick = () => player.togglePlay();	
muteButton.onclick = () => player.toggleMute();


//validamos si el navegador cuenta con serviceWorker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
	//es importante manejar errores porque pueden presentarse durante el registro del archivo
	.catch(error => {
		console.log(error.message)
	})
}