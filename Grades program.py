
print("Key in your marks to know your grades. Press -1 to terminate the program")
#initialize the while loop
count=0
#since count is 0 this statement will allways be true
#hence an endless loop
while count>=0: # EDIT: A few weeks into this course I discovered this line could be "while True: "
    mark = int(input("Key in your mark: "))
    match mark:
        case mrk if 90<=mrk<=100:
            print("Your grade is A")
        case mrk if 87<=mrk<=89:
            print("Your grade is A-")
        case mrk if 84<=mrk<=86:
            print("Your grade is B+")
        case mrk if 80<=mrk<=83:
            print("Your grade is B")
        case mrk if 77<=mrk<=79:
            print("Your grade is B-")
        case mrk if 74<=mrk<=76:
            print("Your grade is C+") 
        case mrk if 70<=mrk<=73:
            print("Your grade is C") 
        case mrk if 67<=mrk<=69:
            print("Your grade is C-") 
        case mrk if 64<=mrk<=66:
            print("Your grade is D+") 
        case mrk if 62<=mrk<=63:
            print("Your grade is D")
        case mrk if 60<=mrk<=61:
            print("Your grade is D-")
        case mrk if 0<=mrk<=59:
            print("Your grade is F")
        #Allows the user to end the loop only if they press =1
        case -1:
            print("You have pressed the exit command (-1). \nThe program has terminated.") 
            break
            #Default. Error message that displays if user keys in values not =1 or 1 to 100 case_:
        case _:
            print("Kindly key in a value between 0 and 100")
    count=count+1
    