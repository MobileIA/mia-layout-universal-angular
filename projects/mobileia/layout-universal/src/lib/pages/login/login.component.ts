import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@mobileia/authentication';
import { map, concatMap, concatMapTo, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Almacena la ruta cuando se loguea correctamente
   */
  private routeSuccess: String;
  /**
   * Determinar si en el ingreso debe validar el Rol del usuario.
   */
  private verifyRole = false;
  /**
   * Rol que tiene permisos para ingresar
   */
  private withRole = 0;

  loginForm: FormGroup;
  loginMessageError = '';

  /** Variables para personalizar el diseño */
  designImageBackground = '';
  designImageLogo = '';
  designTitle = 'Ingresar';
  designCaption = 'Ingrese su email y contraseña para ingresar al panel';
  designLabelEmail = 'Tu email';
  designLabelPassword = 'Contraseña';
  designBtnColorClass = 'btn-info';
  designHasRemember = false;
  designUrlFacebook = '';
  designUrlTwitter = '';
  designUrlGoogle = '';
  designUrlLinkedin = '';
  designUrlInstagram = '';

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    // Obtener los parametros y configurarlos, verificar si el usuario se encuentra logueado
    this.route.data
    .pipe(concatMap(params => this.processParamsConfig(params)))
    .pipe(concatMap(params => this.processRedirectParams(params)))
    .subscribe(logged => {
      if (logged) {
        this.router.navigateByUrl('/' + this.routeSuccess + '');
      }
    });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.requestLogin(email, password);
  }

  requestLogin(email: string, password: string) {
    // Limpiar mensaje de error
    this.loginMessageError = '';
    this.authService.signInWithEmailAndPassword(email, password, data => {
      if (data.success) {

        if (this.isValidRole(data.response.role)) {
          this.router.navigateByUrl('/' + this.routeSuccess);
        } else {
          this.loginMessageError = 'Usted no tiene permisos para registrarse';
          this.authService.signOut();
        }

      } else {
        this.loginMessageError = data.error.message;
      }
    });
  }
  /**
   * Funcion que determinar si el usuario para ingresar necesita un rol especial
   */
  isValidRole(userRole: number): Boolean {
    // Si no necesita verificar rol
    if (!this.verifyRole) {
      return true;
    }
    // Verificar si es el mismo rol
    if (this.withRole == userRole) {
      return true;
    }
    return false;
  }

  /**
   * Procesa los parametros requeridos para el funcionamiento de la pantalla
   * @param params Array de parametros
   */
  processParamsConfig(params): Observable<Params> {
    this.routeSuccess = params.success_route;
    if (params.verify_role) {
      this.verifyRole = params.verify_role;
      this.withRole = params.with_role;
    }
    // Procesar variables del diseño
    this.processCustomDesign(params);
    // Devolvemos Query para seguir procesando
    return this.route.queryParams;
  }
  /**
   * Procesa si se ingreso a esta pantalla desde otra URL.
   * @param params Array de parametros
   */
  processRedirectParams(params): Observable<boolean> {
      const redirect = params.redirect;
      if (redirect !== '/login' && redirect !== '/' && redirect !== '' && redirect !== undefined && redirect !== null
      && redirect !== '%2F' && redirect !== '/login;redirect=%2F') {
        this.routeSuccess = redirect;
      }
      return this.authService.isLoggedBehavior();
  }
  /**
   * Procesa todo los parametros de personalización del diseño de la pantalla
   * @param params Array de parametros
   */
  processCustomDesign(params) {
    if (params.image_background) {
      this.designImageBackground = params.image_background;
    }
    if (params.image_logo) {
      this.designImageLogo = params.image_logo;
    }
    if (params.title_box) {
      this.designTitle = params.title_box;
    }
    if (params.caption_page) {
      this.designCaption = params.caption_page;
    }
    if (params.button_color) {
      this.designBtnColorClass = params.button_color;
    }
    if (params.url_facebook) {
      this.designUrlFacebook = params.url_facebook;
    }
    if (params.url_twitter) {
      this.designUrlTwitter = params.url_twitter;
    }
    if (params.url_google) {
      this.designUrlGoogle = params.url_google;
    }
    if (params.url_linkedin) {
      this.designUrlLinkedin = params.url_linkedin;
    }
    if (params.url_instagram) {
      this.designUrlInstagram = params.url_instagram;
    }
  }

}
