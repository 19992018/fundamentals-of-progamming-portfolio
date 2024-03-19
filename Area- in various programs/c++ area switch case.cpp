// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
   int shape_chosen;
    cout << "If you would like to get the area of a: \n 1. square press 1. \n 2. reactangle press 2 \n 3. circle press 3   ";
    cin>> shape_chosen;
    if (shape_chosen == 1){
        float area, l;
        //Ask user to key in l
        area= l * l;
        cout<<"The area of your square is: "<<area;
    } else if (shape_chosen == 2){
        float area, l, w;
        area= l * w;
        cout<<"The area of your rectangle is: "<<area;
    } else if (shape_chosen == 3){
        float area, r;
        area= 3.14 * (r * r);
        cout<<"The area of your circle is: "<<area;
    } else{
        cout<<"Kindly key in a relevant number.";
    }
    

    return 0;
}
