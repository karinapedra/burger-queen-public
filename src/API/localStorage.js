const urlAPI = 'http://localhost:8080';

const setItens = (token) => {
  localStorage.setItem("token", token)
}

const getItens = () => {
  return localStorage.getItem("token")
}

const setIdUsuario = (userId) => {
  localStorage.setItem("idUsuario", userId)
}

const getIdUsuario = () => {
  return localStorage.getItem("idUsuario")
}
export {urlAPI, setItens, getItens, setIdUsuario, getIdUsuario}