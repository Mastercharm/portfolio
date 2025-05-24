$('#personal').click(() => {
    $('.work-prof').css("display", "none");
    $('.work-design').css("display", "none");
    $('.work-per').css("display", "grid");
    $('#personal').addClass("active");
    $('#professional').removeClass("active");
    $('#design').removeClass("active");
})
$('#design').click(() => {
    $('.work-design').css("display", "grid");
    $('.work-prof').css("display", "none");
    $('.work-per').css("display", "none");
    $('#design').addClass("active");
    $('#personal').removeClass("active");
    $('#professional').removeClass("active");

})
$('#professional').click(() => {
    $('.work-prof').css("display", "grid");
    $('.work-design').css("display", "none");
    $('.work-per').css("display", "none");
    $('#personal').removeClass("active");
    $('#professional').addClass("active");
    $('#design').removeClass("active");

})

$('#edu').click(() => {
    $('#edu-data').css("display", "block");
    $('#skill-data').css("display", "none");
    $('#certi-data').css("display", "none");
    $('#edu').addClass("active");
    $('#skill').removeClass("active");
    $('#certi').removeClass("active");
})

$('#skill').click(() => {
    $('#edu-data').css("display", "none");
    $('#skill-data').css("display", "block");
    $('#certi-data').css("display", "none");
    $('#edu').removeClass("active");
    $('#skill').addClass("active");
    $('#certi').removeClass("active");
})

$('#certi').click(() => {
    $('#edu-data').css("display", "none");
    $('#skill-data').css("display", "none");
    $('#certi-data').css("display", "block");
    $('#edu').removeClass("active");
    $('#skill').removeClass("active");
    $('#certi').addClass("active");
})

$('#mds').click(() => {
    $('#mds-card').css("display", "flex");
})

$('#close').click(() => {
    $('#project-section').css("display", "none");
})



