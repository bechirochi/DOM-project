# DOM-project
🛒 Shopping Cart - DOM Project
📌 Description

This project is a simple interactive shopping cart built using HTML, CSS, and JavaScript (DOM manipulation).

It allows users to:

➕ Increase product quantity
➖ Decrease product quantity
🗑️ Delete products from the cart
❤️ Like / Unlike products
💰 See the total price update automatically
🚀 Features
➕ Quantity Control
Click the plus icon (+) to increase quantity
Click the minus icon (-) to decrease quantity (minimum is 0)
🗑️ Delete Product
Click the trash icon to remove a product from the cart
❤️ Like Feature
Click the heart icon to like/unlike a product
Liked items turn red
💰 Total Price
Automatically updates based on:
Product price
Quantity
Deleted items
🧠 How It Works
The page loads and selects all product cards using JavaScript
Event listeners are added to each product:
➕ Increase quantity
➖ Decrease quantity
🗑️ Remove product
❤️ Toggle like
Every change triggers a function that recalculates the total price
🧮 Formula Used
Total Price = Sum of (Unit Price × Quantity)
🛠️ Technologies Used
.HTML5
.CSS3
.JavaScript (DOM Manipulation)
Bootstrap (for layout)
Font Awesome (icons)
📁 Project Structure
project-folder/
│
├── index.html
├── style/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── baskets.png
│   ├── socks.png
│   └── bag.png
