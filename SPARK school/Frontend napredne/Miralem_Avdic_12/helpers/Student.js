import Human from './Human.js'

export default class Student extends Human{
    constructor(sex, height, mass, age, name){
        super(sex, height, mass, age, name);
        this.schoolSubjects = [];
    }
    addSubject(subject){ //adds subject object to schoolSubjects array
        this.schoolSubjects.push({name: subject, grade: null});
    }
    isFailing(){ //check if any grade is below 2
        return (this.schoolSubjects.reduce((acc, cur) => (new Number(cur.grade < 2)) + acc ,0)) !== 0;
    }
    passingGrade(){ //rounds average value of all grades
        return Math.round(this.schoolSubjects.reduce((acc,cur) => acc + cur.grade, 0) / this.schoolSubjects.length);
    }
}