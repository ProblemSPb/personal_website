function newTyped() {
}

$(function () {
    $("#typed").typed({
        // Dynamic strings
        strings: ["HR Digital", "project management", "automation", "data visualization", "HR analytics", "development"],

        typeSpeed: 90, backDelay: 700, contentType: "html", loop: !0, resetCallback: function () {
            newTyped()
        }
    })
});