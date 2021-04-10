let questions = [
    {
        question: "What is the fastest land animal?",
        answer: ["cheetah", "lion", "snake", "kangaroo"],
        correctAns: "cheetah",
    },

    {
        question: "What is the sweet food made by bees?",
        answer: ["chocolate", "pollen", "honey", "flower"],
        correctAns: "honey",
    },

    {
        question: "On a common ladybug &#comma; what color are its spots?",
        answer: ["red", "black", "yellow", "white"],
        correctAns: "black",
    },
]
//Ấn nút start để hiện câu hỏi 1

$("#start").click(function () {
    $(".container").hide("slow");
    $(".container1").show("slow");
});



let count = 1
$("#next").click(function () {
    $(".hide").hide();
    count++;
});

// random màu nền nút