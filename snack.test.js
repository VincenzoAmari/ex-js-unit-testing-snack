const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
} = require("./snack.js");

test("la funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Vincenzo Amari")).toBe("V.A.");
  expect(getInitials("federica giorgini")).toBe("F.G.");
});

test("la funzione createslug restutuisce una stinga in lowercase", () => {
  expect(createSlug("Vincenzo Amari")).toBe("vincenzo-amari");
});

test('la funzione "average" calcola la media aritmetica di un array di numeri ', () => {
  expect(average([15, 25])).toBe(20);
  expect(average([10, 20, 30, 40, 50])).toBe(30);
});

test('la funzione createslug sostituisce gli spazi con "-"', () => {
  expect(createSlug("Vincenzo Amari")).toBe("vincenzo-amari");
});

test("la funzione isPalindome verifica se la stringa è palindoma", () => {
  expect(isPalindrome("anna")).toBeTruthy();
  expect(isPalindrome("vincenzo")).toBeFalsy();
});
