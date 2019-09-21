var popUpBox = (function(msg){

    var popUpBoxInit = function(){
        var $popUp = $('#popup-box');
        if($popUp.length){
            return $popUp;
        }else{ // single creation of HTML element
            return $.get("popup-box/popup.php",function(html){
                $(document.body).append(html);
            });
        }
    };

    var popUpBoxApply = function(){

        var $popUp = $('#popup-box');
        $popUp.show();
        $popUp.find('.popup-header').html(msg.head);
        if(msg.body){
            $popUp.find('.popup-body').html(msg.body);
        }
        if(msg.btn){
            $popUp.find('.btn').html(msg.btn);
        }
        if(msg.action){
            $popUp.find('.btn').attr('onclick',msg.action);
        }
        if(msg.customCss){
            $popUp.find('.popup-content').css(msg.customCss);
        }
        if(msg.customBodyCss){
            $popUp.find('.popup-body').css(msg.customBodyCss);
        }
        if(msg.customClass){
            $popUp.addClass(msg.customClass);
        }
        if(msg.bottom){
            $popUp.find('.popup-bottom').html(msg.bottom);
        }
        $popUp.find('.close, .btn').click(function(){
            $popUp.hide();
        });
    };

    $.when( popUpBoxInit() ).then(function(){
        popUpBoxApply();
    });

});