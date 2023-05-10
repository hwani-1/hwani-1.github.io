class GroupData {
    constructor() {
        this.personData = new PersonData();
        this.groups = new Array(8).fill().map(() => new Array(4));
    }

    makeGroup() {
        const random = new Random();

        for (let i = 0; i < 8; i++) {
            //한국인 1명을 추가
            this.groups[i][0] = this.personData.getKorean()[random.nextInt(this.personData.getKorean().length)];
            this.personData.getKorean().splice(this.personData.getKorean().indexOf(this.groups[i][0]), 1);
            //일본인 1학년 1명을 추가
            if (this.personData.getInter1st().length != 0) {
                this.groups[i][1] = this.personData.getInter1st()[random.nextInt(this.personData.getInter1st().length)];
                this.personData.getInter1st().splice(this.personData.getInter1st().indexOf(this.groups[i][1]), 1);
            } else {
                this.groups[i][1] = this.personData.getInterExcept1st()[random.nextInt(this.personData.getInterExcept1st().length)];
                this.personData.getInterExcept1st().splice(this.personData.getInterExcept1st().indexOf(this.groups[i][1]), 1);
            }
            //일본인 3학년 1명을 추가
            if (this.personData.getInterExcept1st().length != 0) {
                this.groups[i][2] = this.personData.getInterExcept1st()[random.nextInt(this.personData.getInterExcept1st().length)];
                this.personData.getInterExcept1st().splice(this.personData.getInterExcept1st().indexOf(this.groups[i][2]), 1);
            }
            //일본인 1학년 / 3학년  1명 추가
            if (this.personData.getInterExcept1st().length == 0 || this.personData.getInter1st().length != 0) {
                this.groups[i][3] = this.personData.getInter1st()[random.nextInt(this.personData.getInter1st().length)];
                this.personData.getInter1st().splice(this.personData.getInter1st().indexOf(this.groups[i][3]), 1);
            } else if (this.personData.getInter1st().length == 0 || this.personData.getInterExcept1st().length != 0) {
                this.groups[i][3] = this.personData.getInterExcept1st()[random.nextInt(this.personData.getInterExcept1st().length)];
                this.personData.getInterExcept1st().splice(this.personData.getInterExcept1st().indexOf(this.groups[i][3]), 1);
            }
        }
    }

    showGroupInfo() {
        for (let i = 0; i < 8; i++) {
            console.log(`그룹 ${i + 1}의 정보입니다`);
            console.log(`${this.groups[i][0]}, ${this.groups[i][1]}, ${this.groups[i][2]}, ${this.groups[i][3]}`);
            console.log("");
        }
    }

    static main(args) {
        const groupData = new GroupData();
        groupData.makeGroup();
        groupData.showGroupInfo();
    }
}
