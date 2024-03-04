var openWeatherAPI =
   'https://api.openweathermap.org/data/2.5/weather?&appid=f87bea6a885ac83727abfff35aa45c52&q=seoul&units=metric&lang=kr'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      const main = data.main
      const wind = data.wind
      const weather = data.weather

      //코드를 작성하세요
      document.write(`풍속: ${wind.speed}<br>`)
      document.write(`온도: ${main.temp}<br>`)
      document.write(`상태: ${weather[0].description}`)
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
