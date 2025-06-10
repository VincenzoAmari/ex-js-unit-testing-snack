const { getInitials, createSlug } = require("./snack.js");

test("la funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Vincenzo Amari")).toBe("V.A.");
  expect(getInitials("federica giorgini")).toBe("F.G.");
});

test("la funzione createslug restutuisce una stinga in lowercase", () => {
  expect(createSlug("Vincenzo Amari")).toBe("vincenzo amari");
});
