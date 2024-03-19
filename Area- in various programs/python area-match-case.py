
shape_selected = int(input("Select the shape whose area you would like to determine : \n 1. If square, select 1 \n 2. "
                           "If rectangle, select 2 \n 3. If circle select 3 \n"))
match shape_selected:
    case 1:
        length = float(input("You have selected a square. Key in its length: "))
        area = length ** 2
    case 2:
        length = float(input("You have selected a rectangle. Key in its length: "))
        width = float(input("Now key in its width"))
        area = length * width
    case 3:
        radius = float(input("You have chosen a circle. Now key in its radius: "))
        area = 3.14 * (radius ** 2)

print("The area of your shape is " + str(area))