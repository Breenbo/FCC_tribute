// set vertical cards movment on hover
var cards = document.getElementsByClassName('card')

for (const card of cards) {
  let cardName = card.id
  let screenName = cardName + '_screen'
  card.addEventListener('mouseenter', function () {
    document.getElementById(screenName).classList.remove('up')
    document.getElementById(screenName).classList.add('down')
  })
  card.addEventListener('mouseleave', function () {
    document.getElementById(screenName).classList.add('up')
    document.getElementById(screenName).classList.remove('down')
  })
}

// set change colors of logos on hover
var logos = document.getElementsByTagName('svg')
for (const logo of logos) {
  let logoName = logo.id
  let backName = logoName + '_back'
  let drawName = logoName + '_draw'
  logo.addEventListener('mouseenter', function () {
    logo.children[backName].setAttribute('fill','hsl(260,100%,60%)')
    logo.children[drawName].setAttribute('fill', 'hsl(260,50%,90%)')
  })
  logo.addEventListener('mouseleave', function () {
    logo.children[backName].setAttribute('fill','hsl(260,50%,90%)')
    logo.children[drawName].setAttribute('fill', 'hsl(260,100%,60%)')
  })
}
