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

function Question(a) {
    $("#question").text(quiz[a].question);
    for (let i = 0; i < 4; i++) {
        $("#choice1").text(quiz[a].choices[0]);
        $("#choice2").text(quiz[a].choices[1]);
        $("#choice3").text(quiz[a].choices[2]);
        $("#choice4").text(quiz[a].choices[3]);
        $("#number").text(`Question ${a + 1}`);
    }
}

//Ấn nút start để hiện câu hỏi đầu tiên

$("#start").click(function () {
    $(".container").hide("slow");
    $(".container1").show("slow", Question(0));
});

// Ấn nút next

let count = 1;
$("#next").click(function () {
    Question(count);
    count++;
})

// 

// Hiện đáp án đúng sau khi chọn & Tính điểm


let score = 0;
function Answer(x) {
    Array.from($(".btn"))
    console.log(score)
}

// random màu nền nút