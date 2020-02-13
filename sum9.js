//Find first repeated charecter that repeats in the given string
function firstRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) !== i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }
  console.log(firstRepeatedCharacter('hello'))