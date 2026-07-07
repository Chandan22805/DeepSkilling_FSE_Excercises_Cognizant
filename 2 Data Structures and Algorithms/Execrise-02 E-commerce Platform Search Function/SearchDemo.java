public class SearchDemo {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Smartphone", "Electronics"),
                new Product(103, "Headphones", "Accessories"),
                new Product(104, "Shoes", "Fashion"),
                new Product(105, "Watch", "Accessories")
        };

        int targetId = 104;

        System.out.println("LINEAR SEARCH");

        Product linearResult = LinearSearch.search(products, targetId);

        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        System.out.println();

        System.out.println("BINARY SEARCH");

        Product binaryResult = BinarySearch.search(products, targetId);

        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}