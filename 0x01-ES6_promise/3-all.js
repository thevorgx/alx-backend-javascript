import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const userphoto = photo.body;
      const userfirstname = user.firstName;
      const userlastname = user.lastName;
      console.log(`${userphoto} ${userfirstname} ${userlastname}`);
    })
    .catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup;
