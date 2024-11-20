{
    //https://github.com/Apollo-Level2-Web-Dev/batch3-assignment-1
    /*
    You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

    Hints: Use a reduce() method to sum the grades. average = total grades/ total length

    // Sample Input:
    const student1: Student = {     
			        name: "Bob",     
			        age: 17,     
			        grades: [75, 80, 82, 88, 90]
                    };


        const averageGradeForBob = calculateAverageGrade(student1);

        // Sample Output:
            83
    */

            interface Student{
                name:string;
                age:number;
                grades:number[]
            }
            const student1: Student = {     
            // const student1 implements Student = {     
                name: "Bob",     
                age: 17,     
                grades: [75, 80, 82, 88, 90]
                };

    //   function  calculateAverageGrade(student1:object){
      function  calculateAverageGrade(std:Student):number{
        // console.log(std.grades)
        //acc for accumulator=0+grd[0]+grd[1]+...grd[n-1];
        //0 is initial value
        const totalGrades = std.grades.reduce((acc,grd)=>acc+grd,0)
        return totalGrades/std.grades.length;
      }
      calculateAverageGrade(student1)
      console.log(calculateAverageGrade(student1))

      //15 min done







}