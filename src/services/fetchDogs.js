import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogDetail(id) {
  const resp = await client.from('dgs').select('*').match({ id }).single();
  return checkError(resp);
}
