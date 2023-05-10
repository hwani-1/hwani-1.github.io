import java.util.Random;

public class GroupData {
    private PersonData personData;
    private String[][] groups = new String[8][4];

    public GroupData() {
        this.personData = new PersonData();
    }

    public void makeGroup() {
        Random random = new Random();

        for (int i = 0; i < 8; i++) {
            //한국인 1명을 추가
            groups[i][0]=personData.getKorean().get(random.nextInt(personData.getKorean().size()));
            personData.getKorean().remove(groups[i][0]);
            //일본인 1학년 1명을 추가
            if (personData.getInter1st().size()!=0) {
                groups[i][1]=personData.getInter1st().get(random.nextInt(personData.getInter1st().size()));
                personData.getInter1st().remove(groups[i][1]);
            } else {
                groups[i][1]=personData.getInterExcept1st().get(random.nextInt(personData.getInterExcept1st().size()));
                personData.getInterExcept1st().remove(groups[i][1]);
            }
            //일본인 3학년 1명을 추가
            if (personData.getInterExcept1st().size()!=0) {
                groups[i][2]=personData.getInterExcept1st().get(random.nextInt(personData.getInterExcept1st().size()));
                personData.getInterExcept1st().remove(groups[i][2]);
            }
            //일본인 1학년 / 3학년  1명 추가
            if (personData.getInterExcept1st().size()==0 || personData.getInter1st().size()!=0) {
                groups[i][3]=personData.getInter1st().get(random.nextInt(personData.getInter1st().size()));
                personData.getInter1st().remove(groups[i][3]);
            } else if(personData.getInter1st().size()==0 || personData.getInterExcept1st().size()!=0) {
                groups[i][3]=personData.getInterExcept1st().get(random.nextInt(personData.getInterExcept1st().size()));
                personData.getInterExcept1st().remove(groups[i][3]);
            }
        }
    }

    public void showGroupInfo() {
        for (int i = 0; i < 8; i++) {
            System.out.println("그룹"+ (i+1) + "의 정보입니다");
            System.out.printf("%s, %s, %s, %s\n", groups[i][0],groups[i][1],groups[i][2],groups[i][3]);
            System.out.println("");
        }    
    }

    public static void main(String[] args) {
        GroupData groupData = new GroupData();
        groupData.makeGroup();
        groupData.showGroupInfo();
    }
}
