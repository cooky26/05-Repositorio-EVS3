
const usuarioRegistrado = "axel.cyber";
const contrasenaRegistrada = "Inacap2026";


const btnLogin = document.getElementById("btn-login");
const inputUser = document.getElementById("username");
const inputPass = document.getElementById("password");
const alertContainer = document.getElementById("alert-container");
const loginLogo = document.getElementById("login-logo");


btnLogin.addEventListener("click", function() {
    const userVal = inputUser.value.trim();
    const passVal = inputPass.value.trim();

    
    alertContainer.innerHTML = "";

   
    if (userVal === "" || passVal === "") {
        crearAlertaBootstrap("Los campos de credenciales no pueden estar vacíos.", "warning");
        return;
    }

    
    if (userVal === usuarioRegistrado && passVal === contrasenaRegistrada) {
        
        window.location.href = "dashboard.html";
    } else {
        
        crearAlertaBootstrap("Fallo en la autentificación. Credenciales no autorizadas.", "danger");
        
        
        loginLogo.src = "https://cdn-icons-png.flaticon.com/512/753/753345.png"; 
    }
});


function crearAlertaBootstrap(mensaje, tipo) {
    alertContainer.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            <strong>Seguridad:</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}