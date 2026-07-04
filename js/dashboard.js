
let contador = 15;


const btnCounter = document.getElementById("btn-counter");
const numBtn = document.getElementById("num-btn");
const dynamicCard = document.getElementById("dynamic-card");
const cardHeader = document.getElementById("card-header");
const cardImg = document.getElementById("card-img");
const cardTitle = document.getElementById("card-title");
const cardDesc = document.getElementById("card-desc");
const numFooterCard = document.getElementById("num-footer-card");
const numFooterPage = document.getElementById("num-footer-page");


const fasesMonitoreo = {
    primary: {
        bgCard: "text-bg-primary",
        bgBtn: "btn-primary",
        header: "Estado Global: Fase 1",
        img: "https://cdn-icons-png.flaticon.com/512/2040/2040504.png", // Candado seguro cerrado
        title: "Entorno Seguro",
        desc: "Todos los servicios perimetrales y firewalls operan sin registros de anomalías activas."
    },
    warning: {
        bgCard: "text-bg-warning",
        bgBtn: "btn-warning",
        header: "Estado Global: Fase 2",
        img: "https://cdn-icons-png.flaticon.com/512/8856/8856149.png", // Señal de alerta amarilla
        title: "Comportamiento Anómalo",
        desc: "Múltiples reintentos de conexión entrantes denegados en puertos de bases de datos."
    },
    danger: {
        bgCard: "text-bg-danger",
        bgBtn: "btn-danger",
        header: "Estado Global: Fase 3",
        img: "https://cdn-icons-png.flaticon.com/512/2560/2560124.png", // Candado abierto de brecha
        title: "Brecha Confirmada",
        desc: "¡INTRUSIÓN EN CURSO! Ejecutando de manera automática aislamiento y mitigación de nodos."
    }
};


btnCounter.addEventListener("click", function() {
    

    
    if (contador === 0) {
        contador = 15;
    }

    
    numBtn.innerText = contador;
    numFooterCard.innerText = contador;
    numFooterPage.innerText = contador;

    
    if (contador >= 11 && contador <= 15) {
        mutarInterfaz(fasesMonitoreo.primary);
    } 
    
    else if (contador >= 6 && contador <= 10) {
        mutarInterfaz(fasesMonitoreo.warning);
    } 
    
    else if (contador >= 1 && contador <= 5) {
        mutarInterfaz(fasesMonitoreo.danger);
    }
});


function mutarInterfaz(fase) {
    
    dynamicCard.className = `card mx-auto shadow-lg ${fase.bgCard}`;
    btnCounter.className = `btn btn-lg mb-4 shadow fw-bold ${fase.bgBtn}`;
    
    
    cardHeader.innerText = fase.header;
    cardImg.src = fase.img;
    cardImg.alt = fase.title;
    cardTitle.innerText = fase.title;
    cardDesc.innerText = fase.desc;
}

