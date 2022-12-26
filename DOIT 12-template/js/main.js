const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 아티클 요소가 회전할 각도 (지정)
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼는 거임
let i = 0;

/* 으아아 이미지 구현 안돼 뮤직플레이어제작하기 416페이지! */
for(let el of lists) {
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`;
  i++;
}