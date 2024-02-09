/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

enum State {
  enable,
  disable,
}

let union: string | number = "user";
let literal: State = State.enable;

export {};
