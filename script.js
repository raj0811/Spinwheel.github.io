var count = 0
console.log('ppp');

var msgText = document.getElementById('msgText')

function hideMsgBox() {
    var msgBox = document.getElementById('msgBox');
    msgBox.style.display = "none";
  }
  

function myfunction() {

    if (count === 0) {
        
        document.getElementById('box').style.transform = "rotate(3700deg)"
        var element = document.getElementById('mainbox')
        element.classList.remove('animate');
        setTimeout(function () {
            element.classList.add('animate')
            msgText.innerText="Opps try plzz Again...!  "
            var msgBox = document.getElementById('msgBox');
            msgBox.style.display = "flex";
        }, 5000)
        count++
        console.log(count);
        
    } else {
        console.log(count);
        var x = 1024;
        var y = 9999;

        var deg = Math.floor(Math.random() * (x - y)) + y;
        console.log(deg);
        document.getElementById('box').style.transform = "rotate(" + deg + "deg)"
        var element = document.getElementById('mainbox')
        element.classList.remove('animate');
        setTimeout(function () {
            element.classList.add('animate')
            msgText.innerText="Congratulation You won the Gift Card"
            var msgBox = document.getElementById('msgBox');
            msgBox.style.display = "flex";
        }, 5000)

        // var msgBox = document.getElementById('msgBox');
        // msgBox.style.display = "flex";
    }

}