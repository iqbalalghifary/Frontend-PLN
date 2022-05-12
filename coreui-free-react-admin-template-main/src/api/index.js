import axios from 'axios';
const url = 'https://e266-103-209-131-27.ap.ngrok.io/api/pengujis?populate=*';
export const readPenguji = () => axios.get(url)
//export const createTodo = newTodo => axios.post(url, newTodo);