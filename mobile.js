class Mobile {
    battery;
    status;

    constructor(battery, status) {
        this.battery = battery;
        this.status = status;
    }

    statusMobile() {
        if (this.status) {
            alert("Mobile Is ON");
        } else {
            alert("Mobile Is OFF");
        }
    }

    toggleMobile() {
        if (this.status) {
            status = false;
            return this.status = false;
        } else {
            status = true;
            return this.status = true;
        }
    }

    chargeMobile() {
        if (phone === "1") {
            this.battery = batteryNokia++;
            alert("Pin Nokia " + batteryNokia + "%");
        } else {
            this.battery = batteryIphone++;
            alert("Pin Iphone " + batteryIphone + "%");
        }
    }

    sendMessageN() {
        ibN = document.getElementById("textN").value;
        inboxIphone.push(ibN);
        sttN.push(countN++);
        alert("Đã Gửi");
        this.battery = batteryNokia--;
        alert(batteryNokia);
    }

    sendMessageI() {
        ibI = document.getElementById("textI").value;
        inboxNokia.push(ibI);
        sttI.push(countI++);
        alert("Đã Gửi");
        this.battery = batteryIphone--;
        alert(batteryIphone);
    }

    messengerPhoneN() {
        sout = "<table>"
        sout = sout + "<tr>";
        sout = sout + "<td>" + "Tin nhắn Đã Gửi" + "</td>";
        sout = sout + "<td>" + "Nội Dung Tin Nhắn" + "</td>";
        sout = sout + "</tr>";
        for (let i = 0; i < inboxIphone.length; i++) {
            sout = sout + "<tr>";
            sout = sout + "<td>" + sttN[i] + "</td>";
            sout = sout + "<td>" + inboxIphone[i] + "</td>";
            sout = sout + "</tr>";
        }
        sout = sout + "</table>";
        this.battery = batteryNokia--;
        alert(batteryNokia);
        return sendNokiaFake.innerHTML = sout;

    }

    messengerPhoneI() {
        sout = "<table>"
        sout = sout + "<tr>";
        sout = sout + "<td>" + "Tin nhắn Đã Gửi" + "</td>";
        sout = sout + "<td>" + "Nội Dung Tin Nhắn" + "</td>";
        sout = sout + "</tr>";
        for (let i = 0; i < inboxNokia.length; i++) {
            sout = sout + "<tr>";
            sout = sout + "<td>" + sttN[i] + "</td>";
            sout = sout + "<td>" + inboxNokia[i] + "</td>";
            sout = sout + "</tr>";
        }
        sout = sout + "</table>";
        this.battery = batteryIphone--;
        alert(batteryIphone);
        return sendIphoneFake.innerHTML = sout;
    }

    inboxMessengerNokia() {
        sout = "<table>"
        sout = sout + "<tr>";
        sout = sout + "<td>" + "Tin nhắn từ NOKIA" + "</td>";
        sout = sout + "<td>" + "Nội Dung Tin Nhắn" + "</td>";
        sout = sout + "</tr>";
        for (let i = 0; i < inboxIphone.length; i++) {
            sout = sout + "<tr>";
            sout = sout + "<td>" + sttN[i] + "</td>";
            sout = sout + "<td>" + inboxIphone[i] + "</td>";
            sout = sout + "</tr>";
        }
        sout = sout + "</table>";
        this.battery = batteryNokia--;
        alert(batteryNokia);
        return resultIphone.innerHTML = sout;
    }

    inboxMessengerIphone() {
        sout = "<table>"
        sout = sout + "<tr>";
        sout = sout + "<td>" + "Tin nhắn từ IPHONE" + "</td>";
        sout = sout + "<td>" + "Nội Dung Tin Nhắn" + "</td>";
        sout = sout + "</tr>";
        for (let i = 0; i < inboxNokia.length; i++) {
            sout = sout + "<tr>";
            sout = sout + "<td>" + sttI[i] + "</td>";
            sout = sout + "<td>" + inboxNokia[i] + "</td>";
            sout = sout + "</tr>";
        }
        sout = sout + "</table>";
        this.battery = batteryIphone--;
        alert(batteryIphone);
        return resultNokia.innerHTML = sout;
    }
}


let phone;
let statusMobile = new Mobile();
let mobileNokia;
let mobileIphone;
let status = false;
let kTra = statusMobile.toggleMobile(status);
if (kTra === true) {
    mobileNokia = new Mobile();
    mobileIphone = new Mobile();
}
let batteryNokia = 50;
let batteryIphone = 45;
let inboxNokia = [];
let inboxIphone = [];
let sttN = [];
let sttI = [];
let countN = 1;
let countI = 1;
let ibN;
let ibI;
let sout;
let resultNokia = document.getElementById("listNokia");
let resultIphone = document.getElementById("listIphone");
let sendNokiaFake = document.getElementById("listSendN");
let sendIphoneFake = document.getElementById("listSendI");


/* nokia fake */

function statusMobileNokia() {
    mobileNokia.statusMobile(status);
}

function toggleMobileNokia() {
    mobileNokia.toggleMobile(status);
}

function chargeMobileNokia() {
    phone = document.getElementById("nokia").value;
    mobileNokia.chargeMobile(batteryNokia);
}

function sendNokia() {
    mobileNokia.sendMessageN();
}

function inboxNokiaF() {
    mobileNokia.inboxMessengerNokia();
}

function messengerPhoneNF() {
    mobileNokia.messengerPhoneN();
}

/* iphone fake */

function statusMobileIphone() {
    mobileIphone.statusMobile(status);
}

function toggleMobileIphone() {
    mobileIphone.toggleMobile(status);
}

function chargeMobileIphone() {
    phone = document.getElementById("iphone").value;
    mobileIphone.chargeMobile(batteryIphone);
}

function sendIphone() {
    mobileIphone.sendMessageI();
}

function inboxIphoneF() {
    mobileIphone.inboxMessengerIphone()();
}

function messengerPhoneIF() {
    mobileNokia.messengerPhoneI();
}