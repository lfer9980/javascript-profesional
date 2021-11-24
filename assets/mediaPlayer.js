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
		this.plugins.forEach(plugin => {
			plugin.run(this);
		})
	}

}

export default MediaPlayer
