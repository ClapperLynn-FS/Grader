puts "student name?"
name=gets

puts "assignment name?"
assignmentTitle=gets

puts "assignmentGrade?"
grade=gets
grade=grade.to_i

if grade > 89
    puts "grade is an A!"
elsif grade > 79
    puts "grade is a B!"
elsif grade > 69
    puts "grade is a C!"
elsif grade > 59
    puts "grade is a D!"
else
    puts "grade is a F!"

end
