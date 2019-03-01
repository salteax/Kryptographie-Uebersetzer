var SIZE_ALPHABET = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;                  //Größe des Alphabets (Anzahl der Buchstaben) wird in der Konstante SIZE_ALPHABET gespeichert

function vigenere(decrypt, key, text) {                                         //der Funktion "vigenere" wird der Wahrheitswert der (boolschen) Variable "decrypt" übergeben, welcher über Ver- oder Entschlüsselung entscheidet, der Schlüssel und der Text werden ebenfalls übergeben
    key = toJustUppercase(key);                                                 //der Schlüssel wird an die Funktion "toJustUppercase" übergeben somit werden alle Zeichen des Alphabets (A-Z) in Großbuchstaben umgewandelt und alle Zeichen die sich nicht im Alphabet befinden (A-Z) werden entfernt
    text = toJustUppercase(text);                                               //der Text wird an die Funktion "toJustUppercase" übergeben somit werden alle Zeichen des Alphabets (A-Z) in Großbuchstaben umgewandelt und alle Zeichen die sich nicht im Alphabet befinden (A-Z) werden entfernt

    var offset_text = 0;                                                        //die Variable "offset_text" wird mit 0 initialisiert und besitzt somit den Integer Datentyp
    return text.replace(/[A-Z]/g, function replace(char_text) {                 //es wird der Variable "text" zurückgegeben, bei welchem alle Zeichen des Alphabets (A-Z) mit dem verschlüsselten Zeichen durch die Funktion "replace" ersetzt werden
        var char_key = key[offset_text++ % key.length];                         //in die Variable "char_key" wird das Zeichen des Schlüssel an der Stelle x gespeichert (somit wird der Schlüssel auf die Größe des Textes erweitert)
        var char_crypted = substituteCharacter(decrypt, char_key, char_text);   //der Funktion "substituteCharacter" wird der Wahrheitswert der (boolschen) Variable "decrypt" übergeben, welcher über Ver- oder Entschlüsselung entscheidet, die Variable "char_key", welche das aktuelle Zeichen des Schlüssels trägt, und die Variable "char_text", welche das zu ver- oder entschlüsselnde Zeichen trägt, übergeben; der zurückgegebene Wert wird in der Variable "char_crypted" gespeichert
        return char_crypted;                                                    //das verschlüsselte Zeichen mit dem Variablennamen "char_crypted" wird zurückgegeben
    });
}

function substituteCharacter(decrypt, char_key, char_text) {                    //der Funktion "substituteCharacter" wird der Wahrheitswert decrypt übergeben, welcher über Ver- oder Entschlüsselung entscheidet, der Schlüssel und der Text werden ebenfalls übergeben
    var index_key = charToABCIndex(char_key);                                   //das Zeichen des Schlüssels wird mit der Funktion "charToABCIndex" zum index umgewandelt und in der Variable "index_key" gespeichert
    if (decrypt) {                                                              //falls der Wahrheitswert der (boolschen) Variable "decrypt" true ist
        index_key = SIZE_ALPHABET - index_key;                                  //dann wird das Gegenteil des Verschlüsselungsindexes gebildet
    }

    var index_text = charToABCIndex(char_text);                                 //das Zeichen des Textes wird mit der Funktion "charToABCIndex" zum index umgewandelt und in der Variable "index_text" gespeichert

    var index_substituted = (index_text + index_key) % SIZE_ALPHABET;           //index_text und index_key werden kombiniert/addiert und  mit dem Modulo der Alphabet Größe dividiert und in der Variable "index_substituted" gespeichert

    var char_substituted = abcIndexToChar(index_substituted);                   //die Variable "index_substituted" wird mit der Funktion "abcIndexToChar" zum Zeichen umgewandelt und in der Variable "char_substituted" gespeichert
    return char_substituted;                                                    //das verschobene Zeichen mit dem Variablennamen "char_substituted" wird zurückgegeben
}

function toJustUppercase(text) {                                                //der Funktion "toJustUppercase" wird der String "text" übergeben
    return text.toUpperCase().replace(/[^A-Z]/g, '');                           //es wird der String "text" zurückgegeben welcher in Großbuchstaben umgewandelt wurde und alle Zeichen welche sich nicht im Alphabet befinden (A-Z) werden mit '' (nichts) ersetzt
}

function charToABCIndex(char_value) {                                           //der Funktion "charToABCIndex" wird ein Zeichen übergeben, welches mit dem Variablennamen "char_value" versehen wird
    return char_value.charCodeAt(0) - 'A'.charCodeAt(0);                        //es wird die Differenz des ASCII/Unicode Wertes des übergebenen Zeichens und des ASCII/Unicode Wertes des Buchstaben A zurückgegeben
}

function abcIndexToChar(index) {                                                //der Funktion "abcIndexToChar" wird ein Wert übergeben, welcher mit dem Variablennamen "index" versehen wird
    return String.fromCharCode(index + 'A'.charCodeAt(0));                      //der "index" wird dann mit dem ASCII/Unicode Wert des Buchstaben "A" addiert und mithilfe der Methode "fromCharCode" in einen String umgewandelt und zurückgegeben
}
