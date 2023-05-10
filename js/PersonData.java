import java.util.ArrayList;

public class PersonData {
    private ArrayList<String> inter1st = new ArrayList<>();
    private ArrayList<String> interExcept1st = new ArrayList<>();
    private ArrayList<String> korean = new ArrayList<>();

    public ArrayList<String> getInter1st() {
        return this.inter1st;
    }
    public ArrayList<String> getInterExcept1st() {
        return this.interExcept1st;
    }
    public ArrayList<String> getKorean() {
        return this.korean;
    }

    public void addPerson(int x, String name) {
        switch (x) {
            case 1:
                getInter1st().add(name);
                break;
            case 'x':
                getInterExcept1st().add(name);
                break;
            case 'k':
                getKorean().add(name);
            default:
                break;
        }
    }

    public PersonData(){
        //국제학부 1학년
        addPerson(1, "あだち ゆずき");
        addPerson(1, "いけだ ゆづき");
        addPerson(1, "いしづか りえ");
        addPerson(1, "おかもと みおう");
        addPerson(1, "おはら ゆき");
        addPerson(1, "かみもと ゆう");
        addPerson(1, "かわばた てるみ");
        addPerson(1, "くりた かおり");
        addPerson(1, "こばやし ゆうき");
        addPerson(1, "なかじま ゆうや");
        addPerson(1, "はじ こより");
        addPerson(1, "やまだ ひな");
        addPerson(1, "やまの なな");
        //국제학부 3학년,4학년
        addPerson('x', "おばた ひろこ");
        addPerson('x', "きっかわ みどり");
        addPerson('x', "さいごう めぐみ");
        addPerson('x', "すえつぐ まこ");
        addPerson('x', "たにぐち ひろか");
        addPerson('x', "つむら ゆき");
        addPerson('x', "はんのうら せりな");
        addPerson('x', "ふくしま とうこ");
        addPerson('x', "まつだ かんな");
        addPerson('x', "みやた ひびき");
        addPerson('x', "ので なつき");
        //한국인 유학생
        addPerson('k', "김원서");
        addPerson('k', "배예람");
        addPerson('k', "임재현");
        addPerson('k', "유정빈");
        addPerson('k', "지원");
        addPerson('k', "김나혜");
        addPerson('k', "김윤수");
        addPerson('k', "박예신");
    }
}
