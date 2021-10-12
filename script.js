// fetchAPI returns PROMISES : it returns fulfilled and reject or ongoing.
// 90% time we consume PROMISES and not create PROMISES.
// Using PROMISES
// GET https://icanhazdadjoke.com/
const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     fetch("https://icanhazdadjoke.com/", setHeader)
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };
// jokeBtn.addEventListener("click", generateJokes);

// Using Async Await : make promises complexity simple.
// In function, syntax will be : async function() { };
const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json",
            },
        };
        const res = await fetch("https://icanhazdadjoke.com/", setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log(`The error is ${error}`);
    }
};
jokeBtn.addEventListener("click", generateJokes);
