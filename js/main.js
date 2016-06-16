var eValue = document.getElementById('encrypt-tbx'),
    dValue = document.getElementById('decrypt-tbx'),
    eBtn = document.getElementById('encrypt-btn'),
    dBtn = document.getElementById('decrypt-btn'),
    encrypted, decrypted;


eBtn.addEventListener('click', function() {
    encrypted = CryptoJS.AES.encrypt(eValue.value, "Secret Passphrase");
    dValue.value = encrypted;
}, false);

eBtn.addEventListener('click', function() {
    //decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
}, false);






// document.getElementById("demo1").innerHTML = encrypted;
// document.getElementById("demo2").innerHTML = decrypted;
// document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);