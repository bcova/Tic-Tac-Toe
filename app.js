const board = document.getElementById("game")

const input1 = document.getElementById("player1")
const input2 = document.getElementById("player2")
const players = document.getElementById("players")
const name1 = document.getElementById("p1")
const name2= document.getElementById("p2")
let place = document.getElementsByName("p")

const gameState = {
   players: ['x', 'o'],
   board: [
     [null, null, null],
     [null, null, null],
     [null, null, null]
   ],
   current_player: 'x'
 }

input1.addEventListener('keypress',(Event) => {
//   console.log(Event)
 if (Event.key === 'Enter' && input1.value.length > 0 ) {
    input1.style.display = 'none' 
    players.style.display = 'flex' 
    name1.innerHTML = 'P1: '+ input1.value
 }

})

input2.addEventListener('keypress',(Event) => {
    // console.log(Event)
   if (Event.key === 'Enter'&& input2.value.length > 0 ) {
      input2.style.display = 'none'
      players.style.display = 'flex'
      name2.innerHTML = 'P2: '+  input2.value
   }
 
  })

board.addEventListener('click',spot)
  
function spot (event) {
    let test = event.target.id
console.log(test)

    return test
}



