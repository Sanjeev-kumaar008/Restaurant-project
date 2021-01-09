$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function()
    {
        if ($("#carouselButton").children("span").hasClass('fa-pause'))
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play'))
        {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

});
$(document).ready(function(){
    $("#Loginbutton").click(function(){
        $("#loginModal").modal('toggle');
    });
    $("#logincrossSign").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#logincancel").click(function(){
        $("#loginModal").modal('hide');
    });
    $("#ReserveButton").click(function(){
        $("#secmodal").modal('toggle');
    });
    $("#ReservecrossSign").click(function(){
        $("#secmodal").modal('hide');
    });
    $("#cancel").click(function(){
        $("#secmodal").modal('hide');
    });
})
