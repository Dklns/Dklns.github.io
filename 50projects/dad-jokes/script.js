// const jokes = ['jokes', 'klns', 'llxs', 'ylrs', 'xlys'];
// let index = 1;
// const btn = document.querySelector(".container .btn");
// const para = document.querySelector(".container p");

// btn.addEventListener("click", () => {
//     para.innerHTML = jokes[index++];
//     index %= jokes.length;
// })

const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}