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
    this.addPerson("k", "김나혜");
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

  getInter1st() {
    return this.inter1st;
  }

  getInterExcept1st() {
    return this.interExcept1st;
  }

  getKorean() {
    return this.korean;
  }
}
