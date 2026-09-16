const express = require('express');

const app = express();

const PORT = 3000;

const menu = [
  { id: 1, food: "pomodoro", price: 85 },
  { id: 2, food: "fried chicken", price: 95 },
  { id: 3, food: "burger", price: 60 },
  { id: 4, food: "fries", price: 200 },
  { id: 5, food: "croissant", price: 150 },
  { id: 6, food: "cookie", price: 80 },
  { id: 7, food: "iced americano", price: 150 },
  { id: 8, food: "matcha", price: 170 },
   { id: 8, food: "cafe latte", price: 170 }
];

// all
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// indiv (search by id)
app.get("/api/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find(m => m.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});