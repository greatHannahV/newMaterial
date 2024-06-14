const typeText = () => {
  if (position === str.length) return
  const v = getRandomInt(1, 100)
  if (v > 90 && position !== 0) {
    out.textContent += 'r'
    setTimeout(removeLastChar, 1000)
  } else if (v > 80 && v < 90 && position !== 0) {
    out.textContent += 'q'
    setTimeout(removeLastChar, 1000)
  } else {
    out.textContent += str[position]
    position++
    setTimeout(typeText, getRandomInt())
  }
}
