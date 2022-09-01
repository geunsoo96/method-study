// method: 객체의 속성인 함수, 두가지 종류의 메소드가 있음
// 객체 인스턴스에 의해 수행되는 태스크에 내장된 인스턴스 메소드
// 오브젝트 생성자에서 직접 호출되는 태스크인 정적 메소드

// forEach()
// 주어진 함수를 배열 요소 각각에 대해 실행함.
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));

// push()
// 배열의 끝에 하나 이상의 요소를 추가, 배열의 새로운 길이를 반환
const animals = ["pig", "goat", "sheep", "dog", "cat"];
const count = animals.push("cow");
console.log(count);
// 4가 추가로 찍힘.--> 몇번째에 추가로 들어가는지 출력됨
// 만약에 배열이 기존에 다섯개 있고 push를 사용하면 6으로 찍힘.
console.log(animals);
// 배열 맨 마지막에 'cow'가 추가됨

// pop()
// 배열 마지막 요소를 제거, 그 요소를 반환
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
// 마지막 요소인 tomato(토마토)가 출력됨.
console.log(plants);
// 토마토가 빠진 배열이 출력됨.
plants.pop();
// 마지막에서 두번째였던 kale 제외시킴
console.log(plants);
// kale을 재외한 세개의 배열만 출력.

// shift()
// 배열에서 첫번째 요소를 제거, 제거된 요소를 반환.
// 배열의 길이를 변하게 함
const arrayShift = [1, 2, 3];
const firstElement = arrayShift.shift();
console.log(arrayShift);
// 1을 제외하고 2,3만 출력됨
console.log(firstElement);
// 1이 출력됨.

// unshift()
// 새로운 요소를 배열의 맨 앞쪽에 추가, 새로운 길이 반환
const arrayUnshift = [1, 2, 3];
console.log(arrayUnshift.unshift(4, 5));
// 추가한 후 배열의 갯수가 출력 --> 5
console.log(arrayUnshift);
// 앞에서부터 4,5가 추가 되어 [4,5,1,2,3]으로 출력

// indexOf()
// 배열에서 지정된 요소를 찾을 수 있는 찻번째 인덱스를 반환, 존재하지 않으면 -1반환.
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
// 0번째를 기준으로 1번째라서 1로 출력
console.log(beasts.indexOf("camel", 3));
// 3번째는 "duck", "camel"은 2번째이기 때문에 존재하지 않아서 -1 출력
console.log(beasts.indexOf("esse"));
// 존재하지 않으면 -1

// lastindexOf()
// 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환. 요소가 존재하지 않으면 -1을 반환(indexOf와 공통점)
// 배열 탐색은 fromindex에서 시작하여 뒤로 진행
const indexAnimals = ["dodo", "tiger", "penguin", "dodo"];
console.log(indexAnimals.lastIndexOf("dodo"));
// 0번째 기준으로 공통된 두개의 "dodo"중에 마지막 인덱스를 뜻하는 3 출력
console.log(indexAnimals.lastIndexOf("tiger"));
// tiger은 1번째을 가리키고 있음-->1출력
console.log(indexAnimals.lastIndexOf("cat"));
// 존재하지 않기 때문에 -1출력

// splice()
// 배열의 기존요소를 삭제 or 교체하거나 새 요소를 추가하여 배열의 내용을 변경함.
const months = ["jan", "march", "april", "june"];
// months.splice(인덱스 번호, 몇개를 바꾸는지, 삽입하는 배열)

let a = months.splice(0, 3);
// (0부터, 3개를 잘라서 a라는 변수에 할당)
months.splice(1, 2, "good");
console.log(months);
console.table(months);

// slice()
// 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환함.
// 원본 배열은 바뀌지않음.
const animalsSlice = ["ant", "bison", "camel", "duck", "elephant"];
// slice(start,end);
console.log(animalsSlice.slice(2));
console.log(animalsSlice.slice(1, 3));
console.log(animalsSlice.slice(2, 5));
// 기본적으로 end는 미포함이지만 end값이 배열의 길이보다 크다면 배열의 끝까지 추출

// from()
// 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable objext)를 얕게 복사-->새로운 객체 생성
console.log(Array.from("foo"));
// ["f", "o", "o"] 라고 출력
console.log(
  Array.from([1, 2, 3], function (x) {
    return x + x;
  })
);
// 배열 요소를 매개변수에 대입 --> 순서대로 출력

// isArray()
// 인자가 Array인지 판별함
Array.isArray([1, 2, 3]); /* true */
Array.isArray({ foo: 123 }); /* false */
Array.isArray("geunsoo"); /* false */

// at()
// 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환, 양수 음수 모두 지정 가능
// 음수값의 경우 배열의 뒤에서부터 인덱스를 사용.
const arrayAt = [5, 12, 8, 130, 44];
let index = 2;
console.log(
  `Using an index of ${index} the item returned is ${arrayAt.at(index)}`
);
// 2라는 값을 삽입하여 그에 맞는 값인 8로 반환
index = -2;
console.log(`Using an index of ${index} item returned is ${arrayAt.at(index)}`);
// 끝배열부터 -2라서 130이 반환

// concat()
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환함.
// 기존배열은 변경X
// 추가된 새로운 배열을 반환
const concat1 = ["a", "b", "c"];
const concat2 = ["d", "e", "f"];
const concat3 = concat1.concat(concat2);
console.log(concat3);
// 두개의 배열이 합쳐져서 [abcdef]로 출력

// filter()
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
// 글자수가 여섯글자보다 많은것들 반환.
console.log(result);

// findIndex()
// 주어진 판별 함수를 만족하는 배열의 첫번째 요소에 대한 인덱스를 반환
// 만족하는 요소가 없으면 -1 반환
const arrayNumber = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// 판별함수에서 13보다 작은 배열 반환 요구
console.log(arrayNumber.findIndex(isLargeNumber));
// 13보다 작은 요소는 3개라서 3이 출력

// includes()
// 배열의 특정 요소를 포함하고 있는지 판별
const number = [1, 2, 3];
console.log(number.includes(2));
// 배열에 2라는 요소가 포함 되어 있으므로 true라고 출력
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// 배열에 cat이라는 요소가 포함 되어 있으므로 true
console.log(pets.includes("pig"));
// pig라는 요소는 포함 되어 있지 않으므로 false라고 출력

// map()
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const arrMap = [1, 4, 9, 16];
const map1 = arrMap.map((x) => x * 2);
console.log(map1);
// 배열의 각 요소마다 매개 변수가 적용되고 그 공식이 삽입돼서 출력
// ex)요소 4가 매개변수 x에 적용되어 작성되어 있는 공식으로 출력됨
// 출력된 값 --> [2, 8, 18, 32]

// reduce()
// 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행, 하나와 결과값을 반환
const arrReduce = [1, 22, 31, 4];
const initialvalue = 0;
const sumWithInitial = arrReduce.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialvalue
);
// arrReduce에 있는 배열의 요소들을 전부 더한 값이 나오는 함수
console.log(sumWithInitial);

// sort()
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
const monthsSort = ["march", "jan", "april", "fed", "bad", "dec"];
monthsSort.sort();
console.log(monthsSort);
// 앞자리 알파벳 순서대로 출력됨
// [ 'april', 'bad', 'dec', 'fed', 'jan', 'march' ]
const numberSort = [1000000, 987, 23049, 70, 888];
numberSort.sort();
console.log(numberSort);
// 앞자리 숫자 순서대로 출력
// [ 1000000, 23049, 70, 888, 987 ]
