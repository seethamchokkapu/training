package whileloop2;

import java.util.Scanner;

public class Mean {
	public static void main(String[] args) {
		Scanner sc=new Scanner (System .in);
		System.out.println("enter size of the array");
		int x=sc.nextInt();
		double a[]=new double[x];
		
		System.out.println("enter values");
		double sum=0;
		for( int i=0;i<a.length;i++) {
			a[i]=sc.nextInt();
		}
		for (int j=0;j<a.length;j++)
		 sum+=a[j];
		System.out.println( "sum="+sum);
		System.out.println( "devided by"+a.length);
		
		
		  double c= sum/(a.length);
		 System.out.println( "average="+c );
	
		} 
	      
		}	
	
	

