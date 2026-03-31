import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';

export const app = Fastify({
  logger: true,
});

app.register(cors, { origin: '*' });
app.register(helmet);
app.register(rateLimit, { max: 100, timeWindow: '1 minute' });


app.get('/health', async () => {
  return { status: 'ok' };
});

app.register(async (fastify) => {
  fastify.get('/auth/register', async () => ({ message: 'register route' }));
  fastify.get('/auth/login', async () => ({ message: 'login route' }));
  fastify.get('/users/me', async () => ({ id: 1, name: 'Demo User' }));
  fastify.get('/transactions', async () => []);
});

export default app;