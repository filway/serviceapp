const message = require('./lib/message')
const store = require('./lib/store')
const http = require('./lib/http')

const plgs = {
	store,
	message,
	http,
	install(Vue) {
		this.store._init()
		for (let i in this) {
		  if (i == 'install') {
			continue
		  }
		  Vue.prototype[i] = this[i]
		}
		
		delete this.install
	}
}

export default plgs