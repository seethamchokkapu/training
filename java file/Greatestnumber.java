

import java.util.Scanner;

public class Greatestnumber {
	public static void main(String args[]) {
		int a,b,c,largest;
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the first number:");
		a=sc.nextInt();
		System.out.println("enter the second number:");
		b=sc.nextInt();
		System.out.println("enter the third number:");
		c=sc.nextInt();
		if(a>b&&a>c) {
			System.out.println("a is the greatest number");
			
			
		}
		else if(b>a&&b>c) {
			System.out.println("b is the greatest number");
		}
		else if(c>a&&c>b) {
			System.out.println("c is the greatest number");
		}
	}
	}


