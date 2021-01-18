
class UserModel {
    constructor(id, name, profileImage, messages, time, read) {
        this.id = id;
        this.name = name;
        this.profileImage = profileImage;
        this.messages = messages;
        this.time = time;
        this.read = read;
    }
}

export default UserModel;
