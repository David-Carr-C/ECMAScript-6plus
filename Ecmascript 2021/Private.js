//Ecmascript 12+
class Message {
    show(val) {
        console.log(val);
    }
    #shownt(value) {
        console.log(value);
    }
}

const message = new Message();
message.show("Hi!");

message.shownt("Hi again!");//Error because it is private