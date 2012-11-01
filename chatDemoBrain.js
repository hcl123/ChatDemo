var socket = io.connect("http://localhost:8080");  
  
socket.on('quit', function (data) {  
        status('Client ' + data.cid + ' quits!');  
    });  
  
socket.on('join', function (data) {  
        status('Client ' + data.cid + ' joins!');  
    });  
  
socket.on('broadcast', function (data) {  
        $('#thread').append($('<div>').html('client ' + data.cid + ' says:<br/>' + data.w));  
    });  
  
function chat() {  
    var words = $('#text').val();  
    if($.trim(words)) {  
        socket.emit('chat', {w: words});  
        $('#text').val('');  
    }  
}  
  
function status(w) {  
    $('#status').html(w);  
}  
  
function initialize() {  
    $(document).delegate('textarea', 'keydown', function (evt) {  
            //console.info(evt.keyCode);  
            if(evt.keyCode == 13 && evt.ctrlKey) {  
                $('#send').focus().click();  
            }  
        });  
}  