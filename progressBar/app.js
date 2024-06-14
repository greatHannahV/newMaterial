const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = JSON.parse(localStorage.getItem('currentActive')) || 1
update()
next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})
function update() {
  localStorage.setItem('currentActive', JSON.stringify(currentActive))

  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
