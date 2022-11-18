package whileloop2;

import java.util.Arrays;
import java.util.Scanner;

public class sumofpositivenumbers {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("enter the size of array ");
		int x=sc.nextInt();
		int a[]=new int[x];
		System.out.println("enter array:");
	
		for(int k=0;k<a.length;k++) {
		a[k]=sc.nextInt();
		}
		Arrays.sort(a);
		int i=0,sum=0;
	
		while(i<a.length) {
		    
			if(a[i]>0)
			{
				sum+=a[i];
				
			}
			i++;
			
		}
		System.out.println("sum of the array numbers excluding negative number="+sum);
	
	}
}
