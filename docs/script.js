const keys = []
const secretDiv = document.querySelector('.secretDiv')
const secretCode = ["E","\"","*","#","l","@","G"," ", "#","$","a"," ", "Y", "&", "Y", "N", "g", "o", "$", "p","@","p","m","h","@","e","d","p","e","p"]

function keysDetector(e) {
  if (e.key!="Shift"){
	console.log(e.key)
  	keys.push(e.key)
  }
  if (keys.length > secretCode.length) {
    keys.shift()
  }
  if (JSON.stringify(keys)=== JSON.stringify(secretCode)){
    secretDiv.style.display= "block"
  }
}
window.addEventListener('keyup', keysDetector);

const confettiSettings = { target: 'whee', size: 1.4, max: 300 }
const confetti = new ConfettiGenerator(confettiSettings)
console.log(document.getElementById("yesbutton"))
console.log("hi")
document.getElementById("yesbutton").onclick = function () {
	console.log("hi")
	confetti.render()
    anime({
      targets:'body',
      duration: 2000,
    })

};

