import { serverAddress } from '../server.js';

export const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    from: 'kowalke209@gmail.com',
    subject: 'Verify email',
    text: 'Please click the link below to verify your email:',
    html: `<a href="${serverAddress}/api/users/verify/${verificationToken}"> Click here to verify your email address </a>`,
  };

  return mail;
};