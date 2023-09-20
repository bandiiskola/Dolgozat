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
    var elsotulaj = 0
    var ujrendszam = 0
    var regirendszam = 0
    var otajto = 0
    var haromajto = 0
    var nepszerubb = ""

    var s = ""
    s += "<table style='width:75%'><tr><td rowspan='2' colspan='3'>Üzemanyag szerint</td><td colspan='2'>Benzin</td><td colspan='2'>Dízel</td><td colspan='2'>Elektromos</td></tr>"
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i].tipus == "benzin") {
            benzin++
        } else if (tomb[i].tipus == "dizel") {
            dizel++
        } else {
            elektromos++
        }
        if (tomb[i].elsotulaj == true) {
            elsotulaj++
        }
        if (tomb[i].rendszam.length == 8) {
            ujrendszam++
        } else {
            regirendszam++
        }
        if (tomb[i].ajtokszama == "otajto") {
            otajto++
        } else {
            haromajto++
        }
        if (otajto > haromajto) {
            nepszerubb = "5 Ajtó"
        } else if (otajto < haromajto) {
            nepszerubb = "3 Ajtó"
        } else {
            nepszerubb = "Nem eldönthető"
        }
    }
    s += "<tr><td colspan='2'>" + benzin + "</td><td colspan='2'>" + dizel + "</td><td colspan='2'>" + elektromos + "</td></tr>"
    s += "<tr><td colspan='3'>Első tulajdonosok százalékos aránya</td><td colspan='6'>" + Math.round((elsotulaj / tomb.length) * 100, 2) + "%</td></tr>"
    s += "<tr><td colspan='3'>Rendszámok megoszlása</td><td colspan='3'>Régi rendszám</td><td colspan='3'>Új rendszám</td></tr>"
    s += "<tr><td colspan='3'></td><td colspan='3'>" + regirendszam + "</td><td colspan='3'>" + ujrendszam + "</td></tr>"
    s += "<tr><td colspan='3'>Melyik a népszerűbb?</td><td colspan='6'>" + nepszerubb + "</td></tr></table>"

    document.getElementById("beiras").innerHTML = s
}