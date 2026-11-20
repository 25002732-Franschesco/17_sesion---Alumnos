// Base de usuarios local
const base = [
    { user1: 'admin', pass: '1234', rol: 'Administrador', url: 'admin.html' },
    { user2: 'cliente', pass: '12345', rol: 'Cliente', url: 'cliente.html' },
    { user3: 'jefe', pass: '123456', rol: 'Jefe', url: 'jefe.html' }
];

// Iniciar sesión
function iniciarSesion(e) {
    e.preventDefault();
    const inputUser = document.getElementById('inputUser').value.trim();
    const inputPass = document.getElementById('inputPass').value.trim();
    const usuarioAutenticado = base.find(
        u => (u.user1 === inputUser || u.user2 === inputUser || u.user3 === inputUser) && u.pass === inputPass
    );

    if (usuarioAutenticado) {
        // Almacenar datos en SESSIONSTORAGE
        sessionStorage.setItem('sesionActiva', JSON.stringify(usuarioAutenticado));

        // Redirigir a la página que corresponde a su rol
        window.location.href = usuarioAutenticado.url;
    } else {
        document.getElementById('errorMsg').classList.remove('d-none');
    }
}

function saltarLoginSiAutenticado() {
    const sesion = JSON.parse(sessionStorage.getItem('sesionActiva'));

    if (sesion) {
        window.location.href = sesion.url;
    }
}

function cerrarSesion() {
    sessionStorage.removeItem('sesionActiva');
    window.location.href = 'index.html';
}