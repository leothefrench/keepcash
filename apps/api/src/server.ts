import app from './app';

const PORT = 4000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
