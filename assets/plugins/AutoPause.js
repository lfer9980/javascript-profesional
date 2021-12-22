class AutoPause {
	constructor() {
		this.threshold = 0.25
		//usado para corregir error al invocar los métodos del player en el intersectionObserver
		//con esto, el this de handleintersection apuntara a la clase autoPause
		//se puede evitar con un arrow function
		this.handleIntersection = this.handleIntersection.bind(this)
		this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
	}

	run(player) {
		//instanciamos el mediaPlayer dentro de autoPause para utilizarlo
		this.player = player;
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: this.threshold
		});

		observer.observe(player.media);

		document.addEventListener("visibilitychange", this.handleVisibilityChange);
	}

	handleIntersection(entries) {
		//como solo hay un elemento a observar, tomamos la primera posicion del array
		const entry = entries[0];

		const isVisible = entry.intersectionRatio >= this.threshold

		if (isVisible) {
			this.player.play();
		} else {
			this.player.pause();
		}
	} 

	handleVisibilityChange() {
		const isVisible = document.visibilityState === "visible";

		if (isVisible) {
			this.player.play();
		} else {
			this.player.pause();
		}

	}
}


export default AutoPause