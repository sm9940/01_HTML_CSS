var openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q=seoul'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      console.log(data)
      document.write(`온도: ${data.main.temp} <br>`)
      document.write(`풍속: ${data.wind.speed} <br>`)
      document.write(`상태: ${data.weather[0].description} <br>`)
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
