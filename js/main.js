var iInnput = document.getElementById('encrypt-tbx'),
    dInnput = document.getElementById('decrypt-tbx'),
    encrypted, decrypted;

document.getElementById('encrypt-btn').addEventListener('click', function() {
    if (iInnput.value == '') {
        alert("Please enter a message");
    } else {
        encrypted = CryptoJS.AES.encrypt(iInnput.value, "Secret Passphrase");
        document.getElementById('encrypt-lbl').textContent = encrypted;
        dInnput.value = encrypted;
    }
}, false);

document.getElementById('decrypt-btn').addEventListener('click', function() {
    if (dInnput.value == '') {
        alert("Please enter a message");
    } else {
        decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
        document.getElementById('decrypt-lbl').textContent = decrypted.toString(CryptoJS.enc.Utf8);
    }
}, false);