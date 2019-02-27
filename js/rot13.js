function rot13(text){
  var resolution = [];                                                          //Array in dem die verschlüsselten/entschlüsselten Zeichen gespeichert werden
  var key = 13;                                                                 //Schlüssel zur Ver- und Entschlüsselung
  var position_current;                                                         //Variable in die der Unicode-Wert eines Zeichens gespeichert wird
  var position_shifted;                                                         //Variable in die der Unicode-Wert eines Zeichens nach Verschiebung mit dem Schlüssel gespeichert wird

  for (var i = 0; i < text.length; i++) {
    position_current = text.charCodeAt(i);                                      //in Variable "position_current" wird der Unicode-Wert des aktuellen Zeichens gespeichert
    position_shifted = text.charCodeAt(i) + key;                                //in Variable "position_shifted" wird der Unicode-Wert des Zeichens nach Verschiebung mit dem Schlüssel gespeichert

    if ((position_current >= 65 && position_current <= 90) || (position_current >= 97 && position_current <= 122)) { //sollte es sich um ein Buchstaben aus dem Alphabet handeln (65-90 = Großbuchstaben und 97-122 = Kleinbuchstaben)
      if (position_shifted > 90 && position_shifted < 104){                     //sollte es sich um ein verschobenes Zeichen mit einem Unicode Wert im Bereich von 90-104 (Großbuchstabe) handeln
        resolution.push(String.fromCharCode(96+position_current-122+13));       //beginnt die restliche Zählung wieder bei dem Großbuchstaben A und das zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
      }
      else if (position_shifted > 122){                                         //sollte es sich um ein verschobenes Zeichen mit dem Unicode Wert größer als 122 handeln
        resolution.push(String.fromCharCode(96+position_current-122+13));       //beginnt die restliche Zählung wieder bei dem Kleinbuchstaben a und das zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
      }
      else {
        resolution.push(String.fromCharCode(position_shifted));                 //das durch den Schlüssel verschobene und zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
      }
    }
    else {                                                                      //sollte es sich um kein Buchstaben aus dem Alphabet handeln (sondern ein Sonderzeichen/Umlaut/etc.)
      resolution.push(String.fromCharCode(position_current));                   //dann behält das Zeichen sein Wert und bleibt somit gleich (wird nicht verschoben)
    }
  }
  return resolution.join('');                                                   //der Array "resolution" wird zum String zusammengefasst und zurückgegeben
}
//Timer einbauen
