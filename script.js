(function () {
  // Función para mostrar/ocultar el menú
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // Función para manejar el envío del formulario de inicio de sesión
  function handleLogin(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (
      (username === "Kenneth506" || username === "Gnu") &&
      password === "linux"
    ) {
      window.location.href = "index.html";
    } else {
      alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }

    // Llamar a la función para mostrar u ocultar el enlace después de la redirección
    toggleCitasLink(username);
  }

  // Función para manejar el envío del formulario de contacto
  function handleContactForm(event) {
    event.preventDefault();

    // Recoger los valores del formulario
    var nombreApellido = document.getElementById("nombreapellido").value;
    var correoElectronico = document.getElementById("correoelectronico").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;
    var contactoPreferido = document.querySelector(
      'input[name="contacto"]:checked'
    ).value;
    var horarioPreferido = document.querySelector("select").value;
    var recibirNovedades = document.querySelector(
      'input[type="checkbox"]'
    ).checked;

    // Crear un objeto con los datos
    var formData = {
      nombreApellido: nombreApellido,
      correoElectronico: correoElectronico,
      telefono: telefono,
      mensaje: mensaje,
      contactoPreferido: contactoPreferido,
      horarioPreferido: horarioPreferido,
      recibirNovedades: recibirNovedades,
    };

    // Obtener los datos almacenados actualmente (si existen)
    var storedData = localStorage.getItem("formData");

    // Verificar si hay datos almacenados previamente
    if (storedData) {
      // Convertir la cadena JSON a un objeto
      var storedArray = JSON.parse(storedData);

      // Agregar el nuevo formulario al arreglo existente
      storedArray.push(formData);

      // Almacenar el arreglo actualizado en el almacenamiento local
      localStorage.setItem("formData", JSON.stringify(storedArray));
    } else {
      // Si no hay datos almacenados, crear un nuevo arreglo con el primer objeto
      localStorage.setItem("formData", JSON.stringify([formData]));
    }

    // Mostrar los valores en una alerta
    alert("Cita Registrada");

    // Llamar a la función para mostrar los datos después de manejar el formulario
    displayFormData();
  }

  // Función para mostrar los datos almacenados
  function displayFormData() {
    var storedData = localStorage.getItem("formData");

    if (storedData) {
      var formDataArray = JSON.parse(storedData);
      var formDataList = document.getElementById("formDataList");

      formDataList.innerHTML = ""; // Limpiar la lista antes de agregar los elementos

      formDataArray.forEach(function (formData, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
          <strong>Cita  ${index + 1}:</strong>
          <p>Nombre y Apellido: ${formData.nombreApellido}</p>
          <p>Correo Electrónico: ${formData.correoElectronico}</p>
          <p>Teléfono: ${formData.telefono}</p>
          <p>Mensaje: ${formData.mensaje}</p>
          <p>Contacto Preferido: ${formData.contactoPreferido}</p>
          <p>Horario Preferido: ${formData.horarioPreferido}</p>
          <p>Recibir Novedades: ${formData.recibirNovedades ? "Sí" : "No"}</p>
        `;
        formDataList.appendChild(listItem);
      });
    }
  }

  // Añadir manejadores de eventos después de que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
    // Manejador de evento para el botón de menú
    var menuButton = document.getElementById("menuButton");
    if (menuButton) {
      menuButton.addEventListener("click", toggleMenu);
    }

    // Manejador de evento para el formulario de inicio de sesión
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }

    // Manejador de evento para el formulario de contacto
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactForm);
    }

    // Llamar a la función para mostrar los datos al cargar la página
    displayFormData();
  });

  document.getElementById("loginButton").addEventListener("click", function () {
    // Obtener el nombre de usuario
    var username = document.getElementById("user").value;

    // Verificar el nombre de usuario y mostrar/ocultar el enlace según el caso
    if (username === "Kenneth506") {
      // Mostrar el enlace si el usuario es "Kenneth506"
      document.getElementById("citaslink").style.display = "block";
    } else {
      // Ocultar el enlace para otros usuarios
      document.getElementById("citaslink").style.display = "none";
    }
  });
})();
