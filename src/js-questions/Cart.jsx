import React, { useState } from "react";

const Cart = () => {
  const data = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 15.99,
      coverImage: "https://example.com/book1.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 12.99,
      coverImage: "https://example.com/book2.jpg",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "10.99",
      coverImage: "https://example.com/book3.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);

  const handleAddToCart = (bookData) => {
    if (!bookData.itemQuantity) {
      bookData.itemQuantity = 1;
    }
    cart.push(bookData);
    console.log("bookData", bookData);
    console.log("cart", cart);
  };

  const handleRemoveFromCart = (bookData) => {
    if (bookData.itemQuantity === 1) {
      bookData.itemQuantity = 0;
    }
    cart.pop(bookData);
    console.log("bookData", bookData);
    console.log("cart", cart);
  };

  const handleUpdateCart = (bookData, action) => {
    console.log('update');
    if(action === "+1"){
      bookData.itemQuantity = bookData.itemQuantity+1;
    }else{
      bookData.itemQuantity--;
    }
    console.log("bookData", bookData);
    console.log("cart", cart);
  };

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {data.map((book, index) => (
          <BookLayout
            book={book}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateCart={handleUpdateCart}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;

const BookLayout = ({ book, handleAddToCart, handleRemoveFromCart, handleUpdateCart }) => {
  return (
    <div>
      <button onClick={() => handleAddToCart(book)}>Add to cart</button>
      <button
        style={{ margin: "5px" }}
        onClick={() => handleRemoveFromCart(book)}
      >
        Remove from cart
      </button>
      <button style={{ margin: "5px", width: "25px" }} onClick={() => handleUpdateCart(book, "+1")}>
        +1
      </button>
      <button style={{ margin: "5px", width: "25px" }} onClick={() => handleUpdateCart(book, "-1")}>
        -1
      </button>
    </div>
  );
};
