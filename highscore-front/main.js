const getScores = async () => {
  console.log(window.location.host);
  const url = new URL(window.location);
  url.port = 3000;
  url.pathname = '/api/scores';
  console.log(url);

  const res = await fetch(url);
  const scores = await res.json();
  console.log(scores);
  let html = '';
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    html += `
      <li>
        ${score.name} : ${score.score}
      </li>
    `;
    console.log(score.name);
  }

  const list = document.querySelector('#scores-list');
  console.log(list);
  list.innerHTML = html;
};

const app = document.querySelector('#app');
app.innerHTML = `
<h1>Highscores</h1>

<ul id="scores-list"></ul>

<h2>Ajouter</h2>

<form>
  <input type="text" name="name" value="Papy Pipou" />
  <input type="number" name="score" value="1337" />
  <button>enregistrer</button>
</form>
`;

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  url.port = 3000;
  url.pathname = '/api/scores/save';

  await fetch(url, {
    method: 'POST',
    body: new FormData(form),
  });
  await getScores();
});

getScores();
