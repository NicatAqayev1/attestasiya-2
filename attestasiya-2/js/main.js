function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
let messagesArray = [];
class Message{
    constructor(author,sendTime,text){
        this.author = author;
        this.sendTime = sendTime;
        this.text = text;
        messagesArray.push(this);
    }
    toString = function(){ 
        var msgs = ""
        if(messagesArray.length === []){
            console.log("Hec bir mesaage elave edilmeyib .")
        }else{
            for(var item of messagesArray){
                msgs +=  item.sendTime + " " + item.author + " : " + item.text + "\n"
            }
            console.log(msgs)
        }
    }
}

class Messenger{
    constructor(messages){
        this.messages = messagesArray;
    }
    show_history = function(){
        for(var item of this.messages){
            item.toString();
            break;
        }
    }
    send = function(author, text){
        new Message(author,gettime(),text);
    }
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()