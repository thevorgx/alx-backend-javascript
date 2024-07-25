function handleResponseFromAPI(promise) {
  const myprom = new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  }).then((response) => {
    console.log('Got a response from the API');
    return response;
  }).catch((error) => {
    console.error(error);
    throw error;
  });
  return myprom;
}
export default handleResponseFromAPI;
