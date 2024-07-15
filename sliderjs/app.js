const data = [
  { title: '', src: 'images/1.jpg' },
  { title: '', src: 'images/2.jpg' },
  { title: '', src: 'images/3.jpg' },
  { title: '', src: 'images/4.jpg' },
  { title: '', src: 'images/5.jpg' },
  { title: '', src: 'images/6.jpg' },
  { title: '', src: 'images/7.jpg' },
  { title: '', src: 'images/8.jpg' },
  { title: '', src: 'images/9.jpg' },
  { title: '', src: 'images/10.jpg' },
  { title: '', src: 'images/11.jpg' },
  { title: '', src: 'images/12.jpg' },
  { title: '', src: 'images/13.jpg' },
  { title: '', src: 'images/14.jpg' },
  { title: '', src: 'images/15.jpg' },
  { title: '', src: 'images/16.jpg' },
  { title: '', src: 'images/17.jpg' },
  { title: '', src: 'images/18.jpg' },
]

const carouselInner = document.querySelector('.carousel-inner')
function renderSlider() {
  carouselInner.innerHTML = ''
  let width = document.body.offsetWidth
  let blockCount = 3
  let imageCount = 6

  if (width >= 1200) {
    let blockCount = 3
    let imageCount = 6
  }
  if (width >= 600 && width < 1200) {
    let blockCount = 4
    let imageCount = 4
  } else {
    let blockCount = 9
    let imageCount = 2
  }
  for (let i = 0; i < blockCount; i++) {
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    if (i === 0) carouselItem.classList.add('active')

    const carouselItemBlock = document.createElement('div')
    carouselItemBlock.classList.add('carousel-item-block')

    for (let k = 0; k < imageCount; k++) {
      const div = document.createElement('div')
      const img = document.createElement('img')
      img.src = data[i * imageCount + k].src
      div.append(img)
      carouselItemBlock.append(div)
    }

    carouselItem.append(carouselItemBlock)
    carouselInner.append(carouselItem)
  }
}
renderSlider()
window.addEventListener('resize'.renderSlider)
