// ;(function () {
const pwd1 = document.querySelector('.inputPassword')
// const pwd1 = document.querySelector('#inputPassword3')
const email = document.querySelector('.inputEmail3')
const select = document.querySelector('#select')
const submitButton = document.querySelector('#submit_button')
// console.log('HERE')
// console.log(pwd1.value)
console.log($('.inputPassword').value)
console.log(select.value)
console.log(email.value)

submitButton.addEventListener('click', () => {
   if (emailConfirm(email) && pwd1Confirm(pwd1) && selectConfirm(select)) {
      document.signup.submit()
   }
})

function pwd1Confirm() {
   console.log(pwd1.value)
   if (!pwd1.value) {
      alert('비밀번호를 입력하세요')
      //   return false
   } else {
      //공백이 아닐때
      if (!pwdCheck(pwd1.value)) {
         //유효성 검사를 통과하지 못했을때 실행
         alert('비밀번호가 틀렸습니다')
         //  return false
      }
      //유효성 검사 (특수문자, 문자, 숫자 포함 형태의 8~15 자리의 문구인지)
   }

   return true
}
function emailConfirm() {
   if (!email.value) {
      alert('이메일을 입력하세요')
      return false
   } else {
      if (!emailCheck(email.value)) {
         alert('이메일 형식에 맞지않습니다')
         return false
      }
   }
   return true
}

function selectConfirm() {
   if (select.value === 'none') {
      alert(`성별을 선택해주세요`)
      return false
   }
   return true
}
function pwdCheck(pwd) {
   //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
   const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
   return reg.test(pwd) //맞으면 true, 틀리면 false를 리턴
}
function emailCheck(email) {
   const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
   return reg.test(email)
}
// })
