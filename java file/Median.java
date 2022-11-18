package whileloop2;

import java.util.Arrays;
import java.util.Scanner;

public class Median {
	public static void main(String args[]) {
		Scanner sc=new Scanner (System.in) ;
		System.out.println("enter your size");
		 int x=sc.nextInt();
		int a[]=new int[x];
		System.out.println("Enter your array values");
		for(int i=0;i<a.length;i++) {
		a[i]=sc.nextInt();
		}
		Arrays.sort(a);
		if(x%2==1) {
			int m=(((x+1)/2)-1);
			System.out.println( "median="+a[m]);
			
		}
		if(x%2==0) {
			float s=(a[x/2]+a[(x/2)-1])/2f;
			System.out.println("median="+s);
		}
			
		}

}
