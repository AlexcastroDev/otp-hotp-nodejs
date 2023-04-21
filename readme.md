# OTP-Test

OTP-Test is a Node.js project that implements the otplib and qrcode-terminal libraries. It provides a simple way to generate and display OTP codes on the terminal.

# Installation

To install OTP-Test, you need to have Node.js and npm installed on your machine. Then, you can run the following command:

```bash
npm install
```

This will install all the required dependencies, including otplib and qrcode-terminal.

# Usage

OTP-Test comes with four scripts that you can run:

generate: generates a QR code for a TOTP secret and displays it on the terminal.
generate:hotp: generates a QR code for a HOTP secret and displays it on the terminal.
input:totp: prompts the user to enter a TOTP code and verifies it.
input:htotp: prompts the user to enter a HOTP code and verifies it.
To run a script, you can use the following command:

For example, to generate a QR code for a TOTP secret, you can run:

```bash
npm run generate
```

In this file, you can see the project's name, version, description, main file, scripts, keywords, author, license, and dependencies. The scripts section contains the four scripts that you can run, and the dependencies section lists the libraries required by the project.

Conclusion
OTP-Test is a simple but useful project that demonstrates how to use the otplib and qrcode-terminal libraries to generate and display OTP codes on the terminal. With this project as a starting point, you can build more complex OTP-based applications or integrate OTP functionality into existing projects.