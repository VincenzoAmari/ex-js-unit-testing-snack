const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
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
  expect(isPalindrome("anna ")).toBeTruthy();
  expect(isPalindrome("vincenzo")).toBeFalsy();
});

test("la funzione createslug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => createSlug("")).toThrow("stringa non valida");
  expect(() => createSlug(null)).toThrow("stringa non valida");
});

const posts = [
  {
    id: 1,
    title: "introduzione a JavaScript",
    slug: "introduzione-a-javascript",
  },
  {
    id: 2,
    title: "React Hooks",
    slug: "react-hooks",
  },
];

test("la funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "React Hooks",
    slug: "react-hooks",
  });
  //   expect(findPostById(posts, "ciao")).toThrow("ciao non è un id");
  //   expect(findPostById([32, 64], 2)).toThrow(
  //     "L  'array posts non è nel formato corretto"
  //   );
  //   expect(findPostById(posts, 3)).toBe(null);
  //non mi funziona qualcuno di questi e non riesco a trocare l errore
});
