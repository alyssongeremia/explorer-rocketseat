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

let patientsName = []
let patientsAge = []
let patientsWeight = []
let patientsHeigh = []

for(let patient of patients) {
    patientsName.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeigh.push(patient.height)
}

for(let index = 0; index < patientsName.length; index++) {
    alert(`${patientsName[index]} tem ${patientsAge[index]} anos de idade, pesa ${patientsWeight[index]} kilos, com uma altura de ${patientsHeigh[index]} cm`)
}
