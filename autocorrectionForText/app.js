const str = 'Type your text, try yourself. Try harder'
const out = document.querySelector('.out')
let position = 0

const typeText = () => {
  // if (position === str.length) return
  if (position === str.length) {
    position = 0
    out.textContent = ''
  }
  const v = getRandomInt(1, 100)
  if (v > 90 && position !== 0) {
    out.textContent += str[getRandomInt(0, str.length - 2)]
    setTimeout(removeLastChar, 1000)
  } else {
    out.textContent += str[position]
    position++
    setTimeout(typeText, getRandomInt())
  }
}
const removeLastChar = () => {
  out.textContent = str.substring(0, position)
  setTimeout(typeText, getRandomInt())
}
function getRandomInt(max = 10, min = 350) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
typeText()
