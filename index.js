//alert("hello world!");
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/toys") //fetching data
    .then(function (response) {
      return response.json();
    })
    .then(function (toys) {
      console.log(toys);
      let toysDetails = document.getElementById("Toys_container");
      console.log(toysDetails);
      for (let toy of toys) {
        //console.log(toy.name);
        toysDetails.innerHTML += `
      <h3>${toy.name}</h3>
      <p>likes:${toy.likes}</p>
      `;
      }
    });

  document.getElementById("sbmt").addEventListener("click", function (e) {
    let c = document.getElementById("cmnt").value;
    document.getElementById("display").textContent = c;

    e.preventDefault();
  });

  document.getElementById("cancel").addEventListener("click", function (e) {
    let d = document.getElementById("display");

    e.preventDefault();
  });
  const h2 = document.getElementById("w");
  h2.addEventListener("mouseenter", function (e) {
    alert("your no.1 toy review store");
  });
});

/*const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e3be694654msh19cfd3429e58090p1947bfjsn60b742f356da",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
  .then((response) => response.json())
  .then((data) => {
    const list = data;
    list.map((item) => {
      console.log(item);
      const name = item.title;
      const poster = item.image.imageurl;
      const movie = `<li><img src = "${poster}"><h4>${name}</h4></li>`;
      document.querySelector(".movies").innerHTML += movie;
    });
  })
  .catch((err) => console.error(err));
document.addEventListener("DOMContentLoaded", function () {
  fetch();
});*/
