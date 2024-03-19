# data type specification(int) is necessary in this case because the data will be used in the elif statement
shape_chosen = int(input("Key in the shape whose area you would like to find:  \n 1. If square key in 1 \n 2. If "
                         "rectangle key in 2. \n 3. If circle key in 3. \n "))

if shape_chosen == 1:
    length = int(input("You chose a square. Key in its length:  "))
    area = length**2

elif shape_chosen == 2:
    length = int(input("You chose a rectangle. Key in its length:  "))
    width = int(input("Key in your rectangle's width:  "))
    area = length * width

elif shape_chosen == 3:
    radius = int(input("You chose a circle. Key in its radius:  "))
    area = 3.14 * (radius ** 2)

else:
    print("Invalid entry. Key in 1, 2 or 3 to select your  shape.")

print("The area of your shape is " + str(area))
