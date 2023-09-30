import "./style.css";

const getScores = async () => {
  const url = new URL(
    import.meta.env.VITE_BACKEND_URL ?? document.location.href
  );
  url.pathname = "/api/scores";

  const res = await fetch(url, {
    method: "GET",
  });
  const scores = await res.json();
  let html = "";
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    html += `
      <li>
        ${score.name} : ${score.score}
      </li>
    `;
  }

  const list = document.querySelector("#scores-list");
  list.innerHTML = html;
};

const app = document.querySelector("#app");
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

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const url = new URL(
    import.meta.env.VITE_BACKEND_URL ?? document.location.href
  );
  url.pathname = "/api/scores/save";

  const data = {
    name: form.name.value,
    score: form.score.value,
  };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  await getScores();
});

getScores();