export default defineNitroConfig({
  storage: {
    db: { driver: 'fs', base: './data/db' },
  },
  routeRules: {
    '/api/**': {
      cors: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
  },
});
