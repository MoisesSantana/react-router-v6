const BASE_URL = 'https://rickandmortyapi.com/api';

export async function handleFetch(param) {
  try {
    const response = await fetch(`${BASE_URL}/${param}`);
    console.log(response)
    const {results} = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    throw 'Deu ruim';
  }
}