function submit(val1, val2, text, key){
  console.log(val1);
  console.log(val2);
  console.log(text);
  console.log(key);

  if (val1 == 1 && val2 ==1) {
    document.translator.output.value = rot13(text);
  }
  else if (val2 == 1) {
    document.translator.output.value = rot13(text);
  }
  else if (val1 == 1) {
    document.translator.output.value = rot13(text);
  }
  else if (val1 == 2 && val2 == 0) {
    if (key == "") {
      key = "SCHLUESSEL";
      document.keyform.key.value = key;
    }
    document.translator.output.value = vigenere(true, key, text)
  }
  else if (val1 == val2) {
    document.translator.output.value = text;
  }
  else if (val2 == 2) {
    if (key == "") {
      key = "SCHLUESSEL";
      document.keyform.key.value = key;
    }
    document.translator.output.value = vigenere(false, key, text)
  }
  else {
    document.translator.output.value = "";
  }
}
