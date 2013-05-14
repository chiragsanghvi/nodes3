//console.log("In User code");
Appacitive.session.environment = 'sandbox';
//Appacitive.facebook.initialize('123832777803421','16a2ce403a4736ac5c6beda507aeb243');
//Appacitive.facebook.accessToken = 'BAACEdEose0cBAAEZCcszReCiNd7kGIaQYjq3eWJzYeyNjGKZAcCri9ZChuWXxESolQolyhgZAjJJ1WrRZB06gUY033dtQ3yZCTkMqMhFJVPZAUqy7odeZCO1KCcoj50hUHyB69IGqefWiEZCAfAfLnRlJkB57ZBzDROCc5Yc31T0tGtt7YCLtmRE86DhZBD0nMHgf3wVp1aIvfJ4fZAcppgCileTJb2ZBn3OQwKwFOZAPXrinuGwZDZD';

//console.log(Appacitive.facebook.accessToken);
/*var startTime = new Date().getTime();
Appacitive.facebook.getCurrentUserInfo(function(res){
    res.totalTime = new Date().getTime() - startTime;
    completed(res);
},function(res){
    res.totalTime = new Date().getTime() - startTime;
    completed(res);
})*/

/*Appacitive.facebook.FB.api('/chirag.sanghvi.12',function(err,res){
    completed(res);
})*/

/*var _sessionOptions = {}


var eventId = Appacitive.eventManager.subscribe('session.success', function () {
    console.log("Session created");
    Appacitive.eventManager.unsubscribe(eventId);*/



    /*var rooms = new Appacitive.ArticleCollection({ schema: 'room' });
    rooms.getQuery().extendOptions({
        pageSize: 20,
        pageNumber:1
    });
    rooms.fetch(function() {
        var rArticles = rooms.getAll();
        console.log(rArticles.length);
        message.rooms = [];
        for(var i = 0 ; i < rArticles.length ; i = i + 1 ){
           message.rooms.push(rArticles[i].getArticle());
        }
        completed(message);
    },function(){
        message.rooms=[];
        completed(message);
    });*/
/*});

Appacitive.eventManager.subscribe('session.error',function(){
   completed(message);
});

Appacitive.session.create(_sessionOptions);*/

completed(message);
