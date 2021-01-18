class Post {
    constructor(postId, postText, date, fileName, fileType, fileUrl,likes,comments,shares, user) {
        this.postId = postId;
        this.postText = postText;
        this.date = date;
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileUrl = fileUrl;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.user = user
    }
}

export default Post;