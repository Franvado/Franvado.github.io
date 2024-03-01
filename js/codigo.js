let preguntas = [
    {
        pregunta:"How is the letter 'a' pronounced in the word 'cat'?",
        respuesta:"/æ/",
        incorrectas:["/ɪ/", "/eɪ/", "/ɑː/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'fast'?",
        respuesta:"/æ/",
        incorrectas:["/ɪ/", "/eɪ/", "/ɑː/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'made'?",
        respuesta:"/eɪ/",
        incorrectas:["/ɪ/", "/æ/", "/ɑː/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'dance'?",
        respuesta: "/ɑː/",
        incorrectas:["/ɪ/", "/æ/", "/eɪ/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'grass'?",
        respuesta: "/æ/",
        incorrectas:["/ɪ/", "/ɑː/", "/eɪ/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'grape'?",
        respuesta: "/eɪ/",
        incorrectas:["/ɪ/", "/ɑː/", "/æ/"]
    },
    {
        pregunta:"How is the letter 'a' pronounced in the word 'ball'?",
        respuesta: "/æ/",
        incorrectas:["/ɪ/", "/ɑː/", "/eɪ/"]
    },
    
]
let preguntaPantalla = document.querySelector("#pregunta")
let op1 = document.querySelector("#op1")
let op2 = document.querySelector("#op2")
let op3 = document.querySelector("#op3")
let op4 = document.querySelector("#op4")
let cont = 0
let contPreguntas = 0

function mostrarPregunta(i) {
    question = preguntas[i]
    options = [...question.incorrectas]
    options.push(question.respuesta)
    for (let j = 0; j < 4; j++) {
        options.sort(()=>  Math.random() - 0.5)
        
    }
    preguntaPantalla.textContent = question.pregunta
    op1.textContent = options[0]
    op2.textContent = options[1]
    op3.textContent = options[2]
    op4.textContent = options[3]

}

async function verificar(answers) {
    if( options[answers] === question.respuesta){
        await Swal.fire({
            title: "Correct Answer!",
            icon: "success"
          });
        cont++
    }else{
        await Swal.fire({
            title: "Inorrect Answer!",
            text: "The correct asnwer is " + question.respuesta,
            icon: "error"
          });
    }
    contPreguntas++
    if (contPreguntas >= preguntas.length) {
        await Swal.fire({
            title: "Game over!",
            text: "You got " + cont +"/"+ preguntas.length + " correct questions",
          });
        window.location = "index.html";
    }
    mostrarPregunta(contPreguntas)  
}
mostrarPregunta(contPreguntas)