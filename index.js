let images=[
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
    
];
let dice= document.querySelectorAll("img");
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        let dieTwoValue = Math.floor(Math.random()*6);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        if (dieOneValue > dieTwoValue) {
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
          }
          else if (dieTwoValue > dieOneValue) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
          }
          else {
            document.querySelector("h1").innerHTML = "Draw!";
          }
          
    },
    1000
    );
}
roll();

