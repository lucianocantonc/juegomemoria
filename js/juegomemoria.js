const beginbtn = document.getElementById('beginbutton')
const red = document.getElementById('redbutton')
const blue = document.getElementById('bluebutton')
const yellow = document.getElementById('yellowbutton')
const green = document.getElementById('greenbutton')

class Game{
  constructor(){
    this.begin()
  }
  begin(){
    alert('GOOOOO')
  }
}

function beginGame(){
  var game = new Game()
}