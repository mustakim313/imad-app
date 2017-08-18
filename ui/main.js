

var button= document.getElementById('counter');
var counter=0;
button.onclick= function (){
    var request = new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readystate===XmLhttpRequest.DONE){
            if(request.status==200){
                var counter =request.ResponseText;
                var span = document.getElementById('count');
span.innerHTML= counter.toString();
            }
        }
    }

;
request.open('GET','http://mustakimkureshi313.imad.hasura-app.io/countr',true);
request.send(null);

};

