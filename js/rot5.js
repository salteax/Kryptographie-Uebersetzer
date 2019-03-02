function rot5(text){
  var resolution = [];                                                          //Array in dem die verschlüsselten/entschlüsselten Zeichen gespeichert werden
  var key = 5;                                                                  //Schlüssel zur Ver- und Entschlüsselung
  var position_current;                                                         //Variable in die der Unicode-Wert eines Zeichens gespeichert wird
  var position_shifted;                                                         //Variable in die der Unicode-Wert eines Zeichens nach Verschiebung mit dem Schlüssel gespeichert wird

  for (var i = 0; i < text.length; i++) {                                       //der Text mit mithilfe einer for-Schleife abgearbeitet
    position_current = text.charCodeAt(i);                                      //in Variable "position_current" wird der Unicode-Wert des aktuellen Zeichens gespeichert
    position_shifted = text.charCodeAt(i) + key;                                //in Variable "position_shifted" wird der Unicode-Wert des Zeichens nach Verschiebung mit dem Schlüssel gespeichert

    if (position_current >= 48 && position_current <= 57) {                     //sollte es sich um eine Zahl handeln (Unicode/ASCII Wert = 48-57 (0-9))
      if (position_shifted > 57) {                                              //sollte es sich um ein verschobenes Zeichen mit einem Unicode Wert größer als 57 handeln (6-9)
        resolution.push(String.fromCharCode(47+position_current-57+key));       //beginnt die restliche Zählung wieder bei 0 und das zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
      }
      else {                                                                    //sonst (0-5)
        resolution.push(String.fromCharCode(position_shifted));                 //das durch den Schlüssel verschobene und zugehörige Zeichen des Unicode-Wertes wird zum String und dem Array "resolution" hinzugefügt
      }
    }
    else {                                                                      //sollte es sich um keine Zahl handeln (sondern um ein Buchstaben/Sonderzeichen/Umlaut/etc.)
      resolution.push(String.fromCharCode(position_current));                   //dann behält das Zeichen sein Wert und bleibt somit gleich (wird nicht verschoben)
    }
  }
  return resolution.join('');                                                   //der Array "resolution" wird zum String zusammengefasst und zurückgegeben
}
