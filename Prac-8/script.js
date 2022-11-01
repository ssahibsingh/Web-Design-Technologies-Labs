xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "details.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

document.getElementById("name").innerHTML =
    xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
document.getElementById("about").innerHTML =
    xmlDoc.getElementsByTagName("about")[0].childNodes[0].nodeValue;
document.getElementById("email").innerHTML =
    xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
document.getElementById("rollno").innerHTML =
    xmlDoc.getElementsByTagName("rollno")[0].childNodes[0].nodeValue;
document.getElementById("institutename").innerHTML =
    xmlDoc.getElementsByTagName("institute")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue
document.getElementById("institutecity").innerHTML =
    xmlDoc.getElementsByTagName("institute")[0].getElementsByTagName("city")[0].childNodes[0].nodeValue
document.getElementById("institutestate").innerHTML =
    xmlDoc.getElementsByTagName("institute")[0].getElementsByTagName("state")[0].childNodes[0].nodeValue