import { hotp } from 'otplib';
import { stdin, stdout } from 'node:process';
import { secret } from './common/config.mjs';
import readLine from 'node:readline'

;(async () => {
    const rl = readLine.createInterface({
        input: stdin,
        output: stdout
    })

    const inputToken = await new Promise((resolve, reject) => {
        rl.question('Enter token: ', (token) => {
            resolve(token)
        })
    })


    const isValid = hotp.verify({ token: inputToken, secret, counter: 1 });

    if(isValid) {
        console.log('Valid token');
    } else {
        console.log('invalid')
    }


    rl.close()
    return inputToken
})()
// const inputToken = stdin.pipe(stdout);

