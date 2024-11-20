"use strict";
{
    const student1 = {
        // const student1 implements Student = {     
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    //   function  calculateAverageGrade(student1:object){
    function calculateAverageGrade(std) {
        // console.log(std.grades)
        //acc for accumulator=0+grd[0]+grd[1]+...grd[n-1];
        //0 is initial value
        const totalGrades = std.grades.reduce((acc, grd) => acc + grd, 0);
        return totalGrades / std.grades.length;
    }
    calculateAverageGrade(student1);
    console.log(calculateAverageGrade(student1));
    //15 min done
}
