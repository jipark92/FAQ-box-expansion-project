const answerOneBtn = document.querySelector('.answer-1-btn');
const answerTwoBtn = document.querySelector('.answer-2-btn');
const answerThreeBtn = document.querySelector('.answer-3-btn');

const showAnswerOne = document.querySelector('.answer-1');
const showAnswerTwo = document.querySelector('.answer-2');
const showAnswerThree = document.querySelector('.answer-3');


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
