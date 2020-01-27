import Human from './Human.js'

export default class Teacher extends Human{
    constructor(sex, height, mass, age, name, subject){
        super(sex, height, mass, age, name);
        this.subject = subject;
    }
    quizStudent(student, grade){ //takes in student and grade. Finds the subject by name from the list of subjects on student and sets the grade
        student.schoolSubjects.forEach(subject => {
            subject.name.toUpperCase().localeCompare(this.subject.toUpperCase()) === 0 ? subject.grade = grade : {};
        });
    }
}