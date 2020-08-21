

const beginbtn = document.getElementById("beginbutton")
const red = document.getElementById("redbutton")
const blue = document.getElementById("bluebutton")
const yellow = document.getElementById("yellowbutton")
const green = document.getElementById("greenbutton")


class Game{
  constructor(){
    this.begin()
    this.randomNumber()
    this.nextLevel()
  }
  begin(){
    alert('GOOOOO')
    this.level = 7
    this.colors = {
      red,
      blue,
      yellow,
      green
    }
  }
  numberToColor(number){
    switch (number){
      case 0:
        return 'red'
      case 1:
        return 'blue'
      case 2:
        return 'yellow' 
      case 3:
        return 'green'
    }
  }
  randomNumber(){
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
  nextLevel(){
    this.lightUpSequence()
  }
  lightUpSequence(){
    for (let i = 0; i < this.level; i++){
      const color = this.numberToColor(this.sequence[i])
      setTimeout(() => this.lightUpColor(color), 1000 * i)
    }
  }
  lightUpColor(color){
    this.colors[color].classList.add('light')
    setTimeout(() => this.shutDownColor(color), 400) 
  }
  shutDownColor(color){
    this.colors[color].classList.remove('light')
  }
}

function beginGame(){
  window.game = new Game()
}
