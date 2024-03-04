var ctx = document.getElementById('canvas').getContext('2d')
var width = 1280
var stepX = 10

var x = 1400
var y = 360
offsetY = 360
var colors = [
   '#16a085',
   '#1abc9c',
   '#2ecc71',
   '#27ae60',
   '#9b59b6',
   '#8e44ad',
   '#f1c40f',
   '#f39c12',
   '#1abc9c',
]
var cc = 0
var mc = colors.length
var color = colors[cc]

ctx.strokeStyle = color
var lineWidth = 1
ctx.lineWidth = lineWidth
var direction = 1

setInterval(function () {
   ctx.beginPath()

   x = x - stepX
   ctx.moveTo(x, y)

   if (x < 0) {
      x = 1400
      y = 360

      cc++
      if (cc >= mc) {
         cc = 0
      }
      color = colors[cc]
      ctx.strokeStyle = color
      return
   }
   y = Math.sin(x / 50) * 100 + offsetY

   ctx.lineTo(x, y)
   ctx.stroke()

   if (direction === 1) {
      lineWidth += 1
   } else {
      lineWidth -= 1
   }
   if (lineWidth > 80) {
      direction = 0
   } else if (lineWidth < 0) {
      direction = 1
   }

   ctx.lineWidth = lineWidth
}, 1000 / 60)

//에러원인 =>is not defined ,변수에 대한 정의가 안됐을때 x가 무엇인지 정의가 안내려져서 에러가 발생했다
//function is not fined, 함수에 대한 정의가 안됐을때
