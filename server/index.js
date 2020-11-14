import express from 'express'
const app = express()

import services from './services'

const serviceNames = Object.keys(services)

for (let i = 0; i < serviceNames.length; i++) {
	const name = serviceNames[i]
	if (name === 'graphql') {
		services[name].applyMiddleware({ app })
	} else {
		app.use(`/${name}`, services[name])
	}
}

app.listen(8000, () => console.log('Running'))