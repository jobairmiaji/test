// console.log("I am test.js and linked.");

const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data.data.tools[0]));
};

loadData();
