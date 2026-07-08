document
  .getElementById("registroEvento")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío automático del formulario

    // Variables
    const nombre = document.getElementById("nombre").value;
    if (
      !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre) ||
      nombre.trim().length < 3
    ) {
      alert(
        "El nombre solo puede contener letras y debe tener al menos 3 caracteres.",
      );
      return;
    }
    const correo = document.getElementById("correo").value;
    if (!correo.includes("@") || !correo.includes(".")) {
      alert("Introduce un correo válido.");
      return;
    }
    // correo.addEventListener("invalid", (event) => {
    //   event.preventDefault(); // cancela el mensaje del navegador
    //   alert("Por favor, introduce un correo electrónico válido.");
    // });
    const telefono = document.getElementById("telefono").value;
    if (!/^\d{10}$/.test(telefono)) {
      event.preventDefault();
      alert(
        "El teléfono solo puede contener números y debe tener exactamente 10 dígitos.",
      );
      return;
    }
    const intereses = document.querySelectorAll(
      'input[name="intereses"]:checked',
    );
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const archivo = document.getElementById("archivo").files[0];
    if (archivo) {
      const tiposPermitidos = ["image/jpeg", "image/png", "application/pdf"];
      if (!tiposPermitidos.includes(archivo.type)) {
        alert("Solo se permiten archivos JPG, PNG o PDF.");
        return;
      }
      if (archivo.size > 5 * 1024 * 1024) {
        // 5MB
        alert("El archivo no puede pesar más de 5MB.");
        return;
      }
    }
    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Si todo está bien
    alert("Registro exitoso. ¡Gracias por registrarte!");
  });
