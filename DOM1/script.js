// Wait until the HTML page is fully loaded before running JS
document.addEventListener("DOMContentLoaded", function () {

  // Select all product cards
  const cards = document.querySelectorAll(".card-body");

  // Select the total price element
  const totalDisplay = document.querySelector(".total");

  // 🧮 Function to calculate total price
  function updateTotal() {
    let total = 0;

    // Loop through each product card
    cards.forEach((card) => {

      // Get unit price text (example: "100 $")
      const priceText = card.querySelector(".unit-price").textContent;

      // Remove "$" and convert to number
      const price = parseFloat(priceText.replace("$", ""));

      // Get quantity value
      const qty = parseInt(card.querySelector(".quantity").textContent);

      // Add to total (price × quantity)
      total += price * qty;
    });

    // Display updated total price
    totalDisplay.textContent = total + " $";
  }

  // Loop through each product card to add events
  cards.forEach((card) => {

    // Select buttons inside each card
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const deleteBtn = card.querySelector(".fa-trash-alt");
    const heartBtn = card.querySelector(".fa-heart");
    const qty = card.querySelector(".quantity");

    // ➕ Increase quantity
    plusBtn.addEventListener("click", function () {
      qty.textContent = parseInt(qty.textContent) + 1;
      updateTotal();
    });

    // ➖ Decrease quantity
    minusBtn.addEventListener("click", function () {
      let currentQty = parseInt(qty.textContent);

      // Prevent quantity from going below 0
      if (currentQty > 0) {
        qty.textContent = currentQty - 1;
      }

      updateTotal();
    });

    // 🗑️ Delete product card
    deleteBtn.addEventListener("click", function () {
      card.remove();
      updateTotal();
    });

    // ❤️ Like / Unlike product
    heartBtn.addEventListener("click", function () {
      heartBtn.classList.toggle("liked");

      // Change heart color based on state
      if (heartBtn.classList.contains("liked")) {
        heartBtn.style.color = "red";
      } else {
        heartBtn.style.color = "black";
      }
    });
  });

  // Initial calculation when page loads
  updateTotal();
});