let thingsToDo = {
    morning : "Exercise",
    afternoon : "work",
    evening : 'code',
    nigth: ["SLeep", "Dream"]
}

//Object Destructing
let {morning, afternoon} = thingsToDo;
morning = "Run";
console.log(morning, ' - ', afternoon);
// console.log(`${morning} - ${afternoon}`);



let unistudent = student => {
    let {name, university} = student
    console.log(`${name} from ${university}`)
    
    // console.log(`${student.name} from ${student.university}`)
}

unistudent({
    name : 'Aditi',
    university : 'Geeta University'
})

