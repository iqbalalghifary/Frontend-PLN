import axios from 'axios';
const url = 'https://f7cf-114-124-131-79.ap.ngrok.io/api/pengujis?populate=*';
export const readPenguji = () => axios.get(url)
//export const createTodo = newTodo => axios.post(url, newTodo);