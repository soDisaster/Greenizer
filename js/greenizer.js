//
// $('#facebook').data('textToggle', 5).hover(function (e) {
//     var that = $(this);
//
//     // get the text from data attribute
//     var textToSet = that.data('textToggle');
//
//     // save the current text so it can be reverted
//     that.data('textToggle', that.text());
//
//     // set the new text
//     that.text(textToSet);
// }, function (e) {
//     var that = $(this);
//
//     // get the text from data attribute
//     var textToSet = that.data('textToggle');
//
//     // save the current text so it can be reverted
//     that.data('textToggle', that.text());
//
//     // set the new text
//     that.text(textToSet);
// });

$('#facebook').hover(
    function() {
        $('#facebook span').fadeOut(1000, function() {
            $('#facebook span').text(" Prochainement");
        })
        $('#facebook span').text(" Prochainement");

    }, function() {
        $('#facebook span').text(" Facebook");
    }
);

$('#twitter').hover(
    function() {
        $('#twitter span').text(" Prochainement");

    }, function() {
        $('#twitter span').text(" Twitter");
    }
);
