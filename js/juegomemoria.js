const beginbtn = document.getElementById('beginbutton')
const red = document.getElementById('redbutton')
const blue = document.getElementById('bluebutton')
const yellow = document.getElementById('yellowbutton')
const green = document.getElementById('greenbutton')

class Game{
  constructor(){
    this.begin()
    this.randomNumber()
  }
  begin(){
    alert('GOOOOO')
    this.nivel = 1
    this.colors = {
      red,
      blue,
      yellow,
      green
    }
  }
  randomNumber(){
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
}

function beginGame(){
  window.game = new Game()
}
