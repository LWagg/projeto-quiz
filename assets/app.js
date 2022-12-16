const form = document.querySelector('form')
const result = document.querySelector('.result')
const button = document.querySelector('button')
const reset = document.querySelector('#reset')

const correctAnswers = ['B', 'C', 'D', 'A', 'B']

let score = 0

const getUserAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })

    return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]

        if (isUserAnswerCorrect)
        score += 20
    })
}

const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    result.style.display = 'block'
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        result.querySelector('span').textContent = `${counter++}%`
    }, 10)
}

const resetUserScore = () => {
    score = 0
}

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const userAnswers = getUserAnswers()
     
    
    resetUserScore()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})



