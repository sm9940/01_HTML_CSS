const obj = [
   {
      0: '10',
      1: '20',
   },
]
obj.forEach((element) => {
   console.log(element)
})

//obj가 객체여서 에러가 발생하였다
//에러원인 => is not function, 객체에서는 foreach라는 함수를 제공하지 않는다. 즉, 특정 객체 존재하지 않는 함수를 사용할때 발생
