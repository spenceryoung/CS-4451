var eValue = document.getElementById('encrypt-tbx'),
    dValue = document.getElementById('decrypt-tbx'),
    eBtn = document.getElementById('encrypt-btn'),
    dBtn = document.getElementById('decrypt-btn'),
    eLbl = document.getElementById('encrypt-lbl'),
    dLbl = document.getElementById('decrypt-lbl'),
    encrypted, decrypted;


eBtn.addEventListener('click', function() {
    encrypted = CryptoJS.AES.encrypt(eValue.value, "Secret Passphrase");
    dValue.value = encrypted;
    eLbl.textContent = encrypted;
}, false);

dBtn.addEventListener('click', function() {
    decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    dLbl.textContent = decrypted.toString(CryptoJS.enc.Utf8);
}, false);