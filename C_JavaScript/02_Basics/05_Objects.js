const course = {
    courseName : "React",
    courseDuration : 3,
    courseFees : 50000,
    courseInstructor : "Vaibhav"
}

// course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor)

