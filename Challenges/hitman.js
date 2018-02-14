/*
As an amateur hitman, your job is to murder a list of people that you were paid to kill.
As like every serial killer, you decide to have a unique signature in your methods.
Given a list of people, you decide to murder your victims in the following pattern:

Every cycle, you kill/remove the person on the top of the list,
then spare the second person by moving them to the bottom of the list.
Then repeat this process until everyone on the list is dead.

You want to leave a surprise for the last person alive on your list,
can you find a way to return the name of the last person alive on a given list?

Example

For people = ["Michael","Janet","Kenny"], the output should be
hitman(people) = Janet.
-> Michael Janet Kenny (Cycle 0)
-> Janet Kenny (Cycle 1, and Michael gets killed)
-> Kenny Janet (Cycle 1, and Janet is moved to the end of the list)
-> Janet (Cycle 2, Kenny is killed and Janet is the last victim)
For ["Alex","Ken","Danny","Marley"], the output should be
hitman(people) = Marley.
-> Alex Ken Danny Marley (Cycle 0)
-> Ken Danny Marley (Cycle 1, and Alex gets murdered)
-> Danny Marley Ken (Cycle 1, and Ken gets moved to the back)
-> Marley Ken (Cycle 2, and Danny gets slaughtered)
-> Ken Marley (Cycle 2, and Marley gets moved to the end)
-> Marley (Cycle 3, Ken gets killed, and Marley is the last to live)
Hint: Wbfrcuhf (ROT13)
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string people

The list of people (Some of these names may be duplicates) you were paid to kill.
These names only contain letters from the English alphabet.

Guaranteed constraints:
0 < people.length < 2 · 105.

[output] string

The last person on your list you will kill.
*/

function hitman(people) {
  while (people.length > 1) {
    const arrayLength = people.length;
    people = people.filter((person, index) => index % 2);
    if (arrayLength % 2) people.push(people.shift());
  }
  return people[0];
}

console.log(hitman(["Michael", "Janet", "Kenny"])); // "Janet"
console.log(hitman(["Alex", "Ken", "Danny", "Marley"])); // "Marley"
console.log(hitman(["Dan", "Sarah"])); // "Sarah"
console.log(hitman(["Mark", "Jennifer", "James", "Ryan", "Logan"])); // "Jennifer"
console.log(hitman(["Abe", "Abby", "Malcolm", "Ian", "Deborah", "Olive", "Jake"])); // "Olive"
console.log(hitman(["Abe", "Abby", "Malcolm", "Ian", "Deborah", "Olive", "Jake", "Tim", "Jennifer", "Jack", "Freddy"])); // "Olive"
console.log(hitman(["SurelyThisWorks"])); // "SurelyThisWorks"

/*
Execution time limit exceeded on test 10

function hitman(people) {
  while (people.length > 1) {
    people.shift();
    people.push(people[0]);
    people.shift();
  }
  return people[0];
}
*/
