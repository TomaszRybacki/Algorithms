/*
The captain has just intercepted a message from the opposition.
But they were clever (or not?) enough to encode it using the Caesar Cipher,
leaving the captain unable to get the information he needed.

Having zero patience with figuring out the right number themselves,
they ask for you and the IT department's help to crack the message.

You and the IT department are bored as well, and decide to just mess around and
see who can make a program that can crack the encoded string
(Nobody wants to shift it 26 times, that's boring and tedious!)

Example
For messge = "Uijt jt b sfbebcmf tusjoh jo Fohmjti!", the output should be
privateEyesOnly(message) = "This is a readable string in English!".

Out of all the 26 possible shifts, the only readable (and valid)
string is when you shift 25 times "This is a readable string in English!".

Input/Output

[execution time limit] 4 seconds (js)

[input] string message

The encoded string, and it is guaranteed to be readable in English and forms a sentence(s).

Guaranteed constraints:
9 < a.length < 2000.
The only special characters are ' , . ! ? ( )

[output] string

The decoded string, shifted the right amount without ruining the capitalization and punctuation.
*/

function privateEyesOnly(message) {

}

console.log(privateEyesOnly("Uijt jt b sfbebcmf tusjoh jo Fohmjti!"));
// "This is a readable string in English!"
console.log(privateEyesOnly("Dwwdfn zhvw ri wkh wrzq kdoo!"));
// "Attack west of the town hall!"
console.log(privateEyesOnly("Jveu lezk B9 kf kyv ivri fw kyv tzkp, givgriv wfi srtblg."));
// "Send unit K9 to the rear of the city, prepare for backup."
console.log(privateEyesOnly("Yg'tg pq uvtcpigtu vq nqxg, aqw mpqy vjg twngu cpf uq fq K."));
// "We're no strangers to love, you know the rules and so do I."
console.log(privateEyesOnly("Arire tbaan tvir lbh hc, arire tbaan yrg lbh qbja, arire tbaan eha nebhaq naq qrfreg lbh."));
// "Never gonna give you up, never gonna let you down, never gonna run around and desert you."
console.log(privateEyesOnly("Czqm hs Ingm chc xnt enqfds sgd rghes mtladq? Hs'r 1!"));
// "Darn it John did you forget the shift number? It's 1!"
console.log(privateEyesOnly("Pcb yjcpr, rfcpc'q yl slilmul glrpsbcp gl rfc zsgjbgle! Qcaspc yjj bmmpq ylb clrpylacq!"));
// "Red alert, there's an unknown intruder in the building! Secure all doors and entrances!"
console.log(privateEyesOnly("Jcjhzyj twijw 37."));
// "Execute order 37."
console.log(privateEyesOnly("Clear area Echo Bravo."));
// "Clear area Echo Bravo."
console.log(privateEyesOnly("Nke, ck qtuc eua'xk otzkxikvzotm znkyk, igt eua yzuv?"));
// "Hey, we know you're intercepting these, can you stop?"
