$.ajax({
   type: 'GET', //요청방식 : get방식으로 서버에 데이터 요청
   url: 'https://api.openweathermap.org/data/2.5/weather?&appid=f87bea6a885ac83727abfff35aa45c52&q=seoul&units=metric&lang=kr',
   dataType: 'json', //서버에게 json으로 주세요 라고 요청
   success: function (data) {
      //서버에서 응답 성공시 데이터를 받는 곳
      console.log(data)
   },
   error: function (req, status, error) {
      //실패의 원인과 응답코드를 준다
      console.log('code:' + req.status)
      console.log('message:' + req.responseText)
      console.log('error:' + error)
   },
})
