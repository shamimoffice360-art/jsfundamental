console.log("session 6.2");

let ulElement = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

let fetching = fetch("https://jsonplaceholder.typicode.com/users");
fetching
  .then((data) => {
    return data.json();
  })
  .then((jsonData) => {
    // let name = jsonData[4].name;

    jsonData.forEach((item) => {
      // console.log(item.name);

      let name = item.name;

      let liElement = document.createElement("li");
      liElement.innerText = name;
      ulElement.appendChild(liElement);

      //   console.log(name);
    });
  })
  .catch((err) => {
    console.log(err);
  });

button.addEventListener("click", () => {
  let value = input.value;
  // console.log(value);

  let eleemetn = document.createElement("li");
  // console.log(eleemetn);

  eleemetn.innerHTML = value;

  ulElement.appendChild(eleemetn);
  input.value = "";
});

let div = document.querySelector(".eventHandle");

// console.log(div);

div.addEventListener("mouseenter", () => {
  div.style.fontSize = "20px";
});
div.addEventListener("mouseleave", () => {
  div.style.fontSize = "100px";
});

input.addEventListener("keydown", (keyname) => {
  //   console.log(keyname.key);
  if (keyname.key == "Enter") {
    let value = input.value;
    // console.log(value);

    let eleemetn = document.createElement("li");
    // console.log(eleemetn);

    eleemetn.innerHTML = value;

    ulElement.appendChild(eleemetn);
    input.value = "";
  }
});
