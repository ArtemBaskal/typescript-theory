import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([3, -5, 0, 10]);
const сharactersCollection = new CharactersCollection("aaXayb");
const linkedList = new LinkedList();
linkedList.add(-1);
linkedList.add(6);
linkedList.add(9);

numbersCollection.sort();
console.log(numbersCollection);

сharactersCollection.sort();
console.log(сharactersCollection);

linkedList.sort();
linkedList.print();
