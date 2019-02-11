let ship_x = 10
let ship_y = 450
let ship_size = 50

// utilize canvas
var canvas = document.getElementById('gamescreen')
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext('2d')

// design a basic movement scheme for the image to move side to side
function ship_movement() {
  ctx.clearRect(ship_x, ship_y, canvas.width, canvas.height)
  ship_image = new Image();
  ship_image.src = 'img/ship.png';
  ctx.drawImage(ship_image, ship_x, ship_y, ship_size, ship_size)
  requestAnimationFrame(ship_movement)
}

// initialize ship location
requestAnimationFrame(ship_movement)
ship_movement()

// move ship
function handleInput(event) {
  const key = event.key
  if (key === 'a') {
    if (ship_x > 14) {
      ship_x -= 5
    }
  } else if (key === 'd') {
    if (ship_x < 440) {
    ship_x += 5
    }
  }
}

document.addEventListener('keypress', handleInput)
