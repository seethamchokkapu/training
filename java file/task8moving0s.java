package whileloop2;

import java.util.Scanner;

public class task8moving0s {
	public static void main (String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the size of the  Array");
		int size=sc.nextInt();
		int a[]=new int[size];
		System.out.println("enter the values");
		for(int i=0;i<a.length;i++) {
			a[i]=sc.nextInt();
		}
		for(int j=0;j<size;j++) {
			for(int k=j+1;k<a.length;k++) {
				if(a[j]<=a[k]) {
					int temp;
					temp=a[j];
					a[j]=a[k];
					a[k]=temp;
					
				}
			}
		}
		for(int l=0;l<a.length;l++) {
			System.out.println(a[l]);
		}
		

	}
}
