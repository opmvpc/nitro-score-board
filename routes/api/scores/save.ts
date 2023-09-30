export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const score = JSON.parse(body);

  const scores = (await useStorage("db").getItem("scores")) ?? [];

  if (scores.some((x) => x.name === score.name)) {
    const oldScore = scores.find((x) => x.name === score.name);
    if (oldScore.score < score.score) {
      oldScore.score = score.score;
    }
  } else {
    scores.push(score);
  }

  await useStorage("db").setItem("scores", scores);

  return { message: "ok" };
});
