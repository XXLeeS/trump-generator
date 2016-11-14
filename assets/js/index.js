var mask_length = $('#main .image-container .mask').length;
var now = 1;
$('#main .prev').click(function(){
    $('#main .image-container .mask:nth-child(' + now + ')').css("visibility", "hidden");
    now = calc_prev(now);
    $('#main .image-container .mask:nth-child(' + now + ')').css("visibility", "visible");
});
$('#main .next').click(function(){
    $('#main .image-container .mask:nth-child(' + now + ')').css("visibility", "hidden");
    now = calc_next(now);
    $('#main .image-container .mask:nth-child(' + now + ')').css("visibility", "visible");
});

function calc_prev(i){
    if(i == 1){
        return mask_length;
    }
    else{
        return (i - 1);
    }
}
function calc_next(i){
    if(i == mask_length){
        return 1;
    }
    else{
        return (i + 1)
    }
}

$('#main #text_input').keyup(function(){
    $('#main .image-container #text').text($(this).val()); 
})