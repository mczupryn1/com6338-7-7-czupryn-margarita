// Questions
var questionsArr = [
    {
        question: 'Comets in ancient Greece were called what?',
        answer: 'hairy stars',
        options: [
            'super stars',
            'lightning stars',
            'arrow stars',
            'hairy stars',
        ]
    },
    {
        question: 'What country has more cats per person than any other country in the world?',
        answer: 'New Zealand',
        options: [
            'New Zealand',
            'Greece',
            'Mexico',
            'Egypt',
        ]
    },
    {
        question: 'Amazon.com was originally called what?',
        answer: 'Cadabra Inc.',
        options: [
            'Abracadabra Inc.',
            'Cadabra Inc.',
            'Capybara Inc.',
            'Cadaver Inc.',
        ]
    },
    {
        question: 'Someone who suffers from "anatidaephobia" is afraid of what?',
        answer: 'Somewhere, somehow a duck or goose is constantly watching them.',
        options: [
            'That peanut butter will stick to the roof of their mouth.',
            'The color yellow.',
            'Somewhere, somehow a duck or goose is constantly watching them.',
            'Belly buttons.',
        ]
    },
    {
        question: 'A Chihuahua and a dachshund mix is called what?',
        answer: 'Chiweenie',
        options: [
            'Chi Poo',
            'King Chi',
            'Chatterdale',
            'Chiweenie',
        ]
    }
]
// Call variables
  var quiz = document.getElementById('quiz')
  var question = document. createElement('p')
  var currentQuestion 
  var numCorrect
  var previousScore
  var finalScoreEl = document.createElement('p')
  var answerBtn = document.createElement('button')
  var timer = document.createElement('p')
  var seconds
  var timerEl
   
// Show previous scores and new scores
  function setUp(){
    numCorrect = 0
    i = 0
    quiz.innerHTML = ''
    answerBtn.id = 'start-quiz'
    answerBtn.textContent = 'Start Quiz!'
    quiz.appendChild(answerBtn)
    previousScore = localStorage.getItem('previous-score')
    if(previousScore){
      finalScoreEl.textContent = "Previous Score:" + previousScore + '%'
      quiz.appendChild(finalScoreEl)
    }
    }

// Timer for each question
    quiz.onclick = function(e){
        if(e.target.id === 'start-quiz'){
          runQuiz()
        }else if (e.target.parentElement.id === 'choices' && e.target.tagName === 'BUTTON'){
          if(e.target.textContent === questionsArr[i].answer){
            numCorrect++
          }
          clearInterval(timerEl)
          i++
          if(i < questionsArr.length){
            runQuiz()
          }else{
            endQuiz()
          }
        }
    }

// New Timer for each question
    function runQuiz(){
        seconds = 30
        quiz.innerHTML = ''
        timer.id = "timer"
        timer.textContent = seconds
        quiz.appendChild(timer)
        countdown()
         var questions = questionsArr[i]
         question.textContent = questions.question
         quiz.appendChild(question)
       
         var choices = document.createElement('div')
         choices.id = 'choices'
         quiz.appendChild(choices)
         questions.options.forEach(function(choice){
           var optionBtn = document.createElement('button')
           optionBtn.textContent = choice
           choices.appendChild(optionBtn)
         })
       }

// Countdown and determine if quiz should quit or not
      function countdown(){
      timerEl = setInterval(function(){
        seconds--
        if(seconds > 0){
            timer.textContent = seconds
        }else{
            clearInterval(timerEl)
            i++
            if(i< questionsArr.length){
              runQuiz()
            }else{
              endQuiz()
            }
        }
      }, 1000)
      }

// Show score when quiz is over
      function endQuiz(){
        quiz.innerHTML = ""
        var previousScore = Math.floor((numCorrect/questionsArr.length)*100)
        localStorage.setItem('previous-score', previousScore)
        setUp()
      }
      
      setUp()  