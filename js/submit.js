function submit(val1, val2, text, key){

  switch (val2) {
    case '0':
      document.textform.output.value = rot13(text);
      break;
    case '1':
      if (key == "") {
        key = "vigenere";
        document.keyform.key.value = key;
      }
      if (val1 == 0) {
        document.textform.output.value = vigenere(false,key,text);
      } else {
        document.textform.output.value = vigenere(true,key,text);
      }
      break;
    default:
  }
}
