const urlAPI = 'http://localhost:8080';

const setItens = (token) => {
  localStorage.setItem("acessToken", token)
}

const getItens = () => {
  return localStorage.getItem("acessToken");  // Corrigido o nome do item
}

const setIdUsuario = (userId) => {
  localStorage.setItem("idUsuario", userId)
}

const setProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
}

const getIdUsuario = () => {
  return localStorage.getItem("idUsuario")
}

export { urlAPI, setItens, getItens, setIdUsuario, setProducts, getIdUsuario };
