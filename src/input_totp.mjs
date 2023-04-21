import { stdin, stdout } from 'node:process';
import { authenticator } from 'otplib';
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

    // Client
    const isValid = authenticator.verify({ token: inputToken, secret });

    if(isValid) {
        console.log('Valid token');
    } else {
        console.log('invalid')
    }


    rl.close()
    return inputToken
})()
// const inputToken = stdin.pipe(stdout);

