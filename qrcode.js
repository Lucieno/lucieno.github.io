document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("propicToggle");
    const photo = document.getElementById("propicPhoto");
    const qrContainer = document.getElementById("propicQr");

    if (!toggle || !photo || !qrContainer || typeof QRCodeStyling === "undefined") {
        return;
    }

    const computedWidth = parseFloat(window.getComputedStyle(photo).width) || photo.naturalWidth || 150;
    const dimension = Math.round(computedWidth);

    const qrCode = new QRCodeStyling({
        width: dimension,
        height: dimension,
        data: "https://lucieno.github.io",
        qrOptions: {
            errorCorrectionLevel: "H"
        },
        dotsOptions: {
            color: "#000000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#ffffff"
        },
        cornersSquareOptions: {
            type: "extra-rounded",
            color: "#000000"
        },
        cornersDotOptions: {
            type: "dot",
            color: "#000000"
        }
    });

    qrCode.append(qrContainer);

    let showingQr = false;

    function setState(showQr) {
        showingQr = showQr;
        toggle.setAttribute("aria-pressed", showQr ? "true" : "false");
        if (showQr) {
            photo.classList.add("propic-hidden");
            qrContainer.classList.remove("propic-hidden");
            qrContainer.setAttribute("aria-hidden", "false");
        } else {
            photo.classList.remove("propic-hidden");
            qrContainer.classList.add("propic-hidden");
            qrContainer.setAttribute("aria-hidden", "true");
        }
    }

    function toggleState() {
        setState(!showingQr);
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleState();
        }
    }

    toggle.addEventListener("click", toggleState);
    toggle.addEventListener("keydown", handleKeydown);
});
