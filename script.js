// ============================================================
// SCRIPT GENERAL DE LA WEB
// ============================================================


// ============================================================
// MENÚ DESPLEGABLE
// ============================================================
const botonMenu = document.querySelector(".boton-menu");
const menuPrincipal = document.querySelector(".menu-principal");

if (botonMenu && menuPrincipal) {
    botonMenu.addEventListener("click", () => {
        menuPrincipal.classList.toggle("menu-abierto");
    });
}
// ============================================================
// VENTANA DE INFORMACIÓN DE INVESTIGADORES
// ============================================================

const tarjetasInvestigadores =
    document.querySelectorAll(".tarjeta-investigador");
const modalInvestigador =
    document.getElementById("modal-investigador");

const modalInvestigadorTitulo =
    document.getElementById("modal-titulo");

const modalInvestigadorInformacion =
    document.getElementById("modal-informacion");

const cerrarModalInvestigador =
    document.querySelector(".cerrar-modal");


// ------------------------------------------------------------
// INFORMACIÓN DE LOS INVESTIGADORES
// ------------------------------------------------------------
const informacionInvestigadores = {

    "Carlos Perez":
        "Información de Carlos Perez. Aquí podremos poner su cargo, especialidad, líneas de investigación y cualquier otra información relevante.",

    "Francisca Gomez":
        "Información de Francisca Gomez. Aquí podremos poner su cargo, especialidad, líneas de investigación y cualquier otra información relevante.",

    "Maria Santamaria":
        "Información de Maria Santamaria. Aquí podremos poner su cargo, especialidad, líneas de investigación y cualquier otra información relevante."

};


// ------------------------------------------------------------
// ABRIR MODAL DE INVESTIGADORES
// ------------------------------------------------------------

if (tarjetasInvestigadores.length > 0 && modalInvestigador) {

    tarjetasInvestigadores.forEach(tarjeta => {

        tarjeta.addEventListener("click", () => {


            const titulo = tarjeta.querySelector("h3");


            if (!titulo) {
                return;
            }

            const nombre = titulo.textContent.trim();
            modalInvestigadorTitulo.textContent = nombre;

            modalInvestigadorInformacion.textContent =
                informacionInvestigadores[nombre] ||
                "No hay información disponible sobre este investigador.";
            modalInvestigador.style.display = "flex";

        });

    });

}


// ------------------------------------------------------------
// CERRAR MODAL DE INVESTIGADORES
// ------------------------------------------------------------

if (cerrarModalInvestigador && modalInvestigador) {

    cerrarModalInvestigador.addEventListener("click", () => {

        modalInvestigador.style.display = "none";

    });

}


// ============================================================
// VENTANA DE INFORMACIÓN DE COLABORADORES
// ============================================================

const tarjetasColaboradores =
    document.querySelectorAll(".tarjeta-colaborador");

const modalColaborador =
    document.getElementById("modal-colaborador");

const modalColaboradorTitulo =
    document.getElementById("modal-colaborador-titulo");

const modalColaboradorInformacion =
    document.getElementById("modal-colaborador-informacion");

const cerrarModalColaborador =
    document.querySelector(".cerrar-modal-colaborador");


// ------------------------------------------------------------
// INFORMACIÓN DE LOS COLABORADORES
// ------------------------------------------------------------

const informacionColaboradores = {

    "Jose Manuel Perez": {

        cargo: "Informático",

        tipo: "Colaborador",

        informacion:
            "Información sobre la colaboración de José Manuel Pérez con el Grupo de Investigación."

    },


    "Claudia Foca": {

        cargo: "Comedora de lechuga",

        tipo: "Colaboradora",

        informacion:
            "Información sobre la colaboración de Claudia Foca con el Grupo de Investigación."

    },


    "Colaborador 3": {

        cargo: "Profesional colaborador",

        tipo: "Colaborador",

        informacion:
            "Información sobre la colaboración con el Grupo de Investigación en Psiquiatría."

    }

};


// ------------------------------------------------------------
// ABRIR MODAL DE COLABORADORES
// ------------------------------------------------------------

if (tarjetasColaboradores.length > 0 && modalColaborador) {

    tarjetasColaboradores.forEach(tarjeta => {

        tarjeta.addEventListener("click", () => {

            const titulo = tarjeta.querySelector("h3");

            if (!titulo) {
                return;
            }

            const nombre = titulo.textContent.trim();

            const datos = informacionColaboradores[nombre];

            if (!datos) {

                modalColaboradorTitulo.textContent = nombre;

                modalColaboradorInformacion.innerHTML =
                    "<p>No hay información disponible sobre este colaborador.</p>";

            } else {

                modalColaboradorTitulo.textContent = nombre;

                modalColaboradorInformacion.innerHTML = `

                    <p>
                        <strong>Cargo:</strong>
                        ${datos.cargo}
                    </p>

                    <p>
                        <strong>Tipo:</strong>
                        ${datos.tipo}
                    </p>

                    <p>
                        ${datos.informacion}
                    </p>

                `;

            }

            modalColaborador.classList.add("mostrar");

        });

    });

}


// ------------------------------------------------------------
// CERRAR MODAL DE COLABORADORES
// ------------------------------------------------------------

if (cerrarModalColaborador && modalColaborador) {

    cerrarModalColaborador.addEventListener("click", () => {

        modalColaborador.classList.remove("mostrar");

    });

}


// ============================================================
// CERRAR LOS MODALES AL HACER CLIC FUERA DEL RECUADRO
// ============================================================

if (modalInvestigador) {

    modalInvestigador.addEventListener("click", (evento) => {

        if (evento.target === modalInvestigador) {

            modalInvestigador.classList.remove("mostrar");

        }

    });

}


if (modalColaborador) {

    modalColaborador.addEventListener("click", (evento) => {

        if (evento.target === modalColaborador) {

            modalColaborador.classList.remove("mostrar");

        }

    });

}


// ============================================================
// CERRAR LOS MODALES CON LA TECLA ESC
// ============================================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        if (modalInvestigador) {

            modalInvestigador.classList.remove("mostrar");

        }

        if (modalColaborador) {

            modalColaborador.classList.remove("mostrar");

        }

    }

});
// ============================================================
// VENTANA DE INFORMACIÓN DE ORGANIZACIÓN
// ============================================================

const tarjetasOrganizacion =
    document.querySelectorAll(".tarjeta-organizacion");

const modalOrganizacion =
    document.getElementById("modal-organizacion");

const modalOrganizacionTitulo =
    document.getElementById("modal-organizacion-titulo");

const modalOrganizacionInformacion =
    document.getElementById("modal-organizacion-informacion");

const cerrarModalOrganizacion =
    document.querySelector(".cerrar-modal-organizacion");


// INFORMACIÓN DE ORGANIZACIÓN

const informacionOrganizacion = {

    "Universidad de Oviedo": {
        tipo: "Institución",
        informacion:
            "Información sobre la Universidad de Oviedo y su relación con el Grupo de Investigación en Psiquiatría."
    },

    "Grupo de Investigación": {
        tipo: "Grupo de investigación",
        informacion:
            "Información sobre la estructura y organización del Grupo de Investigación en Psiquiatría."
    },

    "Colaboraciones": {
        tipo: "Colaboraciones",
        informacion:
            "Información sobre las instituciones y entidades que colaboran con el grupo."
    }

};


// ABRIR MODAL

if (tarjetasOrganizacion.length > 0 && modalOrganizacion) {

    tarjetasOrganizacion.forEach(tarjeta => {

        tarjeta.addEventListener("click", () => {

            const titulo = tarjeta.querySelector("h3");

            if (!titulo) {
                return;
            }

            const nombre = titulo.textContent.trim();

            const datos = informacionOrganizacion[nombre];

            modalOrganizacionTitulo.textContent = nombre;

            if (datos) {

                modalOrganizacionInformacion.innerHTML = `
                    <p>
                        <strong>Tipo:</strong>
                        ${datos.tipo}
                    </p>

                    <p>
                        ${datos.informacion}
                    </p>
                `;

            } else {

                modalOrganizacionInformacion.innerHTML =
                    "<p>No hay información disponible.</p>";

            }

            modalOrganizacion.classList.add("mostrar");

        });

    });

}


// CERRAR CON LA X

if (cerrarModalOrganizacion && modalOrganizacion) {

    cerrarModalOrganizacion.addEventListener("click", () => {

        modalOrganizacion.classList.remove("mostrar");

    });

}


// CERRAR HACIENDO CLIC FUERA

if (modalOrganizacion) {

    modalOrganizacion.addEventListener("click", (evento) => {

        if (evento.target === modalOrganizacion) {

            modalOrganizacion.classList.remove("mostrar");

        }

    });

}
document.addEventListener("DOMContentLoaded", function () {

    const buscador = document.querySelector("#buscador-publicaciones");
    const tarjetas = document.querySelectorAll(".tarjeta-publicacion");

    if (!buscador) return;

    buscador.addEventListener("input", function () {

        const texto = buscador.value.toLowerCase().trim();

        tarjetas.forEach(function (tarjeta) {

            const contenido = tarjeta.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

});
document.addEventListener("DOMContentLoaded", function () {

    const filtro = document.querySelector("#filtro-publicaciones");
    const tarjetas = document.querySelectorAll(".tarjeta-publicacion");

    if (!filtro) return;

    filtro.addEventListener("change", function () {

        const categoria = filtro.value;

        tarjetas.forEach(function (tarjeta) {

            if (
                categoria === "todos" ||
                tarjeta.classList.contains(categoria)
            ) {
                tarjeta.style.display = "";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

});
function mostrarNoticia(id) {
    const noticia = document.getElementById(id);

    if (noticia) {
        noticia.style.display = "block";
        noticia.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function cerrarNoticia(id) {
    const noticia = document.getElementById(id);

    if (noticia) {
        noticia.style.display = "none";
    }
}