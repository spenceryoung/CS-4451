var eLbl = document.getElementById('encrypt-lbl'),
    dLbl = document.getElementById('decrypt-lbl'),
    encrypted, decrypted;

document.getElementById('encrypt-btn').addEventListener('click', function() {
    encrypted = CryptoJS.AES.encrypt(document.getElementById('encrypt-tbx').value,
        "Secret Passphrase");
    eLbl.textContent = encrypted;
    document.getElementById('decrypt-tbx').value = encrypted;
}, false);

document.getElementById('decrypt-btn').addEventListener('click', function() {
    decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    dLbl.textContent = decrypted.toString(CryptoJS.enc.Utf8);
}, false);