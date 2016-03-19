$(this).live("paste", function(e) {
    alert(e.clipboardData); // [object Clipboard]
});
// $.ajax({
//    url:'http://stackoverflow.com/questions/18938180/how-to-get-the-html-of-a-div-on-another-page-with-jquery-ajax',
//    type:'GET',
//    success: function(data){
//        console.log(data);
//    }
// });