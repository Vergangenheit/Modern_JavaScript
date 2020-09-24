//adding new chat documents
//setting up real-time listeners to get new chats
//updating the username
//updating the room

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        //store a reference to the chat collection
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            created_at: firebase.firestore.Timestamp.fromDate(now),
            message: message,
            room: this.room,
            username: this.username
        };
        //save the chat documents
        const response = await this.chats.add(chat);
        return response;
    }
    //our real-time listener
    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        //update the ui
                        callback(change.doc.data());
                    }
                    
                });
            });
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}
