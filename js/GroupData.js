class GroupData {
  constructor() {
    this.personData = new PersonData();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateGroups() {
  const random = this.getRandomInt;

  const groups = new Array(8).fill().map(() => new Array(5));

  for (let i = 0; i < 8; i++) {
    // 한국인 1명을 추가
    groups[i][0] = this.personData.korean.splice(random(0, this.personData.korean.length - 1), 1)[0];

    // 일본인 1학년 1명을 추가
    groups[i][1] = this.personData.inter1st.splice(random(0, this.personData.inter1st.length - 1), 1)[0];

    // 일본인 3학년 1명을 추가
    groups[i][2] = this.personData.interExcept1st.splice(
      random(0, this.personData.interExcept1st.length - 1),
      1
    )[0];
  }

  const leftPeople = [...this.personData.inter1st, ...this.personData.interExcept1st];

  // 추가된 한국인을 추가
  let ohhh = 0;
  while (this.personData.korean.length !== 0) {
    groups[ohhh][4] = this.personData.korean.splice(random(0, this.personData.korean.length - 1), 1)[0];
    ohhh++;
  }

  ohhh = 0;

  while (leftPeople.length !== 0) {
    groups[ohhh][3] = leftPeople.splice(random(0, leftPeople.length - 1), 1)[0];
    ohhh++;
  }

  this.showGroupInfo(groups);
}

  showGroupInfo(groups) {
    const groupInfoElement = document.getElementById('group-info');
    groupInfoElement.innerHTML = '';

    for (let i = 0; i < 8; i++) {
      const groupElement = document.createElement('div');
      groupElement.classList.add('group');
      groupElement.innerHTML = `그룹 ${i + 1}의 정보입니다<br>`;

      if (groups[i][4] === undefined) {
        groupElement.innerHTML += `${groups[i][0]}, ${groups[i][1]}, ${groups[i][2]}, ${groups[i][3]}`;
      } else {
        groupElement.innerHTML += `${groups[i][0]}, ${groups[i][4]}, ${groups[i][1]}, ${groups[i][2]}, ${groups[i][3]}`;
      }

      groupInfoElement.appendChild(groupElement);
    }
  }
}

class PersonData {
  constructor() {
    this.inter1st = [
      'あだち ゆずき',
      'いけだ ゆづき',
      'いしづか りえ',
      'おかもと みおう',
      'おはら ゆき',
      'かみもと ゆう',
      'かわばた てるみ',
      'くりた かおり',
      'こばやし ゆうき',
      'なかじま ゆうや',
      'はじ こより',
      'やまだ ひな',
      'やまの なな'
    ];

    this.interExcept1st = [
      'おばた ひろこ',
      'きっかわ みどり',
      'さいごう めぐみ',
      'すえつぐ まこ',
      'たにぐち ひろか',
      'つむら ゆき',
      'はんのうら せりな',
      'ふくしま とうこ',
      'まつだ かんな',
      'みやた ひびき',
      'ので なつき'
    ];

    this.korean = [
      '김원서',
      '배예람',
      '임재현',
      '유정빈',
      '지원',
      '조수빈',
      '허레미',
      '이동혁',
      '김가윤',
      '이찬호',
      '김윤수',
      '박예신'
    ];
  }
}

const groupData = new GroupData();

function generateGroups() {
  groupData.generateGroups();
}

