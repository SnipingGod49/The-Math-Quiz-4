var player1_name = localStorage.getItem("Player1")

var player2_name = localStorage.getItem("Player2")

console.log(player1_name)

console.log(player2_name)

var player1_score = 0

var player2_score = 0

document.getElementById("player1_name").innerHTML = player1_name + " : ";

document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = " Question Turn: " + player1_name;

document.getElementById("player_answer").innerHTML =  "Answer Turn:" + player2_name;

function send()
{
    number1 = document.getElementById("number1").value;
    number1 = document.getElementById("number1").value;
    actual_answer = parsInt(number1) * parseInt(number2)

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br>button class='btn btn-info' onclick'check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    console.log("row")
}