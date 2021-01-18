class AuthUser {
    constructor(userId, name, email, password, phoneNumber,profileImage) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.profileImage = profileImage;
    }
}

export default AuthUser;