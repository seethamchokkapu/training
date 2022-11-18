package whileloop2;

import java.util.Scanner;

public class Mode {
	 public static void main(String[] args) {
	        int i;
	        int count = 0;
	        int value = 0;
	        int max = 0;
	        System.out.println("Enter the size of the Array: ");
	        Scanner sc = new Scanner(System.in);
	        int x = sc.nextInt();
	        int a[] = new int[x];
	        System.out.println("Enter the Array elements: ");

	        for (int k = 0; k < a.length; k++) {
	            a[k] = sc.nextInt();
	        }

	        for (i = 0; i < a.length; i++) {
	            count = 0;
	            for (int j = i + 1; j < a.length; j++) {
	                if (a[i] == a[j]) {
	                    count++;
	                }

	            }

	            if (count >= max) {
	                max = count;
	                value = a[i];

	            }
	        }
	        System.out.println("THE MODE OF THE GIVEN ARRAY IS: ");
	        System.out.println(value);

	    }
	

}
