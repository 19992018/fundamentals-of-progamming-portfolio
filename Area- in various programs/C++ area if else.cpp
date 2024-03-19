
// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int main() {
	float area;
	int shape_selected;
	
	cout << "Select the shape whose area you would like to determine: \n 1. If it's a square press 1 \n 2. If it's a rectangle press 2 \n 3. If it's a circle press 3 \n ";
	cin>>shape_selected;
	
	if (shape_selected == 1){
		float length;
		cout<<"You have selected a square. Key in its length:";
		cin>>length;
		area = length * length;
		cout<<"The area of your square is: "<<area;
	} 
	
	else if (shape_selected == 2) {
		float length, width;	
		cout<<"You have selected a rectangle. Key in its length and width:"; 
		cin>>length;
		cin>>width;
		area = length * width;
		cout<<"The area of your rectangle is: "<<area;
	}
	
	else if (shape_selected == 3){
		float radius;
		cout<<"You have selected a circle. Key in its radius:";
		cin>>radius;
		area = 3.14 * (radius * radius);
		cout<<"The area of your square is:"<<area;
	}
	
	else{
		cout<<"Kindly key in a valid number (1, 2 or 3)";
	}
	
	return 0;
	
	}
	
