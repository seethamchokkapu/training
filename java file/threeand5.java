package whileloop2;

public class threeand5 {
	public static void main(String[] args) {
		System.out.println("multiples of three");
		for (int i = 1; i < 20; i++) {

			if (i % 3 == 0) {
				
				System.out.println(i);

			}
		}
		System.out.println("multiples of five");
		for (int j = 1; j < 30; j++) {
			if (j % 5 == 0) {

				System.out.println(j);
			}
		}
	}
}
