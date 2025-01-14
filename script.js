const startNumber=9
const flipCard = document.querySelector(".flip-card")


flip(flipCard)

function flip(flipCard) {
  const topele = flipCard.querySelector(".top");
  const bottomele = flipCard.querySelector(".bottom");
  const topFlip = document.createElement('div')
  const botoomFlip = document.createElement('div')
  topFlip.classList.add('top-flip')
  botoomFlip.classList.add('bottom-flip')
  const startNumber = parseInt(topele.textContent)
  topFlip.textContent=startNumber
  botoomFlip.textContent=startNumber-1

  topele.textContent=startNumber
  bottomele.textContent=startNumber


  topFlip.addEventListener("animationstart" , e => {
    topele.textContent=startNumber-1
  })
  topFlip.addEventListener("animationend" , e => {
    topFlip.remove()
  })

  botoomFlip.addEventListener("animationend" , e => {
    bottomele.textContent=startNumber-1
    botoomFlip.remove()
    // flip(flipCard)
  })

  flipCard.append(topFlip,botoomFlip)
}
let previousTimeBetweenDates
const countToDate = new Date("2022-08-02")
setInterval(()=>{
  const currentDate = new Date()
  const timeBetweenDates= Math.ceil((countToDate -currentDate)/1000)
  if(previousTimeBetweenDates!== timeBetweenDates) {
    console.log('1 sec passed')
  }
  flipAllCards(timeBetweenDates)
  previousTimeBetweenDates=timeBetweenDates
},250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
