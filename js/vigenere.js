var ALPHABET_SIZE = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

function vigenere(decrypt, key, text) {
    key = toJustUppercase(key);
    text = toJustUppercase(text);

    var textOffset = 0;
    return text.replace(/[A-Z]/g, function(textChar) {
        var keyChar = key[textOffset++ % key.length];
        var cryptedChar = substituteCharacter(decrypt, keyChar, textChar);
        return cryptedChar;
    });
}

function substituteCharacter(decrypt, keyChar, textChar) {
    var keyIndex = charToABCIndex(keyChar);
    if (decrypt) {
        keyIndex = ALPHABET_SIZE - keyIndex;
    }

    var textIndex = charToABCIndex(textChar);


    var substitutedIndex = (textIndex + keyIndex) % ALPHABET_SIZE;

    var substitutedChar = abcIndexToChar(substitutedIndex);
    return substitutedChar;
}

function toJustUppercase(text) {
    return text.toUpperCase().replace(/[^A-Z]/g, '')
}

function charToABCIndex(charValue) {
    return charValue.charCodeAt(0) - 'A'.charCodeAt(0);
}

function abcIndexToChar(index) {
    return String.fromCharCode(index + 'A'.charCodeAt(0));
}
