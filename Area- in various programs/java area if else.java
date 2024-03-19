
import java.util.Scanner;  // Import the Scanner class

class Main {
  public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in); // Create a Scanner object
        System.out.println("Select the shape whose area you would like to determine. \n 1. If square, press 1. \n 2. If rectangle, press 2. \n 3. If circle, press 3. \n");
        
        int shapeChosen = myObj.nextInt(); // Read user input
        
    if(shapeChosen == 1) { //SQUARE
        System.out.println("You chose a square. Key in its length: ");
        int length = myObj.nextInt();
        int area = length * length;
        System.out.println("The area of your square is "+ area);
    } else if (shapeChosen == 2){ //RECTANGLE
        System.out.println("You chose a rectangle. Key in its length:");
        int length = myObj.nextInt();
        System.out.println("Now key in its width: ");
        int width = myObj.nextInt();
        int area = length * width;
        System.out.println("The area of your rectangle is" + area);
    } else if (shapeChosen == 3) { //CIRCLE
        System.out.println("You chose a circle. Key in its radius: ");
        double radius = myObj.nextDouble();
        double area = 3.14 * (radius * radius) ;
        System.out.println("The area of your circle is " + area);
    } else{
        System.out.println("Kindly key in a valid choice to select a shape. Either 1, 2, or 3");
        }

   }
}

