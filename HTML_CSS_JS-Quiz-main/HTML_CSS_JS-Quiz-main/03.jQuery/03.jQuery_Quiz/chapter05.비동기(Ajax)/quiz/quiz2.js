//1. 서울 날씨 작성
var openWeatherAPI =
   'https://api.openweathermap.org/data/2.5/weather?&appid=f87bea6a885ac83727abfff35aa45c52&q=seoul&units=metric&lang=kr'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      const mainResult = data.main
      const weather = data.weather[0]
      console.log(data)
      //코드를 작성하세요
      console.log(mainResult)
      console.log(weather)

      $('.seoul .card-img-top').attr(
         'src',
         `https://openweathermap.org/img/wn/${weather.icon}@2x.png`
      )

      $('.seoul .card-text').text(
         `${mainResult.temp.toFixed(1)}°C ${weather.description}`
      )
      $('.seoul .list-group li:nth-child(1)').text(
         `체감온도 ${mainResult.feels_like.toFixed(1)}°C`
      )
      $('.seoul .list-group li:nth-child(2)').text(
         `최고온도 ${mainResult.temp_max.toFixed(1)}°C`
      )
      $('.seoul .list-group li:nth-child(3)').text(
         `최저온도 ${mainResult.temp_min.toFixed(1)}°C`
      )
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
