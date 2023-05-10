class GroupData {
  constructor() {
    this.personData = new PersonData();
    this.groups = new Array(8).fill(null).map(() => new Array(4).fill(null));
  }

  makeGroup() {
    const korean = this.personData.korean.slice();
    const inter1st = this.personData.inter1st.slice();
    const interExcept1st = this.personData.interExcept1st.slice();
    const random = new Random();

    for (let i = 0; i < 8; i++) {
      // 한국인 1명을 추가
      this.groups[i][0] = korean.splice(random.nextInt(korean.length), 1)[0];

      // 일본인 1학년 1명을 추가
      if (inter1st.length !== 0) {
        this.groups[i][1] = inter1st.splice(random.nextInt(inter1st.length), 1)[0];
      } else {
        this.groups[i][1] = interExcept1st.splice(random.nextInt(interExcept1st.length), 1)[0];
      }

      // 일본인 3학년 1명을 추가
      if (interExcept1st.length !== 0) {
        this.groups[i][2] = interExcept1st.splice(random.nextInt(interExcept1st.length), 1)[0];
      }

      // 일본인 1학년 / 3학년 1명 추가
      if (interExcept1st.length === 0 || inter1st.length !== 0) {
        this.groups[i][3] = inter1st.splice(random.nextInt(inter1st.length), 1)[0];
      } else if (inter1st.length === 0 || interExcept1st.length !== 0) {
        this.groups[i][3] = interExcept1st.splice(random.nextInt(interExcept1st.length), 1)[0];
      }
    }
  }

  showGroupInfo() {
    for (let i = 0; i < 8; i++) {
      console.log(`그룹 ${i+1}의 정보입니다`);
      console.log(`${this.groups[i][0]}, ${this.groups[i][1]}, ${this.groups[i][2]}, ${this.groups[i][3]}\n`);
    }
  }
}

class PersonData {
  constructor() {
    this.korean = ["김원서", "배예람", "임재현", "유정빈", "지원", "김나혜", "김윤수", "박예신"];
    this.inter1st = ["あだち ゆずき", "いけだ ゆづき", "いしづか りえ", "おかもと みおう", "おはら ゆき", "かみもと ゆう", "かわばた てるみ", "くりた かおり","こばやし ゆうき","なかじま ゆうや","はじ こより","やまだ ひな","やまの なな"];
    this.interExcept1st = ["おばた ひろこ", "きっかわ みどり", "さいごう めぐみ", "すえつぐ まこ", "たにぐち ひろか", "つむら ゆき", "はんのうら せりな", "ふくしま とうこ","まつだ かんな","みやた ひびき","ので なつき"];
  }
}

function main() {
  const groupData = new GroupData();
  groupData.makeGroup();
  groupData.showGroupInfo();
}

main();
