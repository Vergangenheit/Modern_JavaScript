
const blogs = [
    {title : 'why mac & cheese rules', likes: 30},
    {title : '10 things to make with marmite', likes: 5}
];

let user = {
    name: 'crystal',
    age : 30,
    email : 'lorenzo.ostano@gmail.com',
    location : 'Antibes',
    blogs : [
        {title : 'why mac & cheese rules', likes: 30},
        {title : '10 things to make with marmite', likes: 5}
    ],
    login(){
        console.log('the user logged in');
    },
    logBlogs(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();