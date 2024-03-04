;(function () {
   //충돌이 발생하지 않도록 즉시 실행함수 넣음
   //여기서 자바스크립트 코드 작성
   // 1. 접속자 위치정보 가져오기

   //현재 접속자의 위치 가져오기
   navigator.geolocation.getCurrentPosition(getSuccess, getError)

   //위치정보 가져오기 성공했을때
   function getSuccess(position) {
      //position 매개변수: 사용자의 접속정보가 들어있다

      const lat = position.coords.latitude
      const lon = position.coords.longitude

      loadMap(lat, lon) //지도 띄우기, 접속한 지역의 행정정보 출력
      getWeather(lat, lon) //현재 접속한 지역의 날씨 정보 출력
   }

   //위치정보 가져오기 실패했을때(거부)
   function getError() {
      console.error('Geolocation Error')
   }

   // 2. 가져온 위치정보에서 위도(lat), 경도(lon)를 받아서 카카오맵에 표시
   function loadMap(lat, lon) {
      var container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
      var options = {
         //지도를 생성할 때 필요한 기본 옵션
         center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
         level: 3, //지도의 레벨(확대, 축소 정도)
      }

      var map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴

      //마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(lat, lon)

      // 마커를 생성합니다(위치정보를 가지고 생성을 한다)
      var marker = new kakao.maps.Marker({
         position: markerPosition,
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)
      // 3. 카카오맵에서 위도, 경도를 이용해서 행정구역 정보를 가지고 온다.

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder()
      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
      searchAddrFromCoords(map.getCenter(), displayCenterInfo)

      function searchAddrFromCoords(coords, callback) {
         //coords: 좌표, callback: displayCenterInfo()
         // 좌표로 행정동 주소 정보를 요청합니다
         geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
      }
      // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
      function displayCenterInfo(result, status) {
         if (status === kakao.maps.services.Status.OK) {
            for (var i = 0; i < result.length; i++) {
               // 행정동의 region_type 값은 'H' 이므로
               if (result[i].region_type === 'H') {
                  let juso = result[i]
                  $('.region1-depth').text(juso.region_1depth_name) //지역명
                  $('.region3-depth').text(juso.region_3depth_name) //동
                  break
               }
            }
         }
      }
   }
   function getWeather(lat, lon) {
      var openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?&appid=f87bea6a885ac83727abfff35aa45c52&lat=${lat}&lon=${lon}&units=metric&lang=kr`

      $.ajax({
         type: 'GET',
         url: openWeatherAPI,
         dataType: 'json',
         // async: false, //동기적으로(순서대로) 만들기 위해서
         success: function (data) {
            //정상 응답시 처리 작업
            $('.region-weather').text(`${data.main.temp.toFixed(0)}℃`)
            $('.region-icon').attr(
               'src',
               `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            )
            return
         },
         error: function (request, status, error) {
            //응답 에러시 처리 작업
            console.log('code:' + request.status)
            console.log('message:' + request.responseText)
            console.log('error:' + error)
         },
      })
   }

   //지역으로 해당 날씨를 불러온다.

   function getWeatherWithCity(city) {
      var temp = {}
      var openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?&appid=f87bea6a885ac83727abfff35aa45c52&q=${city}&units=metric&lang=kr`

      $.ajax({
         type: 'GET',
         url: openWeatherAPI,
         dataType: 'json',
         async: false, //동기적으로(순서대로) 만들기 위해서
         success: function (data) {
            //정상 응답시 처리 작업
            temp.celsius = data.main.temp.toFixed(0) //기온
            temp.icon = data.weather[0].icon //아이콘
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

   var cityList = [
      'seoul',
      'incheon',
      'busan',
      'daegu',
      'daejeon',
      'jeju',
      'gangneung',
      'bucheon',
      'gimhae',
      'gyeongju',
      'iksan',
      'yeosu',
   ]

   for (const city of cityList) {
      let temp = getWeatherWithCity(city)

      console.log('temp:', temp)

      $(`.${city} > .celsius `).text(`${temp.celsius}℃`)
      $(`.${city} > .icon > img`).attr(
         'src',
         `https://openweathermap.org/img/wn/${temp.icon}.png`
      )
   }
})()
