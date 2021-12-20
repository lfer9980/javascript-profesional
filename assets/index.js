import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ 
	el: video, 
	plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.getElementById('button-play');
const muteButton = document.getElementById('button-mute')
playButton.onclick = () => player.togglePlay();	
muteButton.onclick = () => player.toggleMute();