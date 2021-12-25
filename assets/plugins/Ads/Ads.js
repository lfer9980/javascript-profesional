import JSONAds from './ads.json' assert {type: "json"}

const ALL_ADS = JSONAds

class Ads {
	#ads;

	constructor() {
		if (typeof Ads.instance === 'object') {
			return Ads.instance
		}
		Ads.instance = this
		this.#initAds()
		return this
	}

	#initAds() {
		//hacemos una copia de los elementos en el array
		this.#ads = [...ALL_ADS]
	}

	getAd() {
		if (this.#ads.length === 0) {
			this.#initAds()
		}
		return this.#ads.pop();
	}

}

export default Ads;