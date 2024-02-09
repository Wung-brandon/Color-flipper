const colors = ["green", "red", "yellow", "blue", "rgba(255, 170, 1, 0.804)",
"rgba(200, 150, 1, 0.804)", "rgb(128,0,0)", "#ffa500", "#800080", "#a52a2a",
"#ffc0cb", "#7fffd4", "indigo", "violet", "white"]

const btn = document.getElementById("change")
const coloring = document.querySelector(".colorName")

btn.addEventListener('click', function(){
    // get random number 
    const random_number = Math.floor(Math.random() * colors.length);
    console.log(random_number)
    document.body.style.backgroundColor = colors[random_number]
    coloring.innerHTML = colors[random_number]
    coloring.style.color = colors[random_number]
})