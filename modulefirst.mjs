
// import { func, func2} from "./modulesecond.mjs";   // look u can change the names also like  import {func as function1,func2}.....etc
// func();
// func2();




//importanr:-
// if u want to use multiple functions then easy way is like thsi:-
import * as a from "./modulesecond.mjs"; 
a.func();
a.func2();
console.log(a.func());    //in thsi conole log printed first then the return vaklue

console.log(a.func2());

