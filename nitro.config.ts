export default defineNitroConfig({
  storage: {
    db: { driver: "fs", base: "./data/db" },
  },
  routeRules: {
    "/api/scores/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": import.meta.env.NITRO_FRONT_URL ?? "*",
      },
    },
  },
});
