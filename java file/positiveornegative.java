package whileloop2;

import java.util.Scanner;

public class positiveornegative {
	public static void main (String args[]) {
		Scanner sc= new Scanner(System.in);
		System.out.println("enter a number");
		int a=sc.nextInt();
				
		if (a>0) 
		{
		System.out.println("it is a positive number");
		}
		else if(a<0) 
		{
			System.out.println("it is a negative number");
		}
		else 
		{
			System.out.println("number is zero");
		}
		
		
		
	}

}
