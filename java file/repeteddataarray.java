package whileloop2;

import java.util.Scanner;

public class repeteddataarray {
	public static void main(String args[]) {
		Scanner sc=new Scanner (System.in);
		int a[]=new int[6];
		System.out.println("give an array");
		 
		for (int i=0;i<a.length;i++)
		{
			System.out.println(a[i]);
			i=sc.nextInt();
	     } 
		int i=1;
		int repeatedvalue=a[i];
		System.out.println("the repeated value is="+repeatedvalue);
	

}
}