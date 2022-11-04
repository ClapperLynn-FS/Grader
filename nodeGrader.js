let fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout,
})

rl.question( "Student Name ?",(studentName) => {
	rl.question("Assignment?" ,(assignmentName) => {
		rl.question("Grade?", (grade) => {
			if(grade >=90){
				console.log("grade is an A!");
			}
			else if(grade >=80){
				console.log("grade is an B!");
			}
			else if(grade >=70){
				console.log("grade is an C!");
			}
			else if(grade >=60){
				console.log("grade is an D!");
			}else{
			 console.log("Grade is a F!");
			}
			rl.close();
		})
	})
})