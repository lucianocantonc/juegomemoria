
const beginbtn = document.getElementById("beginbutton")
const red = document.getElementById("redbutton")
const blue = document.getElementById("bluebutton")
const yellow = document.getElementById("yellowbutton")
const green = document.getElementById("greenbutton")
const LAST_LEVEL = 1

class Game{
  constructor(){
    this.begin()
    this.randomNumber()
    setTimeout(this.nextLevel, 500)
  }
  begin(){
    this.nextLevel = this.nextLevel.bind(this)
    this.colorChoice = this.colorChoice.bind(this)
    this.level = 1
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
  colorToNumber(color){
    switch (color){
      case 'red':
        return 0
      case 'blue':
        return 1
      case 'yellow':
        return 2
      case 'green':
        return 3
    }
  }
  randomNumber(){
    this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }
  nextLevel(){
    this.sublevel = 0
    this.lightUpSequence()
    this.userChoice()
  }
  lightUpSequence(){
    for (let i = 0; i < this.level; i++){
      const color = this.numberToColor(this.sequence[i])
      setTimeout(() => this.lightUpColor(color), 1000 * i)
    }
  }
  lightUpColor(color){
    this.colors[color].classList.add('light')
    setTimeout(() => this.shutDownColor(color), 350) 
  }
  shutDownColor(color){
    this.colors[color].classList.remove('light')
  }
  userChoice(){
    this.colors.red.addEventListener('click', this.colorChoice)
    this.colors.blue.addEventListener('click', this.colorChoice)
    this.colors.yellow.addEventListener('click', this.colorChoice)
    this.colors.green.addEventListener('click', this.colorChoice)
  }
  disableClick(){
    this.colors.red.removeEventListener('click', this.colorChoice)
    this.colors.blue.removeEventListener('click', this.colorChoice)
    this.colors.yellow.removeEventListener('click', this.colorChoice)
    this.colors.green.removeEventListener('click', this.colorChoice)
  }
  colorChoice(ev){
    const colorName = ev.target.dataset.color
    const colorNumber = this.colorToNumber(colorName)
    this.lightUpColor(colorName)
    if (colorNumber === this.sequence[this.sublevel]){
      this.sublevel ++
      if (this.sublevel === this.level){
        this.level ++
        this.disableClick()
      }
        if (this.level === (LAST_LEVEL + 1)){
          this.gameWinner()
        } else {
          setTimeout(this.nextLevel, 1500)
        }
    } else {
      this.gameLoser()
    }
  }
  gameWinner(){
    swal('Simon says', 'You WIN!!', 'success')
      .then(this.begin)
  }
  gameLoser(){
    swal('Simon says', 'Keep practicing', 'error')
      .then(() => {
        this.disableClick()
        this.begin()
      })
  }
}


function beginGame(){
  window.game = new Game()
}
