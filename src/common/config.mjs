import { authenticator } from 'otplib';

const secret = 'HUETOVDDMIUUYPTV'
const token = authenticator.generate(secret);

export { token, secret }