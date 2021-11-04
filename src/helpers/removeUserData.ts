const removeUserData = async (id:number):Promise<[]> => {
  const url: string = `https://jsonplaceholder.typicode.com/posts${id}`;
  const resp = await fetch(url, {
    method: 'DELETE',
  });
  const data: [] = await resp.json();

  return data;
};

export default removeUserData;
