package whileloop2;

public class smallestvalueinarray {
public static void main(String[] args) {
 int a[]= {25,67,23,45,24,67,};
 System.out.println("given array");
 for ( int i=0;i<a.length;i++) {
	 System.out.println(a[i]);
	 }
 int minValue = a[2];
 System.out.println("smallest number in given array ="+minValue);
}

}
