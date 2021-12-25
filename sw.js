//nombre del cache file
const VERSION = 'v1'

//self es el this de los serviceWorkers
self.addEventListener('install', event => {
	event.waitUntil(precache());
})

//esta funcion intentara buscar el request en el cache
self.addEventListener('fetch', event => {
	//guardamos la peticion para buscarla en cache
	const request = event.request;
	//trabajar solo con peticiones get
	if (request.method !== 'GET') {
		return;
	}
	//buscar en cache
	event.respondWith(cachedResponse(request))

	//actualizar el cache con nuevas versiones en internet
	event.waitUntil(updateCache(request))

})

async function precache () {
	const cache = await caches.open(VERSION);
	return cache.addAll([]);
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);

	//si no tenemos el asset en cache, entonces haz la peticion a la red
	return response || fetch(request)
}


async function updateCache(request) {
	const cache = await caches.open(VERSION);
	const response = await fetch (request);
	return cache.put(request, response)
}