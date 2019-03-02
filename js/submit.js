function submit(val1, val2, text, key){

  switch (val2) {
    case '0':
      console.time("ROT5");                                                     //Timer ROT5 Anfang
      text = rot5(text);
      console.timeEnd("ROT5");                                                  //Timer ROT5 Ende
      break;
    case '1':
      console.time("ROT13");                                                    //Timer ROT13 Anfang
      text = rot13(text);
      console.timeEnd("ROT13");                                                 //Timer ROT13 Ende
      break;
    case '2':
      console.time("ROT5 & ROT13");                                             //Timer ROT5 & ROT13 Anfang
      text = rot13(text);
      text = rot5(text);
      console.timeEnd("ROT5 & ROT13");                                          //Timer ROT5 & ROT13 Ende
      break;
    case '3':
      if (key == "") {
        key = "vigenere";
        document.keyform.key.value = key;
      }
      if (val1 == 0) {
        console.time("vigenere");                                               //Timer vigenere Anfang
        text = vigenere(false,key,text);
        console.timeEnd("vigenere");                                            //Timer vigenere Ende
      } else {
        text = vigenere(true,key,text);
      }
      break;
    default: console.log("Keine Verschlüsselung/Entschlüsselung vorgenommen.")
  }
  document.textform.output.value = text
}
