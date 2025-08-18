const getCleanText = () => {
    let text = document.getElementById('asterisk').value
        .replaceAll("*", "")
        .replace(/[\\/]\$/g, "$")          // заміна /$ або \$ на $
        .replace(/\\&/g, " and ")          // \& на " and "
        .replace(/\/\.{3}/g, "...")        // /... на ...
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