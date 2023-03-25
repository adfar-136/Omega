const EventEmitter = require("events")
const eventEmitter = new EventEmitter()
//register
eventEmitter.on("myEvent",(msg)=>{
    console.log(msg)
})
eventEmitter.emit("myEvent","Hello Adfar")
eventEmitter.emit("myEvent","Hello Adfar")
eventEmitter.emit("myEvent","Hello Adfar")
eventEmitter.emit("myEvent","Hello Adfar")