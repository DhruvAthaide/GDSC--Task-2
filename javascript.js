// This is to Change the color of H1 Tag to Red when Hovered Over!
function mouseover() {
    document.getElementById("task1").style.color = "red";
}
// This is to Change the color of the H1 Tag back to Dark Blue when the mouse is not hovering over the text!
function mouseout() {
    document.getElementById("task1").style.color = "darkblue";
}
// This is to add the two numbers provided by the user in the console
function Addition() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(num1 + num2);
}
// This is to subtract the two numbers provided by the user in the console
function Subtraction() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(num1 - num2);
}
// This is to multiply the two numbers provided by the user in the console
function Multiplication() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(num1 * num2);
}
// This is to divide the two numbers provided by the user in the console
function Division() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    console.log(num1 / num2);
}
// This is to print the number inputed by the user in the console
function ConsoleNumber() {
    num3 = document.getElementById("num3").value;
    console.log("Number is: ", num3);
}
// This is to Change the Text within the H1 Tag
function textmanipulator() {
    document.getElementById("textmanip").innerHTML = "This Text has been Manipulated!";
}
// This is to change the H1 Tag to H5 Tag
function textsize() {
    var el = document.querySelector('#textchanger');
    el.outerHTML = '<h5>' + el.innerHTML + '</h5>';
}
// This is to display Team Members in the console when the user inputs a value of 7
function teammember()
{
    var x=document.getElementById("team").value;
    const members = ["Dhruv Athaide, Shivam Badhopulu, Prasad Jambukar, Harsh Ghevariya"];
    if(x==7)
    {
        console.log(members);
    }
}