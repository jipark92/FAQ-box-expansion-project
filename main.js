const answerOneBtn = document.querySelector('.answer-1-btn');
const answerTwoBtn = document.querySelector('.answer-2-btn');
const answerThreeBtn = document.querySelector('.answer-3-btn');
const answerFourBtn = document.querySelector('.answer-4-btn');
const answerFiveBtn = document.querySelector('.answer-5-btn');


const showAnswerOne = document.querySelector('.answer-1');
const showAnswerTwo = document.querySelector('.answer-2');
const showAnswerThree = document.querySelector('.answer-3');
const showAnswerFour = document.querySelector('.answer-4');
const showAnswerFive = document.querySelector('.answer-5');


answerOneBtn.addEventListener('click',()=>{
    showAnswerOne.classList.toggle('answer-1');
    console.log(showAnswerOne);
})


answerTwoBtn.addEventListener('click',()=>{
    showAnswerTwo.classList.toggle('answer-2');
    console.log(showAnswerTwo);
})

answerThreeBtn.addEventListener('click',()=>{
    showAnswerThree.classList.toggle('answer-3');
    console.log(showAnswerThree);
})

answerFourBtn.addEventListener('click',()=>{
    showAnswerFour.classList.toggle('answer-4');
    console.log(showAnswerFour);
})

answerFiveBtn.addEventListener('click',()=>{
    showAnswerFive.classList.toggle('answer-5');
    console.log(showAnswerFive);
})
