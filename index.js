
$('#js-shopping-list-form').submit(function(event) {
    //prevent default behavior once the form is submitted
    event.preventDefault();
    //declare the shopping-list-entry 'newItem'
    var newItem = $('#shopping-list-entry').val();
    //clear text box
    $('#shopping-list-entry').val('');
    //create a copy of the last ".container ul li"
    var copyContainer = $(".container ul li").last().clone();
    //append the copy of the container to (inside?) ".container ul"
    var addContainer = $(".container ul ").append(copyContainer);
    //find the ".shopping item" and set the text of the newItem into the last ".container ul li"
    var addItem = $('.container ul li').last().find('.shopping-item').text(newItem);
});

//toggle checked
$('.container').on('click', '.shopping-item-toggle', function() {
    $(this).parent().prev().toggleClass('shopping-item__checked');
})


//delete items
$('.container ').on('click', '.shopping-item-delete', function() {
    $(this).parent().parent().remove();
})

