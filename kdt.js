// let members = [];
// function kdt(name, glass, payment) {
//   this.id = name;
//   this.b = glass;
//   this.c = payment;
// }
// for (let i = 0; i < 5; i++) {
//   members.push(new kdt(i + 1, "hello", "bye"));
// }
// console.log(members);
// const ahyeon = new kdt("슈크림", "김치", "소주");
// console.log(typeof ahyeon);

const studentList = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연",
];

function createId(name) {
  console.log(name);
}
createId(studentList);
function profile(name, age, address) {
  if (
    typeof name === "string" &&
    typeof age === "number" &&
    typeof address === "string"
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

let soo = new profile("김근수", 27, "세종특별자치시");
console.log(soo);
