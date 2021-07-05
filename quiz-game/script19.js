// const quiz = [
//     {
//         question: "Do you know a mammal that cannot jump?",
//         choices: ["Grasshopper", "Frog", "Kangaroo", "Elephant"],
//         ans: "Elephant",
//     },

//     {
//         question: "What is the fastest land animal?",
//         choices: ["Cheetah", "Lion", "Snake", "Butterfly"],
//         ans: "Cheetah",
//     },

//     {
//         question: "What is the sweet food made by bees?",
//         choices: ["Chocolate", "Pollen", "Honey", "Flower"],
//         ans: "Honey",
//     },

//     {
//         question: "On a common ladybug, what color are its spots?",
//         choices: ["Red", "Black", "Yellow", "White"],
//         ans: "Black",
//     },
// ]

const quiz = [
    {
        question: "Môn gì càng thắng lại càng thua?",
        choices: ["Cờ vua", "Cờ tướng", "Đạp xe", "Đu dây"],
        ans: "Đạp xe",
    },

    {
        question: "What is the fastest land animal?",
        choices: ["Cheetah", "Lion", "Snake", "Butterfly"],
        ans: "Cheetah",
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
    $(".number").text(`Question ${currentQuestion + 1} of ${quiz.length}`);

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
    $('.subscore').text(`Score: ${score}`);
    $(".finish").addClass('hide');
    $(".next").addClass('hide');

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
    $(".total-score").text(`Your score: ${score}`);

})

// Tính điểm

function Score(currentQuestion) {

    $('.btn').click((e) => {

        
        let choice = $(e.target).text();

        if (choice == quiz[currentQuestion].ans) {
            score += 25;
            Correct();
            
        } else {
            score += 0;
            Wrong();
        }  

        $('.subscore').text(`Score: ${score}`);

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
}

let y = document.getElementById("wrong");
function Wrong() {
    y.play();
}







