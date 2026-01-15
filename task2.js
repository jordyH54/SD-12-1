// Task 2: listUsers()

import { getServerURL } from './task1.js'; 
export const listUsers = () => {
  fetch(`${getServerURL()}/users`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error al obtener usuarios:', error);
    });
};