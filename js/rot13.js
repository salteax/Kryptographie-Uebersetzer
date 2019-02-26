function rot13(text){
  var res = [];
  var key = 13;

  for (var i = 0; i<text.length; i++) {
    if (text.charCodeAt(i)+key > 122){
      res.push(String.fromCharCode(96+text.charCodeAt(i)-122+key));
    }
    else {
      res.push(String.fromCharCode(text.charCodeAt(i)+key));
    }
  }
  return res.join('');
}
