
var questions = [
    {
        question: 'What is the baby of a moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 'larva'
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 'goat'
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 'calf'
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 'gator'
    },
    {
        question: 'What is a baby goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 'gosling'
    }
];
 
const h1 = document.querySelector(".h1");
const options = document.querySelector(".options");
const btn = document.querySelector(".btn");

let count = 0;
let score = 0;
const myFunc = () => {
  let slide = questions[count];
  h1.innerHTML = slide.question;
options.innerHTML = "";
  for (let i = 0; i < slide.choices.length; i++) {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = "baby";
    input.value = slide.choices[i];
    label.innerHTML = slide.choices[i];
    div.append(input, label);
    options.appendChild(div)
    div.setAttribute("class", "align");
    label.setAttribute("class", "label");
  }
}

btn.addEventListener("click", () => {
   const radios = document.getElementsByName("baby");
     let selectedValue;
   for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
          selectedValue = radios[i].value;
        }
   }
     if(!selectedValue) {
         const h3 = document.createElement("h3");
      h3.innerText = "Please select anyone of it.";
      document.querySelector(".message").appendChild(h3);
       setTimeout(() => { document.querySelector(".message").removeChild(h3)}, 400)
     return;
   }
   
   if(selectedValue === questions[count].correctAnswer) {
     score++;
   }
    count++;
   if(count === questions.length) {
     const p = document.createElement("p");
     p.innerHTML = `You scored ${score} out of ${questions.length}`;
     document.querySelector(".message").appendChild(p);
     btn.style.display = "none";
    document.querySelector(".btn1").style.display = "block";
   }
  myFunc();
})

document.querySelector(".btn1").addEventListener("click", () => {
 count = 0;
 btn.style.display = "block";
 document.querySelector(".btn1").style.display = "none";
 myFunc();
 document.querySelector(".message").innerHTML = "";
})

myFunc();
  
