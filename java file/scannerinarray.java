package whileloop2;

import java.util.Scanner;

public class scannerinarray {
	public static void main(String args[]) {
		int a[]=new int[5]; 
		int k=0;
		
		Scanner sc=new Scanner(System.in);
		System.out.println("enter a value");
		int x=sc.nextInt();
		for(k=0;k<5;k++);
		{
			a[k]=sc.nextInt(x);
			System.out.println(a[k]);
		}
		
	}
	

	}
	

