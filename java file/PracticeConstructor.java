package Seetham;

class PracticeConstructo {
	int x, y, total;

	PracticeConstructo(int a, int b) {
		x = a;
		y = b;

	}

	int sum() {
		return (x * y);
	}
}

public class PracticeConstructor {
	public static void main(String[] args) {
		PracticeConstructo f = new PracticeConstructo(10, 20);
		int s = f.sum();
		System.out.println(s);

	}

}
