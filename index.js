// console.log(process.argv)

const cohort1 = process.argv[2]
const user = process.env.USER
const shell = process.env.SHELL

if(cohort1 === 'web-50'){
    console.log(`${cohort1} is the best forever`)
} else {
    console.log(`booo cohort ${cohort1}`)
}   

console.log(`the user is ${user}`)
console.log(`the shell is ${shell}`)