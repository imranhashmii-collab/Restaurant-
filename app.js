
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fffaf3;
  color: #30251f;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 9px;
  padding: 11px 16px;
  background: #eee2d4;
  font-weight: bold;
}

button:hover {
  opacity: 0.85;
}

.header {
  background: #3c241b;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  margin: 0;
}

.header p {
  margin-bottom: 0;
  color: #e8c7a9;
}

.table {
  background: #e8a75b;
  padding: 10px;
  border-radius: 10px;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  flex-wrap: wrap;
}

.hero {
  text-align: center;
  padding: 45px 15px;
  background: #f5dfc4;
}

.hero h2 {
  font-size: 30px;
}

.categories {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 20px;
}

.categories button {
  white-space: nowrap;
}

.categories .active,
.food-card button,
.main-button {
  background: #a64d25;
  color: white;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 18px;
  padding: 20px;
}

.food-card {
  background: white;
  padding: 18px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 3px 12px #00000012;
}

.food-image {
  font-size: 65px;
  background: #fff1df;
  border-radius: 12px;
  padding: 20px;
}

.price {
  font-weight: bold;
  color: #a64d25;
}

.panel {
  background: white;
  margin: 20px auto;
  padding: 22px;
  max-width: 650px;
  border-radius: 14px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.cart-item button {
  margin: 0 5px;
}

.main-button {
  width: 100%;
  margin-top: 15px;
  padding: 15px;
}

.order {
  background: #fff5e9;
  padding: 15px;
  margin: 12px 0;
  border-radius: 10px;
}

.notice {
  margin: 12px;
  padding: 14px;
  background: #e4f5df;
  display: flex;
  justify-content: space-between;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.game-card {
  font-size: 35px;
  height: 85px;
}

footer {
  text-align: center;
  background: #3c241b;
  color: white;
  padding: 25px;
}

footer button {
  background: #e8a75b;
}

@media (max-width: 600px) {
  .header h1 {
    font-size: 21px;
  }

  .hero h2 {
    font-size: 24px;
  }

  .food-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    padding: 10px;
  }

  .food-card {
    padding: 10px;
  }

  .food-image {
    font-size: 45px;
  }

  .cart-item {
    flex-wrap: wrap;
  }
}
