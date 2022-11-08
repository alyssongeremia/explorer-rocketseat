const patients = [
    {
        name:"João",
        age:24,
        weight:89,
        height:150,
    },

    {
        name:"Gabriela",
        age:26,
        weight:68,
        height:152,
    },

    {
        name:"Rodolfo",
        age:34,
        weight:79,
        height:172,
    }
]

function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}` 
}

for(let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}