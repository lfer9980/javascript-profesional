class MediaPlayer {
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins||[];
		this._initPlugins();
	}
	play() {
		this.media.play()
	}
	pause() {
		this.media.pause()
	}
	togglePlay() {
		this.media.paused
			? this.play()
			: this.pause()
	}
	toggleMute() {
		this.media.muted = !this.media.muted
	}

	_initPlugins() {
		//le pasaremos a los players copias del this original
		const player = {
			media: this.media,
			play: () => this.play(),
			pause: () => this.pause(),
			toggleMute: () => this.toggleMute(),
		}

		this.plugins.forEach(plugin => {
			plugin.run(player);
		})
	}

}

export default MediaPlayer
