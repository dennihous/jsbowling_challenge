class CalculateScore{
  constructor(){
    this.score = [8,2,3,5,10,5,3,3,7,0,10,10,7,2,9,0,6,3]
    this.totalScore = 0
    this.frame = 0
  }
  getScore(){
    this.totalScore = 0
    for (let i = 0; i < this.score.length; i += 1){
      if (this.score[i] === 10){
        this.totalScore += 10 + this.score[i+1] + this.score[i+2]
        this.frame++
      } else if (this.score[i] + this.score[i+1] === 10){
        this.totalScore += 10 + this.score[i+2]
        i++
        this.frame++
      } else {
        this.totalScore += this.score[i] + this.score[i+1]
        i++
        this.frame++
      }
    } 
    return this.totalScore
  }
  lastFrame(){
    if(this.frame === 9){
      if(this.score[-3] != 10 || this.score[-3] + this.score[-2] === 10)
    }
  }
  getFrame(){
    return this.frame
  }
}

const game = new CalculateScore
console.log(game.getScore())
console.log(game.getFrame())
