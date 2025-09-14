const getCleanText = () => {
    let text = document.getElementById('asterisk').value
        .replaceAll("*", "")
        .replace(/[\\/]\$/g, "$")          // заміна /$ або \$ на $
        .replace(/\\&/g, " and ")          // \& на " and "
        .replace(/\/\.{3}/g, "...")        // /... на ...
        .replace(/\\\.{3}/g, "...")        // \... на ...
        .replace(/&/g, " and ")            // звичайне & на " and "
        .replace(/™/g, " TM")              // ™ на " TM"
        .replace(/>/g, "")                 // > видаляється
        .replace(/\\\\/g, " ")             // \\ на пробіл
        .replace(/\\_/g, " ")              // \_ на пробіл
        .replace(/\n---\n/g, "")           // "---" з переносами видаляється
        .replace(/---/g, "");              // "---" без переносів також видаляється

    // Видалити пробіли і переноси рядка в кінці (якщо є)
    text = text.replace(/[\s\n\r]+$/, '');

    return text;
};

const getUppercaseText = () => {
    let upperCaseText = document.getElementById('asterisk').value.toUpperCase();

    return upperCaseText;
};

handleRemoveAsterisk = () => {
    document.getElementById('clearTextOut').innerHTML = getCleanText();
};

handleCopyText = () => {
    let textOut = document.getElementById('clearTextOut').textContent;
    navigator.clipboard.writeText(textOut);
};

handleResetText = () => {
    document.getElementById('asterisk').value = '';
    document.getElementById('clearTextOut').innerText = '';
};

handleUppercaseText = () => {
    document.getElementById('clearTextOut').innerHTML = getUppercaseText();
};