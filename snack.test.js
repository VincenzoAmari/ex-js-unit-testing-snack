const { getInitials, createSlug, average } = require("./snack.js");

test("la funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Vincenzo Amari")).toBe("V.A.");
  expect(getInitials("federica giorgini")).toBe("F.G.");
});

test("la funzione createslug restutuisce una stinga in lowercase", () => {
  expect(createSlug("Vincenzo Amari")).toBe("vincenzo amari");
});

test('la funzione "average" calcola la media aritmetica di un array di numeri ', () => {
  expect(average([15, 25])).toBe(20);
  expect(average([10, 20, 30, 40, 50])).toBe(30);
});
