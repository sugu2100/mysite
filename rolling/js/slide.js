//롤링(rolling) 이미지 구현
var slides = document.querySelectorAll("#slides img");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var current = 0;  //배열의 현재 인덱스 번호

showSlides(current);      //showSlides() 호출
next.onclick = nextSlide;
prev.onclick = prevSlide;

function showSlides(n) { //현재 번호만 보이고 나머지는 숨기기
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function nextSlide() {
    if (current < slides.length - 1) //인덱스 번호가 2보다 작으면 
        current += 1;                //1증가
    else                             //2보다 크면
        current = 0;                 //0으로 설정
    showSlides(current);  
}

function prevSlide() { 
    if (current > 0)   //인덱스 번호가 0보다 크면 
        current -= 1;  //1 감소
    else               //인덱스가 0보다 작으면
        current = slides.length - 1;  //2로 설정
    showSlides(current);
}