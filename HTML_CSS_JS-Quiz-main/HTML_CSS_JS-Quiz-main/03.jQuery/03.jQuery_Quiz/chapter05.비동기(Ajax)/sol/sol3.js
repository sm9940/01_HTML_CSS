//1. 서울 날씨 작성
var openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q=seoul'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      console.log(data)
      const mainResult = data.main
      const weather = data.weather[0]

      //https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
      $('.seoul .card-img-top').attr('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`)

      $('.seoul .card-text').text(`${mainResult.temp.toFixed(1)}℃ ${weather.description}`)
      $('.seoul .list-group li:nth-child(1)').text(`체감온도 ${mainResult.feels_like.toFixed(1)}℃`)
      $('.seoul .list-group li:nth-child(2)').text(`최고온도 ${mainResult.temp_min.toFixed(1)}℃`)
      $('.seoul .list-group li:nth-child(3)').text(`최저온도 ${mainResult.temp_max.toFixed(1)}℃`)
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})

//2. 인천 날씨 작성

var openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q=incheon'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      console.log(data)
      const mainResult = data.main
      const weather = data.weather[0]

      //https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
      $('.incheon .card-img-top').attr('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`)

      $('.incheon .card-text').text(`${mainResult.temp.toFixed(1)}℃ ${weather.description}`)
      $('.incheon .list-group li:nth-child(1)').text(`체감온도 ${mainResult.feels_like.toFixed(1)}℃`)
      $('.incheon .list-group li:nth-child(2)').text(`최고온도 ${mainResult.temp_min.toFixed(1)}℃`)
      $('.incheon .list-group li:nth-child(3)').text(`최저온도 ${mainResult.temp_max.toFixed(1)}℃`)
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})

//3. 부산 날씨 작성

var openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q=busan'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      console.log(data)
      const mainResult = data.main
      const weather = data.weather[0]

      //https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
      $('.busan .card-img-top').attr('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`)

      $('.busan .card-text').text(`${mainResult.temp.toFixed(1)}℃ ${weather.description}`)
      $('.busan .list-group li:nth-child(1)').text(`체감온도 ${mainResult.feels_like.toFixed(1)}℃`)
      $('.busan .list-group li:nth-child(2)').text(`최고온도 ${mainResult.temp_min.toFixed(1)}℃`)
      $('.busan .list-group li:nth-child(3)').text(`최저온도 ${mainResult.temp_max.toFixed(1)}℃`)
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
