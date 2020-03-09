import foods from "./Foods";
import { choice, remove } from "./Helpers";

let fruit = choice(foods);

console.log(`I'd like one ${fruit},Please.`);
console.log(`Here you go: ${fruit}`);
console.log("Delicious");

let remaining = remove(foods, fruit);

console.log(`I'm sorry , we'r all out. We have ${remaining} left`);

