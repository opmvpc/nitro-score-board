export default defineEventHandler(async (event) => {
  const body = await readFormData(event);
  const score = body.get('score');
  const name = body.get('name').trim();

  const scores = (await useStorage('db').getItem('scores')) ?? [];

  if (scores.some((x) => x.name === name)) {
    const oldScore = scores.find((x) => x.name === name);
    if (oldScore.score < score) {
      oldScore.score = score;
    }
  } else {
    scores.push({ name: name, score: score });
  }

  await useStorage('db').setItem('scores', scores);

  return { message: 'ok' };
});
