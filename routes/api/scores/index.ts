export default defineEventHandler(async () => {
  const scores = (await useStorage("db").getItem("scores")) ?? [];
  scores
    .sort((a, b) => {
      return a.score - b.score;
    })
    .reverse();

  return scores;
});
