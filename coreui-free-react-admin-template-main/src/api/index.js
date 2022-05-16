import axios from 'axios';
const url = 'https://c10e-114-124-130-20.ap.ngrok.io/api/pengujis?populate=*';
export const readPenguji = () => axios.get(url)
//export const createTodo = newTodo => axios.post(url, newTodo);