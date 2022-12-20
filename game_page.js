player1_name=localStorage.getItem ("player1_name");
player2_name=localStorage.getItem ("player2_name");

player1_score=0;
player2_score=0;

document.getElementsById("player1_name").innerhtml=player1_name+":";
document.getElementsById("player2_name").innerhtml=player2_name+":";

document.getElementsById("player1_score").innerhtml=player1_score;
document.getElementsById("player2_score").innerhtml=player2_score;

document.getElementsById("player_question").innerhtml="Turno para preguntar: -"+player1_name;
document.getElementsById("player_answer").innerhtml="Turno para responder: -"+player2_name;

function send()
{
    get_word=document.getElementsById("word").value;
    word=get_word.toLowerCase();
    console.log("Palabra en minusculas ="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1=word.length-2;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);







    
    
































































}