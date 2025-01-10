# Vigenère Cipher Project

This project implements the Vigenère Cipher, a classical encryption technique, using JavaScript. It allows users to encrypt and decrypt messages by providing a text and a keyword.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Code Explanation](#code-explanation)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Vigenère Cipher is a method of encrypting alphabetic text using a simple form of polyalphabetic substitution. A keyword is used to determine the shift for each letter in the plaintext message.

## Features
- Encrypt and decrypt text using the Vigenère Cipher.
- Simple user interface with text input fields for text, keyword, and mode (encrypt/decrypt).
- Handles uppercase letters and ignores non-alphabetic characters.

## How It Works
1. **Input:** User provides a text message and a keyword.
2. **Key Cycling:** The keyword repeats if shorter than the text.
3. **Encryption:** Each letter is shifted based on the corresponding letter in the keyword.
4. **Decryption:** The reverse shift is applied to decode the message.

## Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/Shubhamaswal09/Vigen-re-Cipher/
   ```
2. Open `index.html` in a web browser.
3. Enter the text, keyword, and choose encrypt or decrypt.
4. Click the **Process** button to see the result.

## Technologies Used
- HTML
- CSS
- JavaScript

## Code Explanation
The core logic resides in the `vigenereCipher` function in the JavaScript file:
```javascript
function vigenereCipher(text, key, mode = 'encrypt') {
    let result = '';
    let keyIndex = 0;
    key = key.toUpperCase();
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            let shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
            let newCharCode = (mode === 'encrypt')
                ? (char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26 + 'A'.charCodeAt(0)
                : (char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0);
            result += String.fromCharCode(newCharCode);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}
```

## How to Run
1. Open the project folder.
2. Launch `index.html` in a web browser.
3. Enter a message and a keyword, then click **Encrypt** or **Decrypt**.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes with descriptive messages.
4. Push to your branch and create a pull request.

## License
This project is licensed under the MIT License.

