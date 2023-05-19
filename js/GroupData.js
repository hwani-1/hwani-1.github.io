class PersonData {
  constructor() {
    this.inter1st = [];
    this.interExcept1st = [];
    this.korean = [];

    // 국제학부 1학년
    this.addPerson(1, "あだち ゆずき");
    this.addPerson(1, "いけだ ゆづき");
    this.addPerson(1, "いしづか りえ");
    this.addPerson(1, "おかもと みおう");
    this.addPerson(1, "おはら ゆき");
    this.addPerson(1, "かみもと ゆう");
    this.addPerson(1, "かわばた てるみ");
    this.addPerson(1, "くりた かおり");
    this.addPerson(1, "こばやし ゆうき");
    this.addPerson(1, "なかじま ゆうや");
    this.addPerson(1, "はじ こより");
    this.addPerson(1, "やまだ ひな");
    this.addPerson(1, "やまの なな");
    // 국제학부 3학년,4학년
    this.addPerson("x", "おばた ひろこ");
    this.addPerson("x", "きっかわ みどり");
    this.addPerson("x", "さいごう めぐみ");
    this.addPerson("x", "すえつぐ まこ");
    this.addPerson("x", "たにぐち ひろか");
    this.addPerson("x", "つむら ゆき");
    this.addPerson("x", "はんのうら せりな");
    this.addPerson("x", "ふくしま とうこ");
    this.addPerson("x", "まつだ かんな");
    this.addPerson("x", "みやた ひびき");
    this.addPerson("x", "ので なつき");
    // 한국인 유학생
    this.addPerson("k", "김원서");
    this.addPerson("k", "배예람");
    this.addPerson("k", "임재현");
    this.addPerson("k", "유정빈");
    this.addPerson("k", "지원");
    this.addPerson("k", "조수빈");
    this.addPerson("k", "허레미");
    this.addPerson("k", "이동혁");
    this.addPerson("k", "김가윤");
    this.addPerson("k", "이찬호");
    this.addPerson("k", "김윤수");
    this.addPerson("k", "박예신");
  }

  addPerson(x, name) {
    switch (x) {
      case 1:
        this.inter1st.push(name);
        break;
      case "x":
        this.interExcept1st.push(name);
        break;
      case "k":
        this.korean.push(name);
        break;
      default:
        break;
    }
  }
}

class GroupData {
  constructor() {
    this.personData = new PersonData();
    this.groups = new Array(8).fill(null).map(() => new Array(5).fill(null));
    this.ohhh = 0
    this.leftPeople = [];
  }

  makeGroup() {
    const random = Math.random;

    for (let i = 0; i < 8; i++) {
      // 한국인 1명을 추가
      this.groups[i][0] = this.personData.korean.splice(random.nextInt(this.personData.korean.length), 1)[0];

      // 일본인 1학년 1명을 추가
      this.groups[i][1] = this.personData.inter1st.splice(random.nextInt(this.personData.inter1st.length), 1)[0];

      // 일본인 3학년 1명을 추가
      this.groups[i][2] = this.personData.interExcept1st.splice(random.nextInt(this.personData.interExcept1st.length), 1)[0];
    }

    this.leftPeople.push(...this.personData.inter1st);
    this.leftPeople.push(...this.personData.interExcept1st);

    // 추가된 한국인을 추가
    while (this.personData.korean.length !== 0) {
      this.groups[this.ohhh][4] = this.personData.korean.splice(random.nextInt(this.personData.korean.length), 1)[0];
      this.ohhh++;
    }

    this.ohhh = 0;

    while (this.leftPeople.length !== 0) {
      this.groups[this.ohhh][3] = this.leftPeople.splice(random.nextInt(this.leftPeople.length), 1)[0];
      this.ohhh++;
    }
  }

  generateGroups() {
    this.makeGroup();

    const groupInfo = document.getElementById("group-info");

    for (let i = 0; i < 8; i++) {
      const groupDiv = document.createElement("div");
      groupDiv.classList.add("group");
      groupDiv.innerHTML = `<p>그룹 ${i + 1}의 정보입니다</p>`;
      
      if (this.groups[i][4] === null) {
        groupDiv.innerHTML += `<p>${this.groups[i][0]}, ${this.groups[i][1]}, ${this.groups[i][2]}, ${this.groups[i][3]}</p>`;
      } else {
        groupDiv.innerHTML += `<p>${this.groups[i][0]}, ${this.groups[i][4]}, ${this.groups[i][1]}, ${this.groups[i][2]}, ${this.groups[i][3]}</p>`;
      }

      groupInfo.appendChild(groupDiv);
    }
  }
}

const groupData = new GroupData();
groupData.generateGroups();
