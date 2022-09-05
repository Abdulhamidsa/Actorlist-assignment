fetch("./json/actros.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

fetch("./json/actros.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    actorList(data);
  });

function actorList(data) {
  data.forEach(showActor);
}

function showActor(actor) {
  console.log(actor);
  const template = document.querySelector("#actrosTemplate").content;
  const copy = template.cloneNode(true);
  if (actor.movie === "Pulp Fiction") {
    copy.querySelector(".show").style.backgroundColor = "#8db07e";
  } else if (actor.movie === "Goodfellas") {
    copy.querySelector(".show").style.backgroundColor = "#699bb5";
  } else if (actor.movie === "Inception") {
    copy.querySelector(".show").style.backgroundColor = "#f7d85b";
  } else if (actor.movie === "Fight Club") {
    copy.querySelector(".show").style.backgroundColor = "#af504b";
  }
  copy.querySelector("h2").textContent = actor.fullname;
  const parent = document.querySelector("article");
  copy.querySelector(".show").addEventListener("click", () => {
    console.log("clicked");
    document.querySelector(".model p").textContent = "Actor full name is :" + "  " + actor.fullname;
    document.querySelector(".model :nth-child(2)").textContent = "Movie participated in :" + "  " + actor.movie;
    ////////
    document.querySelector(".model").style.display = "flex";
    document.querySelector("main").style.backgroundColor = "#00000092";
    document.querySelector("article").style.opacity = "0.5";
    document.querySelector("article").style.pointerEvents = "none";
    ////////
  });
  document.querySelector(".closePop").addEventListener("click", () => {
    document.querySelector(".model").style.display = "none";
    document.querySelector("main").style.backgroundColor = "";
    document.querySelector("article").style.opacity = "1";
    document.querySelector("article").style.pointerEvents = "";
  });
  parent.appendChild(copy);
} /* function showpop(actor) {
/* document.querySelector("")
 */ /* 
console.log("clicked");
document.querySelector(".show").textContent = "Movie participated in" + " : " + actor.movie + "  " + " -- " + "Actor's full name" + " : " + actor.fullname; */
