const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
//let scoretag = document.querySelector('.text-primary.display-4');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            score += 100 / correctAnswers.length;
        }
    });

    scrollTo(0,0);
    //result.querySelector('span').textContent = `${score} %`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output} %`;
        if (output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

//console.log(result.querySelector('span'));



