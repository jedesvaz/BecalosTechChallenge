// Importamos Zod
    const { z } = window.Zod;

    const userSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    userSchema.parse(formData);
    alert("Formulario enviado correctamente");
  } catch (error) {
    alert(`Errores: ${error.errors.map(e => e.message).join(", ")}`);
  }
});