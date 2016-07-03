var encrypted, decrypted;

document.getElementById('encrypt-btn').addEventListener('click', function() {
    encrypted = CryptoJS.AES.encrypt(document.getElementById('encrypt-tbx').value,
        "Secret Passphrase");
    document.getElementById('encrypt-lbl').textContent = encrypted;
    document.getElementById('decrypt-tbx').value = encrypted;
}, false);

document.getElementById('decrypt-btn').addEventListener('click', function() {
    decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    document.getElementById('decrypt-lbl').textContent = decrypted.toString(CryptoJS.enc.Utf8);
}, false);