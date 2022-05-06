const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

context.fillStyle = 'white'
context.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Pokemon Style Game Map.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position
    this.image = image
  }

  draw() {
    context.drawImage(this.image, -645, -410)
  }
}

const background = new Sprite({
  position: {
    x: -645,
    y: -410,
  },
  image: image,
})

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  context.drawImage(
    playerImage,
    //cropping
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    //actual coordinates
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  )
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      console.log('pressed w')
      break
    case 'a':
      console.log('pressed a')
      break
    case 's':
      console.log('pressed s')
      break
    case 'd':
      console.log('pressed d')
      break
  }
})
