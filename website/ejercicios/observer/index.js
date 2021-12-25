class PriceValue {
	observers = []

	constructor() {
		const el = document.getElementById('value');
		el.addEventListener('input', () => {
			console.log(el.value)
			this.notify(el.value)
		})
	}

	subscribe(observer) {
		this.observers.push(observer)
	}
	unsubscribe(observer) {
		const index = this.observers.findIndex(obs => obs === observer)
		this.observers.splice(index, 1);
	}

	notify(data) {
		this.observers.forEach(observer => observer.update(data))
	}
}

class PriceObserver {
	#el;
	constructor() {
		this.el = document.getElementById('price');
	}

	update(data) {
		this.el.innerText = data;
	}
}


const values = new PriceValue()
const display = new PriceObserver()

values.subscribe(display)

setTimeout(() => {
	values.unsubscribe(display)
}, 5000);