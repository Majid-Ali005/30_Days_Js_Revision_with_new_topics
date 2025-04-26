class Student {
    constructor(name, rollNo) {
      this.name = name;
      this.rollNo = rollNo;
      this.grades = []; // Default property
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverageGrade() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  }
  
  const student = new Student("Priya", 101);
  student.addGrade(85);
  student.addGrade(90);
  console.log(student.getAverageGrade()); // Output: 87.5