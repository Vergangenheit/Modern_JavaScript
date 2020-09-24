// render chat templates to the DOM
// clear the list of chats(when the room changes)

class ChatUI{
    constructor(list){
        // the list is where we outputting the template to
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ``;
    }
    render(data){
        //this method created an html template for every document that we get back and output that to the DOM
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        const html = `<li class="list-group-item">
                        <span class="username">${data.username}</span>
                        <span class="message">${data.message}</span>
                        <div class="time">${when}</div>
                      </li>`
                      ;

        this.list.innerHTML += html;

    }
}

