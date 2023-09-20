var tomb = []

function tarol() {
    var x = ""
    if (document.getElementById("rendszam").value == "") {
        alert("Töltsd ki az adatokat!")
    } else {
        if (document.getElementById("otajto").checked) {
            x = "otajto"
        } else {
            x = "haromajto"
        }
        var obj = {
            rendszam: document.getElementById("rendszam").value,
            tipus: document.getElementById("type").value,
            elsotulaj: document.getElementById("elsotulaj").checked,
            ajtokszama: x

        }
        tomb.push(obj)
        document.getElementById("rendszam").value = ""
        document.getElementById("type").value = "benzin"
        document.getElementById("elsotulaj").checked = false
        document.getElementById("otajto").checked = true
        document.getElementById("rendszam").focus()
    }
    console.log(tomb)
}

function kiir() {

}