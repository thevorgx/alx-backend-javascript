function handleResponseFromAPI(promise) {
  const myprom = promise
    .then(() => {
      console.log('Got a response from the API');
      return ({ status: 200, body: 'Success' });
    })
    .catch((error) => {
      console.error(error);
      return new Error();
    });
  return myprom;
}
export default handleResponseFromAPI;
