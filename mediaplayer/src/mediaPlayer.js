class MediaPlayer {
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins||[];
		this.#initPlayer();
		this.#initPlugins();
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

	//iniciar el contenedor de forma dinamica
	#initPlayer() {
		this.container = document.createElement('div')
		this.container.style.position = "relative"
		this.media.parentNode.insertBefore(this.container, this.media)
		this.container.appendChild(this.media)
	}

	#initPlugins() {
		//le pasaremos a los players copias del this original
		const player = {
			media: this.media,
			container: this.container,
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
