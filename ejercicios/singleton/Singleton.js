class Singleton {
	static #instance;

	constructor() {
		//init
		
	}

	static getInstance() {
		if(!Singleton.instance) {
			//como estamos dentro de la clase, si podemos llamar al constructor privado
			Singleton.instance = new Singleton()
		}

		return Singleton.instance;
	}
}

export default Singleton;

