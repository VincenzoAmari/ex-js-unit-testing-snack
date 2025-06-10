function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  if (!str) {
    throw new Error("stringa non valida");
  }
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
  let somma = 0;
  numeri.forEach((numero) => {
    somma += numero;
  });
  return somma / numeri.length;
}

function isPalindrome(parola) {
  const parolaInversa = parola.trim().split("").reverse().join("");
  return parola.trim() === parolaInversa;
}

function findPostById(posts, id) {
  if (isNaN(id)) {
    throw new Error(`"${id}" non esiste`);
  }
  posts.forEach((p) => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("l array posts non è nel formato corretto");
    }
  });
  return posts.find((p) => p.id === id) || null;
}

module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
};
