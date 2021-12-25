import MediaPlayer from '../../mediaPlayer.js'
import Ads from './Ads.js';


class AdsPlugin {
	#ads
	#player
	#media
	#currentAd

	constructor() {
		this.#ads = new Ads();
	}


	run(player) {
		this.#player = player;
		this.#media =this.#player.media;
		this.#media.addEventListener('timeupdate', this.#handleTimeUpdate);
	}

	#handleTimeUpdate = () => {
		const currentTime = Math.floor(this.#media.currentTime);
		if(currentTime %30 === 0) {
			this.#renderAd()
		}
	}

	#renderAd() {
		if (this.#currentAd) {
			return;
		}
		const ad = this.#ads.getAd();
		this.#currentAd = ad
		console.log(this.#currentAd);
	}
}

export default AdsPlugin