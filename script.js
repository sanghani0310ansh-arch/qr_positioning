function displayInventory() {
  const container = document.getElementById("inventory");
  container.innerHTML = "";

  inventory.forEach(item => {
    const name = document.createElement("p");
    name.textContent = "Name: " + item.name;

    const stock = document.createElement("p");
    stock.textContent = "In store: " + (item.in_store ? "Yes" : "No");

    const price = document.createElement("p");
    price.textContent = "Price: €" + item.price;

    container.appendChild(name);
    container.appendChild(stock);
    container.appendChild(price);
    container.appendChild(document.createElement("hr"));
  });
}

displayInventory();