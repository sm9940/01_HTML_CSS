;(function () {
   //충돌이 발생하지 않도록 즉시
   //이안에서 자바스크립트 코드작성

   //1. 전체 URL을 가져오기
   const currentURL = location.href
   console.log(currentURL)

   //2. 쿼리스트링 파라메터 가져오기
   const urlObj = new URL(currentURL) //쿼리 스트링에서 값을 가져오기 위한 객체 선언
   const params = urlObj.searchParams // 주소에서 쿼리스트링만 뽑아온다.
   const q = params.get('q') // q 쿼리 파라메터가 가진 값을 얻어온다.
   const krcity = params.get('krcity') // krcity 쿼리 파라메터가 가진 값을 얻어온다.

   console.log(q, krcity)
   getWeatherWithCity(q)
   console.log(getWeatherWithCity(q))
   $('region-title').text(`${krcity} 상세날씨`)
   //3. AJAX 이용해 전체 날씨 정보 얻어오기

   function getWeatherWithCity(city) {
      // var temp = {}
      var openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?appid=6548db921bcdeb8671733b22484af187&units=metric&lang=kr&q=${city}`

      $.ajax({
         type: 'GET',
         url: openWeatherAPI,
         dataType: 'json',
         async: false, // 동기적으로 만들기 위해서 -> return값을 받기위해서
         success: function (data) {
            //정상 응답시 처리 작업

            $('.region-title').text(`${krcity} 상세날씨`)
            $('.card-header').text(krcity)
            $('.card-body > .icon > img').attr(
               'src',
               `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            )
            $('.list-group li:nth-child(1)').text(data.weather[0].description)
            $('.celsius').text(`${data.main.temp.toFixed(1)} ℃`)
            $('.list-group li:nth-child(2)').text(
               `최저온도: ` + `${data.main.temp_min.toFixed(1)}℃`
            )
            $('.list-group li:nth-child(3)').text(
               `최고온도: ` + `${data.main.temp_max.toFixed(1)}℃`
            )
            $('.list-group li:nth-child(4)').text(
               `체감온도: ` + `${data.main.feels_like.toFixed(1)}℃`
            )
            $('.list-group li:nth-child(5)').text(
               `풍속: ` + `${data.wind.speed}m/s`
            )
            $('.list-group li:nth-child(6)').text(
               `습도: ` + `${data.main.humidity}%`
            )
         },
         error: function (request, status, error) {
            //응답 에러시 처리 작업
            console.log('code:' + request.status)
            console.log('message:' + request.responseText)
            console.log('error:' + error)
         },
      })
      return temp
   }
   //4. 데이터 바인딩(상세 날씨 출력)
})()
