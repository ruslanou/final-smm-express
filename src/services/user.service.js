class UserService {
    constructor(user, bloodType, department, absence, gender) {
        this.user = user;
        this.bloodType = bloodType;
        this.department = department;
        this.absence = absence;
        this.gender = gender;
    }

    async fetchAll() {
        try {
            const result = await this.user.findAll(
                {
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence]
                });
            // const result = await this.department.findAll({include: [{model: this.user, include: this.bloodType}]});
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }

    }

    async fetchById(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { id: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence]
                });
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }
    }

    async fetchByNfcId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { NFCid: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence]
                });
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }
    }

    async fetchByQrId(id) {
        try {
            const result = await this.user.findOne(
                {
                    where: { QRid: id },
                    include: [this.gender,
                    this.bloodType,
                    this.department,
                    this.absence]
                });
            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }
    }

    async fetchAbsence(date) {
        try {
            const result = await this.user.findAll(
                {
                    //TODO: finish the include
                    where: { absences: date },
                    // include: {mode: this.user, attributes: ['Name', '']},
                }
            );

            return result;
        } catch (e) {
            //add logger
            console.log(e);
            throw (e);
        }
    }
}

module.exports = UserService;