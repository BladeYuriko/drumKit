var buttons = document.querySelectorAll(".drum");

for (i=0; i<buttons.length; i++){
buttons[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleClick)
function handleClick(e){
var buttonInnerHTML = this.innerHTML;
var buttonPressInnerHTML = e.key;
switch(buttonInnerHTML || buttonPressInnerHTML){
case "w":
    alert("W button is working.");
    var tom1 = new Audio("Sounds/tom-1.mp3");
    tom1.play();
    break

  console.log(buttonInnerHTML);

  case "a":
      alert("A button is working.");
      var tom2 = new Audio("Sounds/tom-2.mp3");
      tom2.play();
      break
    console.log(buttonInnerHTML);

    case "s":
        alert("S button is working.");
        var tom3 = new Audio("Sounds/tom-3.mp3");
        tom3.play();
        break
      console.log(buttonInnerHTML);

      case "d":
          alert("D button is working.");
          var tom4 = new Audio("Sounds/tom-4.mp3");
          tom4.play();
          break
        console.log(buttonInnerHTML);

        case "j":
            alert("j button is working.");
            var crash = new Audio("Sounds/crash.mp3");
            crash.play();
            break
          console.log(buttonInnerHTML);

          case "k":
              alert("k button is working.");
              var kickbass = new Audio("Sounds/kick-bass.mp3");
              kickbass.play();
              break
            console.log(buttonInnerHTML);

            case "L":
                alert("L button is working.");
                var snare = new Audio("Sounds/snare.mp3");
                snare.play();
                break
              console.log(buttonInnerHTML);
default:
console.log(buttonInnerHTML);
};

}
