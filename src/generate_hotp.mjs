import { hotp } from 'otplib';
import { secret } from './common/config.mjs';

hotp.options = { digits: 6, window: 0 };
const token = hotp.generate(secret, 1)
console.log("🚀 ~ file: generate_hotp.mjs:5 ~ token:", token)
