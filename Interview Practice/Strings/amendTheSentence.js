/*
You have been given a string s, which is supposed to be a sentence.
However, someone forgot to put spaces between the different words,
and for some reason they capitalized the first letter of every word.
Return the sentence after making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
Example

For s = "CodefightsIsAwesome", the output should be
amendTheSentence(s) = "codefights is awesome";
For s = "Hello", the output should be
amendTheSentence(s) = "hello".
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string containing uppercase and lowercase English letters.

Guaranteed constraints:

3 ≤ s.length ≤ 100.

[output] string

The amended sentence.
*/

function amendTheSentence(s) {
  s = s.replace(/([A-Z])/g, ' $1');
  s = s.toLowerCase().trim();
  return s;
}

console.log(amendTheSentence('CodefightsIsAwesome')); // "codefights is awesome"
console.log(amendTheSentence('Hello')); // "hello"
console.log(amendTheSentence('vSKwWDjwIerQKMgVaAniorRJlerbKpDgvyKBLPNwSRWtylqKewNFtERNuUBBHAsGkTSSfdhQHJYvAighAdeG'));
// "v s kw w djw ier q k mg va anior r jlerb kp dgvy k b l p nw s r wtylq kew n ft e r nu u b b h as gk t s sfdh q h j yv aigh ade g"
console.log(amendTheSentence('iFvFAxtViLJDuWWXJesppOcLVdRAJZwBobdczkkWSPHzFLfyvmJYPdqYqRKKvLGYLwEFXcJiyYWLqjBvHjeqE'));
// "i fv f axt vi l j du w w x jespp oc l vd r a j zw bobdczkk w s p hz f lfyvm j y pdq yq r k kv l g y lw e f xc jiy y w lqj bv hjeq e"
console.log(amendTheSentence('iEiMCyKAdsfGMPa')); // "i ei m cy k adsf g m pa"
console.log(amendTheSentence('JhBkPBaozMnBqEWiIaOEje')); // "jh bk p baoz mn bq e wi ia o eje"
console.log(amendTheSentence('tfRZGdYurvrVyEuHbOJcaXnZrsEUr')); // "tf r z gd yurvr vy eu hb o jca xn zrs e ur"
