function calculateQuizGrade(correctAnswers) {
    // Input validation
    if (correctAnswers < 0 || correctAnswers > 10 || isNaN(correctAnswers)) {
      return "Invalid number of correct answers. Please enter a number between 0 and 10.";
    }
  
    // Calculate score
    const score = correctAnswers * 10;
    let grade = "";
  
    // Assign grade based on score
    if (score >= 90) {
      grade = "A";
    } else if (score >= 70) {
      grade = "B";
    } else if (score >= 50) {
      grade = "C";
    } else {
      grade = "Fail";
    }
  
    return `Score: ${score}/100, Grade: ${grade}`;
  }
  
  // Test cases
  console.log(calculateQuizGrade(9)); // Score: 90/100, Grade: A
  console.log(calculateQuizGrade(8)); // Score: 80/100, Grade: B
  console.log(calculateQuizGrade(6)); // Score: 60/100, Grade: C
  console.log(calculateQuizGrade(4)); // Score: 40/100, Grade: Fail
  console.log(calculateQuizGrade(11)); // Invalid number of correct answers...