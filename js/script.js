const getCleanText = () => {
    let text = document.getElementById('asterisk').value
        .replaceAll("*", "")
        .replace(/\/\$/g, "$")
        .replace(/\\&/g, " and ")
        .replace(/\/\.{3}/g, "...")
        .replace(/&/g, " and ")
        .replace(/™/g, " TM")
        .replace(/>/g, "")
        .replace(/\\\\/g, " ")
        .replace(/\\_/g, " ")
        .replace(/\n---\n/g, "")
        .replace(/---/g, "");

    // Видалити пробіли або перенос рядка в кінці тексту ( Hi ChatGPT ;) )
    text = text.replace(/[\s\n\r]+$/, '');

    return text;
};

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