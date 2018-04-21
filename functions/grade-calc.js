
// students score, total possible score
// 15/20 -> you got a C (75%)!
// A 90-100. B 80-89

const calcStudentGrade = function (score, totalPossibleScore)
{
    if (score === undefined || totalPossibleScore === undefined) {
        return `Error`
    }

    const percentageScore = (score / totalPossibleScore) * 100
    let grade = undefined

    if (percentageScore >= 90) { //A
        grade = 'A'
    } else if (percentageScore >= 80) { //B
        grade = 'B'
    } else if (percentageScore >= 70) { //C
        grade = 'C'
    } else if (percentageScore >= 60) { //D
        grade = 'D'
    } else { //F
        grade = 'F'
    }

    return `${score}/${totalPossibleScore} -> You got a ${grade} (${percentageScore}%)!`
}

console.log(calcStudentGrade(30,100))
console.log(calcStudentGrade(undefined,100))
console.log(calcStudentGrade())
console.log(calcStudentGrade(10))
console.log(calcStudentGrade(100,10))
console.log(calcStudentGrade(10,10))
console.log(calcStudentGrade(0.1,1))
console.log(calcStudentGrade(0.71, 1))