import java.util.Scanner; //This inbuilt class will be used for reading user input
class Main {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in); // Create a Scanner object
        System.out.println("Select the shape whose area you would like to determine. \n 1. If square select 1. \n 2. If rectangle select 2 \n 3. If circle select 3. \n");
        
        int shapeSelected = myObj.nextInt(); // Read user input

        switch(shapeSelected){
            case 1:
                System.out.println("You have selected a square. Key in its length: ");
                int length = myObj.nextInt();
                int area = length * length;
                System.out.println("The area of your square is" + area);
                break;
            case 2:
                System.out.println("You have selected a rectangle. Key in its length: "); //Below I use length 2 because Java does not allow one to
                //use the same variable twice in one method
                int length2 = myObj.nextInt();
                System.out.println("Now key in its width: ");
                int width = myObj.nextInt();
                int area2 = length2 * width;
                System.out.println("The area of your rectangle is " + area2);
                break;
            case 3:
                System.out.println("You have selected a circle. Key in its radius: ");
                double radius = myObj.nextDouble();
                double area3 = 3.14 * (radius*radius);
                System.out.println("The area of your circle is " + area3);
                break;
        }
    }

}