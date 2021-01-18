import Comment from '../Modals/Comment';
const user1 = {
    userId:'0',
    name:'Mark',
    profileImage:'https://randomuser.me/api/portraits/men/31.jpg',
}
const user2 = {
    userId:'1',
    name:'Zukerberg',
    profileImage:'https://randomuser.me/api/portraits/men/32.jpg',
}

export const CommentData = [
    new Comment('1','Lorem Ipsum is simply dummy text of the printing and typesetting industry','12 pm',user1),
    new Comment('2','Lorem Ipsum is simply dummy text of the printing and typesetting industry','12 am',user2),
    new Comment('3','Lorem Ipsum is simply dummy text of the printing and typesetting industry','3 pm',user2),
    new Comment('4','Lorem Ipsum is simply dummy text of the printing and typesetting industry','3 am',user2),
    new Comment('5','Lorem Ipsum is simply dummy text of the printing and typesetting industry','5 pm',user1),
    new Comment('6','Lorem Ipsum is simply dummy text of the printing and typesetting industry','5 am',user2)
]