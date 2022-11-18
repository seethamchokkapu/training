package whileloop2;

public class arraywhile {
	public static void main(String args[]) {
		String[] a= {"volve","rent","recent","dude"};
		for( int i=0;i<a.length;i++) {
			while(i<4) {
				System.out.println(a[i]);
				i++;
			}
		}
	}
}
