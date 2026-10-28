// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 정수혁(2651064)
const titles = ["이터널 선샤인 (Eternal Sunshine of the Spotless Mind)", "어바웃 타임 (About Time)", "트루먼 쇼 (The Truman Show)", "캐치 미 이프 유 캔 (Catch Me If You Can)", "쇼생크 탈출 (The Shawshank Redemption)"];
const ratings = [8.1, 7.9, 8.2, 8.0, 8.7];
const years = [2004, 2013, 1998, 2002, 1994];

let sum = 0;
for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}
console.log("합계:", sum);
const average = sum / ratings.length;
console.log("평균:", average);
let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > max) {
    max = ratings[i];
    maxIndex = i;
  }
  if (ratings[i] >= 8) count++;
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");
for (let i = 0; i < ratings.length; i++) {
  let label;
  if (ratings[i] >= 8.5) {
    label = "명작";
  } else if (ratings[i] >= 7) {
    label = "추천";
  } else {
    label = "보통";
  }
  console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);