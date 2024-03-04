// 1. 전체 url 가져오기
const currentURL = location.href;
const urlObj = new URL(currentURL);

// 2. 쿼리스트링 파라메터 가져오기
const params = urlObj.searchParams;
const q = params.get("q");
const krcity = params.get("krcity");
console.log(q, krcity);

// 3. ajax 이용해 전체 날씨 정보 얻어오기

// 4. 데이터 바인딩
$(".region-title").text(`${krcity} 상세날씨`);
