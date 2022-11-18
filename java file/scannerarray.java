package whileloop2;

import java.util.Scanner;

public class scannerarray {
	public static void main(String args[]) {
				Scanner sc=new Scanner(System.in);
				System.out.println("enter an array condition");
				int a []=new int[8];
				int i=0;
			
				while(i<=a.length) {
					i=sc.nextInt();
					System.out.println("print an array" +a[i]);
					i++;
					
				}
	         }
        }


