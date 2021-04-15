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
    $("#number").text(`Question ${currentQuestion + 1}`);

    // Tính điểm

    console.log(quiz[currentQuestion].choices)
    console.log(quiz[currentQuestion].choices[3])
    console.log(quiz[currentQuestion].ans)
    Score(currentQuestion)
}

//Ấn nút start để hiện câu hỏi đầu tiên

$("#start").click(function () {
    $(".container").hide("slow");
    $(".container1").show("slow", Question(currentQuestion));
});

// Ấn nút next


$("#next").click(function () {
    Question(currentQuestion);
    currentQuestion++;
})


// Hiện đáp án đúng sau khi chọn & Tính điểm

let score = 0;
function Score(currentQuestion) {

    for (let i=1;i<=5;i++){

        let choice= $(`#choice${i}`);

        choice.click(function () {

            if (choice.innerText == quiz[currentQuestion].ans) {
                score += 25;
                choice.css("background-color", "green");
            } else {
                score += 0;
                choice.css("background-color", "gray");
            }
            console.log(score);
        })

    }
}

// random màu nền nút

