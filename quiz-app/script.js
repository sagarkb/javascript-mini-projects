const quizData = [
  {
    question: 'What do you think of when I say soup?',
    a: 'Hamsters!',
    b: 'Chicken!',
    c: 'Mushrooms!',
    d: 'Lemons!',
    correct: 'c',
  },
  {
    question: 'What do you think of when I say paper?',
    a: 'Pen!',
    b: 'Squid!',
    c: 'Soup!',
    d: 'Capricorn!',
    correct: 'a',
  },
  {
    question: 'What do you think of when I say ducky?',
    a: 'Squash!',
    b: 'Rubber!',
    c: 'Paper!',
    d: 'Log!',
    correct: 'a',
  },
  {
    question: 'What do you think of when I say card?',
    a: 'Credit!',
    b: 'Hornet!',
    c: 'Lights!',
    d: 'Ducky!',
    correct: 'a',
  },
  {
    question:
      'The first inkblot is: )!( --- When you look at the inkblot above, which of these do you see?',
    a: 'Parenthesis, exclamation point, parenthesis!',
    b: 'Butterfly!',
    c: 'Llama!',
    d: 'Thats not an inkblot!',
    correct: 'b',
  },
  {
    question:
      'The second inkblot is: =) --- When you look at the inkblot above, which of these do you see?',
    a: 'Chalkboard!',
    b: 'What are we doing, again?',
    c: 'Happy face!',
    d: 'Bunny!',
    correct: 'c',
  },
  {
    question: 'The third and final inkblot is:',
    a: 'Speaker phone!',
    b: 'Pixie Styx!',
    c: 'It looks like a bunch of computer buttons pushed randomly.',
    d: 'Thats still not an inkblot!',
    correct: 'c',
  },
  {
    question: 'How do you FEEL about that?',
    a:
      'Ok so, I just had the worst day of my life. Freddy spilled milk all over me in the cafe, I flunked my math test, my boy/girlfriend broke up with me, and my mom made me come do this stupid quiz, blah, blah, blah...',
    b: 'How do I feel about what?',
    c: 'Pretty good, if I do say so myself',
    d: 'How do YOU feel about that?',
    correct: 'a',
  },
  {
    question: 'Can you spell MISSISSIPPI forward and backward?',
    a: 'M-I-S-S-I-S-S-I-P-P-I, I-P-P-I-S-S-I-S-S-I-M',
    b: 'You said I pee pee',
    c: 'M-I-S-S-I-S-S-I-P-P-I, and um, lets see, um, I- S - I...',
    d: 'Yup. B-O-B, B-O-B! There you go!',
    correct: 'c',
  },
  {
    question: 'The test is over. Will you miss me?',
    a: 'Bye- bye',
    b: 'Um, yes, but, who are you?',
    c: 'Hehehehehehehehehehehehehehehe.....',
    d: 'Is it over? THANK GOD!',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerElement = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submitButton');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  deselectAnswer();
  const currentQuestionData = quizData[currentQuestion];
  questionElement.innerText = currentQuestionData.question;
  a_text.innerText = currentQuestionData.a;
  b_text.innerText = currentQuestionData.b;
  c_text.innerText = currentQuestionData.c;
  d_text.innerText = currentQuestionData.d;
}

loadQuiz();

function getSelectedAnswer() {
  let answer = undefined;
  answerElement.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerElement.forEach((ansEl) => {
    ansEl.checked = false;
  });
}

submitButton.addEventListener('click', () => {
  const answer = getSelectedAnswer();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
