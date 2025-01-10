document.getElementById('processButton').addEventListener('click', function () {
    const text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    const mode = document.getElementById('mode').value;

    if (!key || !text) {
        alert("Both text and keyword are required!");
        return;
    }

    const result = vigenereCipher(text, key, mode);
    document.getElementById('result').value = result;
});

function vigenereCipher(text, key, mode = 'encrypt') {
    let result = '';
    let keyIndex = 0;
    key = key.toUpperCase();
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            let shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
            let newCharCode;

            if (mode === 'encrypt') {
                newCharCode = (char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26 + 'A'.charCodeAt(0);
            } else {
                newCharCode = (char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0);
            }

            result += String.fromCharCode(newCharCode);
            keyIndex++;
        } else {
            result += char;  
        }
    }

    return result;
}
