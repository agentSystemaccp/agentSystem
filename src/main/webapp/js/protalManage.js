var path=$("#path").val();

function getProtalList(pageNo) {
    $("#pageNo").val(pageNo);
    document.getElementById("protalForm").submit();
}

$(".viewprotal").on("click",function () {
    var obj = $(this);
    window.location.href = path+"/protal/queryProtal?protalId="+obj.attr("protalId")+"&cid=0"+"&type=view";
})

$(".modifprotal").on("click",function () {
    var obj = $(this);
    window.location.href = path+"/protal/queryProtal?protalId="+obj.attr("protalId")+"&cid=0"+"&type=modify";
})