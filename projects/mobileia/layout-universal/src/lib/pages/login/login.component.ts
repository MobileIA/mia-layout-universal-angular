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

  /** Variables para personalizar el diseño */
  designImageBackground = '';
  designImageLogo = '';
  designTitle = 'Ingresar';
  designCaption = 'Ingrese su email y contraseña para ingresar al panel';
  designLabelEmail = 'Tu email';
  designLabelPassword = 'Contraseña';
  designBtnColorClass = 'btn-info';
  designHasRemember = false;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
      if (redirect !== '/' && redirect !== '' && redirect !== null && redirect !== '%2F' && redirect !== '/login;redirect=%2F') {
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
  }

}
