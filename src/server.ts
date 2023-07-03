import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

// http://localhost:3333

const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
