export default defineNitroConfig({
  storage: {
    db: { driver: "vercelKV" },
  },
  routeRules: {
    "/api/scores/**": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
});
