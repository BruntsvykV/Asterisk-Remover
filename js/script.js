const getCleanText = () => document.getElementById('asterisk').value.replaceAll("*", '');

handleRemoveAsterisk = () => {
    document.getElementById('clearTextOut').innerHTML = getCleanText();
};

handleCopyText = () => {
    document.getElementById('clearTextOut').innerHTML = getCleanText();
    navigator.clipboard.writeText(getCleanText());
};

handleResetText = () => {
    document.getElementById('asterisk').value = '';
    document.getElementById('clearTextOut').innerText = '';
};