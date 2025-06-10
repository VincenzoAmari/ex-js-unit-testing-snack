function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str) {
  return str.toLowerCase();
}

function average(numeri) {
  let somma = 0;
  numeri.forEach((numero) => {
    somma += numero;
  });
  return somma / numeri.length;
}

module.exports = {
  getInitials,
  createSlug,
  average,
};
