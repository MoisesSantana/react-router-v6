const BASE_URL = 'https://rickandmortyapi.com/api';

export async function handleFetch(param) {
  try {
    const response = await fetch(`${BASE_URL}/${param}`);
    const {results} = await response.json();
    return results;
  } catch (error) {
    throw 'Deu ruim';
  }
}