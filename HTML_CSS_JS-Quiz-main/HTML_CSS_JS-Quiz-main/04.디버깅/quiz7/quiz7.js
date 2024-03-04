const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')
const selectBox = document.querySelector('#oper')
const answer = document.querySelector('#answer')

selectBox.addEventListener('change', (e) => {
   let result = 0
   var value = selectBox.options[selectBox.selectedIndex].value

   switch (value) {
      case 'plus':
         result = Number(op1.value) + Number(op2.value)
         break
      case 'minus':
         result = Number(op1.value) - Number(op2.value)
         break
   }

   answer.textContent = result
})

//속성을 읽을수 없어서 에러가 발생하였다
//dom 값의 선택자를 올바르게 쓰지 못해서 null을 가져옴
//자바스크립트에 내장된 함수를 실행시에는 그 대상이 반드시 있는지 확인해야한다(null,undefined X)
