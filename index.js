var cards = document.getElementsByClassName('card')

// create function to move screen on card hover.
function rideau (name, sens = 'down') {
  var screenName = name + '_screen'
  var element = document.getElementById(screenName)
  var rideauHeight, opacity
  sens === 'down' ? rideauHeight = '80%' : rideauHeight = '-5%'
  sens === 'down' ? opacity = 0 : opacity = 1
  element.style.transitionDuration = '1.5s'
  element.style.top = rideauHeight
  element.style.opacity = opacity
};

// apply rideau to all cards
// for (const card of cards) {
//   let cardName = card.id
//   card.addEventListener('mouseover', function () { rideau(cardName) })
//   card.addEventListener('mouseout', function () { rideau(cardName, sens = 'up') })
// }

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
