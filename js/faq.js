// const questions = document.querySelectorAll('.item__header');

// questions.forEach(question => {
//     question.addEventListener('click', function () {
//         let openQuestion = document.querySelector('.item__header.active');
//         if (openQuestion && openQuestion !== this){
//             setAnswer(openQuestion);
//         }
//         setAnswer(question);
//     });
// });

// function setAnswer(question) { question.classList.toggle('active');

//     let answer = question.nextElementSibling;
//     if (answer.style.maxHeight)
//         answer.style.maxHeight = null;
//     else
//         answer.style.maxHeight = answer.scrollHeight + 'px';
// }

//2
// let question = document.querySelectorAll(".item__header");

// question.forEach(question => {
//   question.addEventListener("click", event => {
//     const active = document.querySelector(".active");
//     if(active && active !== question ) {
//       active.classList.toggle("active");
//       active.nextElementSibling.style.maxHeight = 0;
//     }
//     question.classList.toggle("active");
//     const answer = question.nextElementSibling;
//     if(question.classList.contains("active")){
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     } else {
//       answer.style.maxHeight = 0;
//     }
//   })
// })

//3
const accordionBtns = document.querySelectorAll(".item__header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});