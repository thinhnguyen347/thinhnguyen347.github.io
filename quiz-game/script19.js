const quiz = [
    {
        question: "Môn gì càng thắng lại càng thua?",
        choices: ["Cờ vua", "Cờ tướng", "Đạp xe", "Đu dây"],
        ans: "Đạp xe",
    },

    {
        question: "What is the sweet food made by bees?",
        choices: ["Chocolate", "Pollen", "Honey", "Flower"],
        ans: "Honey",
    },

    {
        question: "Có ba quả táo trên bàn và bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?",
        choices: ["2", "0", "1", "3"],
        ans: "2",
    },

    {
        question: "On a common ladybug, what color are its spots?",
        choices: ["Red", "Black", "Yellow", "White"],
        ans: "Black",
    },

    {
        question: "Bạn đang ở trong một cuộc đua và bạn vừa vượt qua người thứ nhì. Vậy bây giờ bạn đang ở vị trí nào trong đoàn đua ấy?",
        choices: ["Ba", "Nhất", "Tư", "Nhì"],
        ans: "Nhì",
    },

    {
        question: "Cầu gì biết chạy?",
        choices: ["Cầu lông", "Cầu vồng", "Cầu thủ", "Cầu mong"],
        ans: "Cầu thủ",
    },

    {
        question: "Do you know an animal that cannot jump?",
        choices: ["Grasshopper", "Frog", "Kangaroo", "Elephant"],
        ans: "Elephant",
    },

    {
        question: "Con mèo nào cực kỳ sợ chuột?",
        choices: ["Mèo Doraemon", "Mèo Tom", "Mèo Kitty", "Mèo mướp"],
        ans: "Mèo Doraemon",
    },

    {
        question: "How many dots on a dice?",
        choices: [19, 20, 21, 22],
        ans: 21,
    },

    {
        question: "Which month of the year has the least number of days?",
        choices: ['December', 'August', 'February', 'May'],
        ans: 'February',
    }
]



// Lệnh điền câu hỏi và các phương án
let currentQuestion = 0;
let score = 0;

function Question(currentQuestion) {

    $("#question").text(quiz[currentQuestion].question);

    $(".choice1").text(quiz[currentQuestion].choices[0]);
    $(".choice2").text(quiz[currentQuestion].choices[1]);
    $(".choice3").text(quiz[currentQuestion].choices[2]);
    $(".choice4").text(quiz[currentQuestion].choices[3]);
    $(".number").text(`Câu hỏi ${currentQuestion + 1} / ${quiz.length}`);

    $(".next").addClass('hide');
    // Tính điểm
    Score(currentQuestion);
    //disable

}

//Ấn nút start để hiện câu hỏi đầu tiên

$("#start").click(function () {

    $(".container").addClass('hide');
    $(".container1").removeClass('hide');
    Question(currentQuestion);
    $('.subscore').text(`Điểm: ${score}`);
    $(".finish").addClass('hide');
    $(".next").addClass('hide');

    bgAudio();

});

// Ấn nút next

$(".next").click(function () {

    currentQuestion++;
    Question(currentQuestion);

    $('.btn').removeClass('gray');
    $('.btn').removeAttr('disabled');
    $(".finish").addClass('hide');
})

// Tổng kết

$(".finish").click(function () {
    $(".container").addClass('hide');
    $(".container1").addClass('hide');
    $(".container2").removeClass("hide");
    $(".total-score").text(`Tổng điểm: ${score}`);

})

// Tính điểm

function Score(currentQuestion) {

    $('.btn').click((e) => {


        let choice = $(e.target).text();

        if (choice == quiz[currentQuestion].ans) {
            score += 10;
            Correct();
        }

        if (choice != quiz[currentQuestion].ans) {
            score += 0;
            Wrong();
        }

        $('.subscore').text(`Điểm: ${score}`);

        $('.btn').attr('disabled', 'disabled');
        $(e.target).siblings().addClass('gray');

        $(".next").removeClass('hide');

        if (currentQuestion >= quiz.length - 1) {
            $(".finish").removeClass('hide');
            $('.next').addClass('hide');
        }
    })


}


//Restart

$('.restart').click(function () {
    window.location.reload()
})


let x = document.getElementById("correct");
function Correct() {
    x.play();
    y.pause()
}

let y = document.getElementById("wrong");
function Wrong() {
    y.play();
    x.pause()
}

let z = document.getElementById("bg-audio");
function bgAudio() {
    z.play();
}







