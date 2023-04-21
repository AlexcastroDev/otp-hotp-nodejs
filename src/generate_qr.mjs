import { secret } from './common/config.mjs';
import qrcode from 'qrcode-terminal';
import { authenticator } from 'otplib';

const tokenGenerated = authenticator.keyuri('alexcastrodev', 'Example', secret);
qrcode.generate(tokenGenerated, { small: true });