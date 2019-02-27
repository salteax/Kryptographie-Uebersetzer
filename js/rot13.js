function rot13(text){
  var resolution = [];                                                          //Array in dem die verschlüsselten/entschlüsselten Zeichen gespeichert werden
  var key = 13;                                                                 //Schlüssel zur Ver- und Entschlüsselung
  var position_current;                                                         //Variable in die der Unicode-Wert eines Zeichens gespeichert wird
  var position_shifted;                                                         //Variable in die der Unicode-Wert eines Zeichens nach Verschiebung mit dem Schlüssel gespeichert wird

  for (var i = 0; i < text.length; i++) {
    position_current = text.charCodeAt(i);                                      //in Variable "position_current" wird der Unicode-Wert des aktuellen Zeichens gespeichert
    position_shifted = text.charCodeAt(i) + key;                                //in Variable "position_shifted" wird der Unicode-Wert des Zeichens nach Verschiebung mit dem Schlüssel gespeichert

    if (position_shifted > 90 && position_shifted < 104){                       //sollte es sich um ein verschobenes Zeichen mit einem Unicode Wert im Bereich von 90-104 (Großbuchstabe) handeln
      resolution.push(String.fromCharCode(96+position_current-122+13));         //beginnt die restliche Zählung wieder bei dem Großbuchstaben A und das zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
    }
    else if ((position_current >= 0 && position_current <= 64) || (position_current >= 123 && position_current <= 126)) { //sollten sich die Zeichen im Bereich von 0-64 oder 123-126 (Sonderzeichen) befinden
      resolution.push(String.fromCharCode(position_current));                                                             //werden diese nicht verschoben
    }
    else if (position_shifted > 122){                                           //sollte es sich um ein verschobenes Zeichen mit dem Unicode Wert größer als 122 handeln
      resolution.push(String.fromCharCode(96+position_current-122+13));         //beginnt die restliche Zählung wieder bei dem Kleinbuchstaben a und das zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
    }
    else {
      resolution.push(String.fromCharCode(position_shifted));                   //das durch den Schlüssel verschobene und zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
    }
  }

  return resolution.join('');                                                   //der Array "resolution" wird zum String zusammengefasst und zurückgegeben
}
//Timer einbauen
