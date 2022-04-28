import axios from 'axios';
const url = 'http://520f-103-209-131-27.ap.ngrok.io/api/pegawais?populate=*';
export const readTodos = () => axios.get(url)
//export const createTodo = newTodo => axios.post(url, newTodo);