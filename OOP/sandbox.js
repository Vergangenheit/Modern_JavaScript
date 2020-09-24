// class User {
//     constructor(username, email){
//         //set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;

//     }
//     login(){
//         console.log(`${this.username} has logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} has logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has the score of ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User {
//     constructor(username, email, title){
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter((u) => u.username !== user.username);
//     }
// }

function User(username, email){
    this.username = username;
    this.email = email;
  }

User.prototype.login = function(){
    console.log(`${this.username} has just logged in`);
}

function Admin(username, email, title){
    User.call(this, username, email);
    this.title = title;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user){
    //delete user
    users = users.filter(u => u.username !== user.username);
}

const userOne = new User('mario', 'mario.ninja@nigga.com');
const userTwo = new User('luigi', 'luigi.ninja@nigga.com');
const admin = new Admin('shaun', 'shaun.ninja@nigga.com', 'admin');
console.log(admin);
//userOne.login();


