# E-Commerce-Shopping-Cart-using-react.js
This project is a fully functional e-commerce shopping cart application built using React. It provides an intuitive interface for users to browse products, manage their cart, and place orders. The app utilizes the Context API for state management, ensuring a smooth experience when adding or removing items.


Features

1. Product Listing
2. Display a list of products organized by categories (e.g., Mobiles, Tablets, Laptops).
   
3.Each product card shows key information, including the product name, image, description, price, and a button to add to the cart.

4. Shopping Cart Functionality
Users can add products to the cart with a single click.
The cart displays all added products with their quantities and prices.
Users can adjust quantities or remove items directly from the cart.
The cart updates dynamically to reflect the total number of items and the subtotal price.
5. Order Placement
Users can proceed to place their order from the cart view.
After clicking "Place Order," the cart is cleared, and a success message is displayed, confirming the order placement.
6. Responsive Design
The application is built with Tailwind CSS, ensuring a responsive layout that works seamlessly across devices, from mobile phones to desktops.

Technologies Used

Frontend Framework: React

Routing: React Router for navigation between different components and pages.

State Management: Context API to manage global state for products and cart.

Styling: Tailwind CSS for modern, responsive design.

Icons: React Icons for a polished look.

Architecture
Folder Structure

src/: Contains all the source code for the application.

components/: Reusable components like Navbar, ProductCard, and Cart.

context/: Context providers for managing global state.

data/: Static data files, including product details.

Pages/: Individual page components such as Product, Cart, and Success.

State Management

The application uses the Context API to handle the state of products, cart items, and invoice details. This allows components to access the necessary data without prop drilling.

Key Functions

addCart(product): Adds a product to the cart, either creating a new entry or updating the quantity of an existing item.

removeCart(product): Removes a specified product from the cart.

setInvoiceData(): Updates the invoice state based on the current cart contents, calculating total items and subtotal price.

Usage
Browsing Products: Users can start on the homepage to see all available products categorized accordingly.

Adding to Cart: Clicking the "Add to Cart" button on any product card adds it to the shopping cart.

View Cart: Users can navigate to the cart to review their selected items, change quantities, or remove items.

Place Order: Once satisfied with the cart contents, users can click "Place Order" to finalize their purchase, which triggers a success confirmation.
