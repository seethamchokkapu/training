package whileloop2;

import java.util.Arrays;
import java.util.Scanner;

public class bignumber {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter array size");
		int x=sc.nextInt();
		int a[]=new int[x];
		System.out.println("enter array");
		for(int j=0;j<a.length;j++) {
			a[j]=sc.nextInt();
		}
		Arrays.sort(a);
		System.out.println("largest number is="+a[a.length-1]);
	}

}
