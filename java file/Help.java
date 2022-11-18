package whileloop2;

class fight {
	static void naidu() {
		System.out.println("congratulations");

	}
}

class war extends fight {
	void ramu() {
		super.naidu();
	}
}

public class Help {
	public static void main(String[] args) {
		fight f = new fight();
		war k = new war();
		f.naidu(); // call the method in the class fight//
		k.ramu(); // call the method in the class war//
		fight.naidu(); // with class to call the method//

	}

}
