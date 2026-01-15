// Task 4: delUser(number)

import { getServerURL } from './task1.js'; 
export const delUser = async (id) => {
  try {
    const response = await fetch(`${getServerURL()}/users/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Usuario con id ${id} eliminado correctamente`);
    } else {
      console.error(`No se pudo eliminar el usuario con id ${id}`);
    }

  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};