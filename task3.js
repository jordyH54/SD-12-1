// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from './task1.js'; 
export const addUser = async (first_name, last_name, email) => {
  try {
    // 1. Obtener usuarios existentes
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    // 2. Calcular nuevo ID secuencial
    const maxId = users.length > 0
      ? Math.max(...users.map(user => user.id))
      : 0;

    const newUser = {
      id: maxId + 1,
      first_name,
      last_name,
      email
    };

    // 3. Enviar nuevo usuario al servidor
    const postResponse = await fetch(`${getServerURL()}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const createdUser = await postResponse.json();
    console.log('Usuario agregado:', createdUser);

  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
};