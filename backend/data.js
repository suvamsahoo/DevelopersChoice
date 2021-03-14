import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "suvam",
      email: "suvam@gmail.com",
      password: bcrypt.hashSync("suvam77", 8),
      isAdmin: true,
    },
    {
      name: "sahoo",
      email: "sahoo@gmail.com",
      password: bcrypt.hashSync("sahoo77", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "React Half Sleeve",
      category: "T-Shirt",
      image: "/images/react.jpg",
      price: 499,
      countInStock: 10,
      brand: "React",
      rating: 4.5,
      numReviews: 10,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "Python Half Sleeve",
      category: "T-Shirt",
      image: "/images/python.jpg",
      price: 499,
      countInStock: 20,
      brand: "Python",
      rating: 4,
      numReviews: 19,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "Google Cloud",
      category: "Hoodie",
      image: "/images/google.jpg",
      price: 799,
      countInStock: 15,
      brand: "Google",
      rating: 4.3,
      numReviews: 49,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "AWS Black Boxer",
      category: "Shorts",
      image: "/images/aws.jpg",
      price: 399,
      countInStock: 5,
      brand: "Amazon",
      rating: 3.9,
      numReviews: 87,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "Microsoft Polo",
      category: "T-Shirt",
      image: "/images/microsoft.jpg",
      price: 699,
      countInStock: 45,
      brand: "Microsoft",
      rating: 1,
      numReviews: 24,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "Java Full Sleeve",
      category: "T-Shirt",
      image: "/images/java.jpg",
      price: 499,
      countInStock: 0,
      brand: "Java",
      rating: 4.4,
      numReviews: 91,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
    {
      name: "JavaScript Geek Hoodies",
      category: "Hoodie",
      image: "/images/javascript.jpg",
      price: 799,
      countInStock: 0,
      brand: "JavaScript",
      rating: 5,
      numReviews: 12,
      description:
        "Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.",
    },
  ],
};

export default data;
