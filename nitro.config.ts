export default defineNitroConfig({
  storage: {
    db: { driver: 'fs', base: './data/db' },
  },
});
