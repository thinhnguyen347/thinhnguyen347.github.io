let quiz = [
    {
        question: "Do you know a mammal that cannot jump?",
        choices: ["Grasshopper", "Frog", "Kangaroo", "Elephant"],
        ans: "Elephant",
    },

    {
        question: "What is the fastest land animal?",
        choices: ["Cheetah", "Lion", "Snake", "Butterfly"],
        ans: "Cheetah",
    },

    {
        question: "What is the sweet food made by bees?",
        choices: ["Chocolate", "Pollen", "Honey", "Flower"],
        ans: "Honey",
    },

    {
        question: "On a common ladybug, what color are its spots?",
        choices: ["Red", "Black", "Yellow", "White"],
        ans: "Black",
    },
]

// Lệnh điền câu hỏi và các phương án
let currentQuestion = 0;

function Question(currentQuestion) {

    $("#question").text(quiz[currentQuestion].question);

    $("#choice1").text(quiz[currentQuestion].choices[0]);
    $("#choice2").text(quiz[currentQuestion].choices[1]);
    $("#choice3").text(quiz[currentQuestion].choices[2]);
    $("#choice4").text(quiz[currentQuestion].choices[3]);
    $("#number").text(`Question ${currentQuestion + 1} of 4`);

    // Tính điểm
    
    //disable

}

//Ấn nút start để hiện câu hỏi đầu tiên

$("#start").click(function () {
    $(".container").hide("slow");
    $(".container1").show(Question(currentQuestion));
});

// Ấn nút next

$(".finish").hide();
$(".next").click(function () {
    currentQuestion++;
    if (currentQuestion <= 3) {
        Question(currentQuestion);
    }

    if (currentQuestion > 3) {
        $(".finish").show();
        $(this).hide();
    }
})

// Tổng kết

$(".finish").click(function () {
    $(".container").hide();
    $(".container1").hide();
    $(".container2").removeClass("hide");
})

// Tính điểm
let answer = [];
let score = 0;



    $each("button.choice").click(function(){
        answer.push($(this).text());
        console.log(answer)
    })

    // for (let i = 0; i < 4; i++) {
    //     if (answer[i] = quiz[i].ans) {
    //         score = + 25;
    //     } else {
    //         score = + 0;
    //     }
    // }

    // console.log(score);

    // function Score(currentQuestion) {}



