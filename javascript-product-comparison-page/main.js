for (var i = 1; i < college.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${college[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${college[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = college[a].image
        document.getElementById("est1").innerHTML = "PKR " + college[a].Established
        document.getElementById("nirf1").innerHTML = college[a].NIRF
        document.getElementById("aff1").innerHTML = college[a].Affiliated
        document.getElementById("course1").innerHTML = college[a].Courses
        document.getElementById("clevel1").innerHTML = college[a].Level
        document.getElementById("fee1").innerHTML = college[a].Fees
        document.getElementById("place1").innerHTML = college[a].Placement
        document.getElementById("exam1").innerHTML = college[a].Exams
        document.getElementById("rr1").innerHTML = college[a].Rating

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = college[0].image
        document.getElementById("est1").innerHTML = ""
        document.getElementById("nirf1").innerHTML = ""
        document.getElementById("aff1").innerHTML = ""
        document.getElementById("course1").innerHTML = ""
        document.getElementById("clevel1").innerHTML = ""
        document.getElementById("fee1").innerHTML = ""
        document.getElementById("place1").innerHTML = ""
        document.getElementById("exam1").innerHTML = ""
        document.getElementById("rr1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = college[a].image
        document.getElementById("est2").innerHTML = "PKR " + college[a].Established
        document.getElementById("nirf2").innerHTML = college[a].NIRF
        document.getElementById("aff2").innerHTML = college[a].Affiliated
        document.getElementById("course2").innerHTML = college[a].Courses
        document.getElementById("clevel2").innerHTML = college[a].Level
        document.getElementById("fee2").innerHTML = college[a].Fees
        document.getElementById("place2").innerHTML = college[a].Placement
        document.getElementById("exam2").innerHTML = college[a].Exams
        document.getElementById("rr2").innerHTML = college[a].Rating
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = college[0].image
        document.getElementById("est2").innerHTML = ""
        document.getElementById("nirf2").innerHTML = ""
        document.getElementById("aff2").innerHTML = ""
        document.getElementById("course2").innerHTML = ""
        document.getElementById("clevel2").innerHTML = ""
        document.getElementById("fee2").innerHTML = ""
        document.getElementById("place2").innerHTML = ""
        document.getElementById("exam2").innerHTML = ""
        document.getElementById("rr2").innerHTML = ""

    }
}