const url: string = 'https://jsonplaceholder.typicode.com/posts';

const getUserData = async ():Promise<[]> => {
  const resp = await fetch(url);
  const data: [] = await resp.json();

  return data;
};

export default getUserData;
