

// $("#itemPage").css("fontWeight", "bold");



$("#itemPage").click(function () {
    $("#itemSection").css("display", "block");
    $("#itemPage").css("fontWeight", "bold");
});

$("#orderList").click(function () {
    $("#homeSection").css("display", "none");
    $("#orderSection").css("display", "none");
    $("#itemSection").css("display", "none");
    $("#customerSection").css("display", "none");
    $("#orderListSection").css("display", "block");
    $("#orderList").css("fontWeight", "bold");
    $("#orderPage").css("fontWeight", "normal");
    $("#customerPage").css("fontWeight", "normal");
    $("#itemPage").css("fontWeight", "normal");
    $("#homePage").css("fontWeight", "normal");
    loadAllOrders();
});
