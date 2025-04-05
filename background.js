let popupWindowId = null; // Armazena o ID da janela

chrome.action.onClicked.addListener(() => {
    chrome.system.display.getInfo((displays) => {
        const screenWidth = displays[0].workArea.width;

        // Verifica se a janela ainda existe antes de tentar focá-la
        if (popupWindowId) {
            chrome.windows.get(popupWindowId, (window) => {
                if (chrome.runtime.lastError || !window) {
                    // Se a janela não existe mais, cria uma nova
                    abrirJanela(screenWidth);
                } else {
                    chrome.windows.update(popupWindowId, { focused: true });
                }
            });
        } else {
            abrirJanela(screenWidth);
        }
    });
});

function abrirJanela(screenWidth) {
    chrome.windows.create({
        url: "index.html",
        type: "popup",
        focused: true,
        width: 600,
        height: 400,
        left: screenWidth - 520, 
        top: 160, 
    }, (window) => {
        popupWindowId = window.id;

        // Não precisa forçar update se já está certo
    });
}


// Reseta a variável quando a janela for fechada
chrome.windows.onRemoved.addListener((windowId) => {
    if (windowId === popupWindowId) {
        popupWindowId = null;
    }
});
