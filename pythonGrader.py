import sys

studentName= raw_input("student name: ")
assignmentName= raw_input("assignment: ")
grade=input("Grade: ")

if grade > 89:
    print("The grade is an A!")
elif grade > 79:
    print("The grade is a B!")
elif grade > 69:
    print("The grade is a C!")
elif grade > 59:
    print("The grade is a D!")
else:
    print("The grade is an F!")

