//this is the file that joins everything together

//DOM query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updatemsg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    //extract message from chat
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

//add event listener to newname form
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    //call the method to update the name via chatroom method
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show and hide the update message
    updatemsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updatemsg.innerText=``, 3000);

});

//update the chatroom
rooms.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.tagName === "BUTTON"){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : "anon"

//class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//get the chats and render
chatroom.getChats(data => chatUI.render(data));