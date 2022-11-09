const students = [
    {
        name: "João",
        nota1: 7,
        nota2: 8,
    },

    {
        name: "Letícia",
        nota1: 9,
        nota2: 8,
    },

    {
        name: "Elon Musk",
        nota1: 9,
        nota2: 10,
    }
    
]

let studentsName = []
let studentsN1 = []
let studentsN2 = []

for(let student of students) {
    studentsName.push(student.name)
    studentsN1.push(student.nota1)
    studentsN2.push(student.nota2)
}

let media;

function calculaMedia(nota1,nota2) {
    media = (nota1 + nota2) / 2
    return media
}

function verificaMedia(media) {
    if(media >= 7) {
        return('\n Parabéns ' + studentsName[index] + '! Você foi aprovado(a) no concurso!')
    } else {
        return('\n Não foi dessa vez ' + studentsName[index] + '. Tente novamente!')
    }
}

for(index = 0; index < studentsName.length; index++) {
    alert(` A média do(a) aluno(a) ${studentsName[index]} é: ${calculaMedia(studentsN1[index], studentsN2[index])}
    ${verificaMedia(media)}`) 
}





