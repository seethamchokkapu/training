package whileloop2;

import java.util.Scanner;

public class task7pairsofelementssum {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the size of the  Array");
		int size=sc.nextInt();
		int a[]=new int[size];
		System.out.println("enter the values");
		for(int i=0;i<a.length;i++) {
			a[i]=sc.nextInt();
		}
		System.out.println("enter the specific values whose sum is specific number");
		int b=sc.nextInt();
		for(int j=0;j<a.length;j++) {
			for(int k=j+1;k<a.length;k++) {
				if(a[j]+a[k]==b) {
				System.out.println( ""+a[j]+","+a[k]+" ");
			}
		}
			
	}
	
	}
}

