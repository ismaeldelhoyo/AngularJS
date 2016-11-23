var Logger=(function(){
    //private variable to hold the only
    //instance of Logger that will exist
    var loggerInstance;

    //Create the logger instance
    var createLogger = function(){
        var _logWarning = function(message){
            //some complex work coud go here but
            //let's just fake it
            return message.toUpperCase();
        };
        return{
            logWarning: _logWarning
        };
    };
    return{
        //Here is the crucial part. First we check
        //to see if an instance already exists. if
        //it does, we return it. If it does not, we
        //create it.
        getInstance:function(){
            if(!loggerInstance){
                loggerInstance = createLogger();
            }
            return loggerInstance;
        }
    };
})();

//Notice how we use getInstance() and we
//do not use direct object creation with the
//new keyword

var myLogger = Logger.getInstance();
myLogger.logWarning("Memory use nearing maximum!");