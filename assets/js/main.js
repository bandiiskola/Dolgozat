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
    var benzin = 0
    var dizel = 0
    var elektromos = 0

    var s = ""
    s += "<table style='width:100%'><tr><td colspan='2' rowspan='3'>Üzemanyag szerint</td><td>Benzin</td><td>Dízel</td><td>Elektromos</td></tr>"
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i].tipus == "benzin") {
            benzin++
        } else if (tomb[i].tipus == "dizel") {
            dizel++
        } else {
            elektromos++
        }
    }
    s += "<tr><td>" + benzin + "</td><td>" + dizel + "</td><td>" + elektromos + "</td></tr>"
    

    document.getElementById("beiras").innerHTML = s
}