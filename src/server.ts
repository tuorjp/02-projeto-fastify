/* eslint-disable prettier/prettier */
import fastify from 'fastify'

const app = fastify()

// http://localhost:3333/hello

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
