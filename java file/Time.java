package whileloop2;

import java.util.Scanner;

public class Time {
	public static void main(String args[]) 
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("enter minutes");
		int min=sc.nextInt();
		double years=min/525600;
		System.out.println(years+"years");
		double day=min%525600;
		double days=day/1440;
		System.out.println("days:"+days);
		
		
	}

}