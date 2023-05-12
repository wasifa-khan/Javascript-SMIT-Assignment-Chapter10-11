function calculateGrade() {
    var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));
  
    var obtainedMarks = marks1 + marks2 + marks3;
    var percentage = (obtainedMarks / (totalMarks * 3)) * 100;
  
    var grade, remarks;
  
    if (percentage >= 90) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "C";
      remarks = "Fair";
    } else if (percentage >= 50) {
      grade = "D";
      remarks = "Average";
    } else {
      grade = "F";
      remarks = "Fail";
    }
  
    document.write("<h2>Result</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br>");
  }
  
  calculateGrade();
  