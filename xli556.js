const showHome = () => {
    document.getElementById("Home").style.display = "block";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";

    document.getElementById("logoHome").style.backgroundColor = "lightGrey";
    document.getElementById("logoProducts").style.backgroundColor = "transparent";
    document.getElementById("logoNews").style.backgroundColor = "transparent";
    document.getElementById("logoLocation").style.backgroundColor = "transparent";
    document.getElementById("logoRegister").style.backgroundColor = "transparent";
    document.getElementById("logoGB").style.backgroundColor = "transparent";
}

const showProducts = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "block";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";

    document.getElementById("logoHome").style.backgroundColor = "transparent";
    document.getElementById("logoProducts").style.backgroundColor = "lightGrey";
    document.getElementById("logoNews").style.backgroundColor = "transparent";
    document.getElementById("logoLocation").style.backgroundColor = "transparent";
    document.getElementById("logoRegister").style.backgroundColor = "transparent";
    document.getElementById("logoGB").style.backgroundColor = "transparent";
}

const showNews = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "block";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";

    document.getElementById("logoHome").style.backgroundColor = "transparent";
    document.getElementById("logoProducts").style.backgroundColor = "transparent";
    document.getElementById("logoNews").style.backgroundColor = "lightGrey";
    document.getElementById("logoLocation").style.backgroundColor = "transparent";
    document.getElementById("logoRegister").style.backgroundColor = "transparent";
    document.getElementById("logoGB").style.backgroundColor = "transparent";
}

const showLocation = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "block";
    document.getElementById("Register").style.display = "none";
    document.getElementById("GuestBook").style.display = "none";

    document.getElementById("logoHome").style.backgroundColor = "transparent";
    document.getElementById("logoProducts").style.backgroundColor = "transparent";
    document.getElementById("logoNews").style.backgroundColor = "transparent";
    document.getElementById("logoLocation").style.backgroundColor = "lightGrey";
    document.getElementById("logoRegister").style.backgroundColor = "transparent";
    document.getElementById("logoGB").style.backgroundColor = "transparent";
}

const showRegister = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Register").style.display = "block";
    document.getElementById("GuestBook").style.display = "none";

    document.getElementById("logoHome").style.backgroundColor = "transparent";
    document.getElementById("logoProducts").style.backgroundColor = "transparent";
    document.getElementById("logoNews").style.backgroundColor = "transparent";
    document.getElementById("logoLocation").style.backgroundColor = "transparent";
    document.getElementById("logoRegister").style.backgroundColor = "lightGrey";
    document.getElementById("logoGB").style.backgroundColor = "transparent";
}

const showGuestBook = () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("News").style.display = "none";
    document.getElementById("Location").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("GuestBook").style.display = "block";

    document.getElementById("logoHome").style.backgroundColor = "transparent";
    document.getElementById("logoProducts").style.backgroundColor = "transparent";
    document.getElementById("logoNews").style.backgroundColor = "transparent";
    document.getElementById("logoLocation").style.backgroundColor = "transparent";
    document.getElementById("logoRegister").style.backgroundColor = "transparent";
    document.getElementById("logoGB").style.backgroundColor = "lightGrey";
}

// Once the Web Page refreshes, it will automatically go to Home Section
window.onload = showHome;


// News page information
const showNewsInfo = (news) => {
    let ourNews = document.getElementById("ourNews");
    let newscontent = "";
    
    const addRecord = (record) => {
        newscontent += "<img width=30% src=" + record.enclosureField.urlField + ">" + "<br>" + "<a href=" + record.linkField + ">" + record.titleField + "</a>" + "<br>" + record.pubDateField + "<br>" + record.descriptionField + "<hr><br>";
    }
    news.forEach(addRecord);
    ourNews.innerHTML = newscontent;
}

const getNewsInfo = () => {
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/news', {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then( (d) => showNewsInfo(d) );
}

getNewsInfo();



// Location page information
const showLocationInfo = (info) => {
    let shop = document.getElementById("shopLocation");
    let arr = info.split('\n');
    let arrNew = [];
    let dic = {};
    for (let i=0; i<arr.length; i++) {
        if (arr[i].includes("TEL:") || arr[i].includes("TEL;") || arr[i].includes("ADR:") || arr[i].includes("ADR;") || arr[i].includes("EMAIL:") || arr[i].includes("EMAIL;")) {
            arrNew += [arr[i]];
            let lastIndex = arr[i].lastIndexOf(":");
            let s1 = arr[i].substring(0, lastIndex);
            let s2 = arr[i].substring(lastIndex + 1);
            dic[s1] = s2;
        }
    }
    let locationContent = "";
    let arr1 = Object.keys(dic);

    let tel = "";
    let adr = "";
    let email = "";
    
    if (arr1[0].includes("TEL")) {
        tel = dic[arr1[0]];
    } else if (arr1[1].includes("TEL")) {
        tel = dic[arr1[1]];
    } else if (arr1[2].includes("TEL")) {
        tel = dic[arr1[2]];
    }
    
    if (arr1[0].includes("ADR")) {
        adr = dic[arr1[0]];
    } else if (arr1[1].includes("ADR")) {
        adr = dic[arr1[1]];
    } else if (arr1[2].includes("ADR")) {
        adr = dic[arr1[2]];
    }

    if (arr1[0].includes("EMAIL")) {
        email = dic[arr1[0]];
    } else if (arr1[1].includes("EMAIL")) {
        email = dic[arr1[1]];
    } else if (arr1[2].includes("EMAIL")) {
        email = dic[arr1[2]];
    }

    locationContent += "<a href=tel:" + tel + ">"+ tel + "</a>" + "<br>" + "<a href=mailto:" + email + ">"+ email + "</a><br>" + adr.replace(/;/g, "") + ""; 

    shop.innerHTML = locationContent;
}

const getLocationInfo = () => {
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/vcard', {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then( (d) => showLocationInfo(d) );
}

getLocationInfo();



// Products page information
const showProInfo = (pro) => {
    const Table = document.getElementById("ourTable");
    let tableContent = "";
    const addRecord = (record) => {
        tableContent += "<div id=MessageDiv title='Click the X on the top right corner to close the box'><div id=close onclick='hide();'>&#10008;</div><div id=divInText></div></div>"
        tableContent += "" + "<img class='imgDiv' src = http://localhost:8188/DairyService.svc/itemimg?id=" + record.ItemId + "><div class='ProDiv'>" + record.Title + "<br>" + record.Price + "<br>" + record.Origin + "<br><br>";
        tableContent += "<button onclick='ClickMessage(" + record.ItemId + ");'id='buttonDiv'>buy now</button>";
        tableContent += "</div>" + "<hr width=75%>";
    } 
    pro.forEach(addRecord);
    Table.innerHTML = tableContent;
}

const getProInfo = () => {
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/items', {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((d) => showProInfo(d));
}

const searchProInfo = () => {
    let searchInfoString = "";
    searchInfoString += document.getElementById("searchbar").value;
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/search?term=' + searchInfoString + '', {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((d) => showProInfo(d));
}

// function that show/hide the div
const show = () => {
    let timetableInfo = document.getElementById("MessageDiv");
    timetableInfo.style.display = "block";
}

const hide = () => {
    let timetableInfo = document.getElementById("MessageDiv");
    timetableInfo.style.display = "none";
}

// function ClickMessage
const ClickMessage = (productId) => {
    
    let user = document.getElementById("USER").innerHTML;
    let password = document.getElementById("PASSWORD").innerHTML;
    if ((user === null) || (user === "") || (user === undefined)){
        showRegister();  
    }
    else {
        show();
        const xhr = new XMLHttpRequest();
        const uri = "http://localhost:8189/Service.svc/buy?id=" + productId;
        xhr.open("GET", uri, true, user, password);
        xhr.withCredentials = true;
        xhr.onload = () => {
            const messageInfo = document.getElementById("divInText");
            messageInfo.innerHTML = xhr.responseText;
        }
        xhr.send(null);
    }
    
}

getProInfo();


// Register page information
const showRegisterPart = () => {
    document.getElementById("RegisterDiv").style.display = "block";
    document.getElementById("LoginDiv").style.display = "none";

    document.getElementById("RegisterPart").style.backgroundColor = "lightGrey";
    document.getElementById("LoginPart").style.backgroundColor = "transparent";
}

const showLoginPart = () => {
    document.getElementById("RegisterDiv").style.display = "none";
    document.getElementById("LoginDiv").style.display = "block";

    document.getElementById("RegisterPart").style.backgroundColor = "transparent";
    document.getElementById("LoginPart").style.backgroundColor = "lightGrey";
}

showRegisterPart();

// function PostRegister
const PostRegister = (e) => {
    e.preventDefault;
    
    let userName = document.getElementById("RegisterUserInput").value;
    let Pass = document.getElementById("RegisterPassInput").value;
    let Add = document.getElementById("RegisterAddInput").value;
    let params = {
        "Address": Add,
        "Name": userName,
        "Password": Pass
    };
    
    const xhr = new XMLHttpRequest();
    const uri = "http://localhost:8188/DairyService.svc/register";
    xhr.open("POST", uri, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    
    xhr.send(JSON.stringify(params));
    xhr.onload = () => {
        //alert("status: " + xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("You have successfully registered. Status: " + xhr.status);
        }
        else {
            alert("Failed to register. Status: " + xhr.status);
        }
    }
}

// function Login
const Login = (e) => {
    e.preventDefault;

    let user = document.getElementById("RegisterUserInputU").value;
    let password = document.getElementById("RegisterPassInputP").value;
    const xhr = new XMLHttpRequest();
    const uri = "http://localhost:8189/Service.svc/user";
    xhr.open("GET", uri, true, user, password);
    xhr.withCredentials = true;
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Successfully log in");
            document.getElementById("USER").innerHTML = user;
            document.getElementById("PASSWORD").innerHTML = password;
            document.getElementById("loginAndlogout").innerHTML = user + " (<span id=logOutPart onclick='LogOut()'>logOut</span>)";
        }
        else {
            alert("Failed to log in");
        }
        
    }
    xhr.send(null);
}

// function LogOut
const LogOut = () => {
    let user = null;
    let password = null;
    const xhr = new XMLHttpRequest();
    const uri = "http://localhost:8189/Service.svc/user";
    xhr.open("GET", uri, true, user, password);
    xhr.withCredentials = true;
    xhr.onload = () => {
        alert("Successfully log out");
        document.getElementById("USER").innerHTML = user;
        document.getElementById("PASSWORD").innerHTML = password;
        document.getElementById("loginAndlogout").innerHTML = "<span style='cursor:pointer;' onclick='showRegister();'>LogIn</span>";
    }
    xhr.send(null);
}


// Guest Book page information - Post Comment
const postCommentInfo = (e) => {
    e.preventDefault;
    let comment = document.getElementById("comment").value;
    let namePart = document.getElementById("name").value;
    const fetchPromise = fetch('http://localhost:8188/DairyService.svc/comment?name=' + namePart + '', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(comment),
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then( (data) => document.getElementById('iframeComment').src += '');
}
