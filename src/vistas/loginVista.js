import { User } from '../bd/user'
import { header } from '../componentes/header'
export default {
  template: `
  
  <div
  class="vh-100 d-flex align-items-center justify-content-center"
>
  <div class="col-12 col-md-4">
      <h1 class="text-center p-2">Login</h1>
      <form id="login" class="p-3" novalidate>
          <label class="mt-3 form-label" for="email">Email</label>
          <input id="emailL" type="email" class="form-control" required />
          <div class="invalid-feedback">Debes introducir un email valido</div>

          <label class="mt-3 form-label" for="nick">Contraseña: </label>
          <input id="passwordL" type="password" class="form-control" value="" required />
          <div class="invalid-feedback">Esta no es una contraseña correcta</div>

          <button
              id="btn_submit"
              type="submit"
              class="mt-4 btn btn-success w-100"
          >
              Enviar
          </button>
          <p class="mt-3">
              <a href="">No recuerdo mi contraseña</a>
              <br />
              <a href="registro.html">Quiero Registrarme</a>
          </p>
          <p></p>
          <hr class="mt-5" />

          <button type="button" class="mt-1 btn btn-primary w-100">
              Login con Google
          </button>
      </form>
  </div>
</div>



  `,
  script: () => {
    // script para validación de formulario
    const form = document.querySelector('#login')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      event.stopPropagation()
      // Verificamos validación del formulario
      form.classList.add('was-validated')
      if (!form.checkValidity()) {
        console.log('formulario no valido')
      } else {
        // Si los datos validan
        
        // console.log(userData)
        try {
          const userData = {
            email: document.querySelector('#emailL').value,
            password: document.querySelector('#passwordL').value
          }
          // Capturamos datos del formulario
          // Intentamos loguearnos utilizando el método login de nuestra clase User
          const usuarioLogeado = await User.login(userData)
          // Refrescamos el header
          header.script()
          // Cagamos la página home
          //console.log('te has logueado')
          // Si nos logueamos con exito pintamos el email en header y menú de usuario
          console.log("logeado con exito")
          const divUsuarioLogeado = document.querySelectorAll('#emailUsuarioLogueado')
          divUsuarioLogeado[0].innerHTML = usuarioLogeado.email
          window.location.href = '/#/home'
        } catch (error) {
          console.error('No se ha podido iniciar sesión', error)
          window.alert('No se ha podido iniciar sesión')
        }
      }
    })
  }
}