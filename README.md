# MiaLayoutUniversal

Libreria para utilizar facilmente el Template Universal.

## Como instalar
1. Instalar libreria en el proyecto:
```bash
npm install jquery --save
npm install bootstrap --save
npm install animate --save
npm install animate.css --save
npm install font-awesome --save
npm install countup.js-angular2 --save
npm install @ngx-pwa/local-storage --save
npm install @mobileia/core --save
npm install @mobileia/authentication --save
npm install @mobileia/layout-universal --save
```
2. Importar modulo:
```ts
import { LayoutUniversalModule } from '@mobileia/layout-universal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutUniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
3. Dejar solo en "app.component.html":
```html
<router-outlet></router-outlet>
```
4. Agregar fuentes del template en el archivo: "index.html":
```html
<!--Google font-->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700" rel="stylesheet">
```
5. Agregar Assets en "angular.json"
```json
"styles": [
    "node_modules/font-awesome/scss/font-awesome.scss",
    "node_modules/@mobileia/layout-universal/assets/template-universal/app.scss",
    "node_modules/@mobileia/layout-universal/assets/template-universal/css/style.css",
    "node_modules/@mobileia/layout-universal/assets/template-universal/css/responsive.css",
    "src/styles.scss"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js"
]
```
6. Copiar archivos de Assets:
* assets/js/sidebar-menu.js
* assets/images/user/1.jpg

## Como usar pantalla de login:
1. Agregar registro al Route:
```js
{
    path: 'login',
    component: LoginComponent,
    data: {
        'success_route' : 'index', // ruta a donde desea que se rediriga una vez logueado correctamente
        'image_background': '', // URL de la imagen de fondo
        'image_logo': '', // URL de la imagen del logo
        'title_box': '', // Titulo de la pagina
        'caption_page': '', // Texto debajo del titulo
        'button_color': '', // Clase custom para agregar al boton de login
        'url_facebook': '',
        'url_twitter': '',
        'url_google': '',
        'url_linkedin': '',
        'url_instagram': '',
    }
}
```

## Como usar Layout
1. Incluir elemento en el HTML:
```html
<mia-layout-universal [hasTopbar]="false" [designImgLogo]="'assets/images/logo-light.png'" [sidebarMenu]="menuItems" [sidebarMenuAccount]="menuUserItems"></mia-layout-universal>
```
2. Ejemplo de Variable de Menu
```ts
public menuUserItems = [
  {
    path: '/pages/stater-kit', title: 'Editar Perfil', icon: 'icon-user', type: 'link'
  },
  {
    path: '/pages/stater-kit', title: 'Configuración', icon: 'icon-settings', type: 'link'
  },
  {
    path: '/pages/stater-kit', title: 'Cerrar sesión', icon: 'icon-power-off', type: 'link'
  },
];
public menuItems = [
  { 
    headTitle: 'General'
  }, 
  {
    path: '/pages/stater-kit', title: 'Dashboard', icon: 'icon-desktop', type: 'link'
  },
  {
    title: 'Starter Kit', icon: 'icon-anchor', type: 'sub', children: [{
        title: 'Bootstrap', type: 'sub', children: [
          { path: '/base/accordion', title: 'Accordion', type: 'link' },          
          { path: '/base/alert', title: 'Alert', type: 'link' },          
          { path: '/base/dropdown', title: 'Dropdown', type: 'link' },          
          { path: '/base/grid', title: 'Grid', type: 'link' },          
          { path: '/base/helper-class', title: 'Helper Classes', type: 'link' },         
          { path: '/base/list', title: 'List', type: 'link' },         
          { path: '/base/modal', title: 'Modal', type: 'link' },         
          { path: '/base/navs', title: 'Navs', type: 'link' },        
          { path: '/base/popover', title: 'Popover', type: 'link' },        
          { path: '/base/progressbar', title: 'Progresssbar', type: 'link' },       
          { path: '/base/shadow', title: 'Shadow', type: 'link' },       
          { path: '/base/spinners', title: 'Spinners', type: 'link' },       
          { path: '/base/state-color', title: 'State Color', type: 'link' },       
          { path: '/base/tabs', title: 'Tabs', type: 'link' },       
          { path: '/base/tag-n-pills', title: 'Tag & pills', type: 'link' },       
          { path: '/base/typography', title: 'Typography', type: 'link' }
        ]
      }, 
      {
        title: 'Ng-Bootstrap', type: 'sub', children: [
          { path: '/base/ngb/accordion', title: 'Accordion', type: 'link' },          
          { path: '/base/ngb/alert', title: 'Alert', type: 'link' },          
          { path: '/base/ngb/buttons', title: 'Buttons', type: 'link' },          
          { path: '/base/ngb/carousel', title: 'Carousel', type: 'link' },          
          { path: '/base/ngb/collapse', title: 'Collapse', type: 'link' },         
          { path: '/base/ngb/datepicker', title: 'Datepicker', type: 'link' },         
          { path: '/base/ngb/dropdown', title: 'Dropdown', type: 'link' },         
          { path: '/base/ngb/modal', title: 'Modal', type: 'link' },        
          { path: '/base/ngb/pagination', title: 'Pagination', type: 'link' },        
          { path: '/base/ngb/popover', title: 'Popover', type: 'link' },       
          { path: '/base/ngb/progressbar', title: 'Progressbar', type: 'link' },       
          { path: '/base/ngb/rating', title: 'Rating', type: 'link' },       
          { path: '/base/ngb/tabset', title: 'Tabset', type: 'link' },       
          { path: '/base/ngb/timepicker', title: 'Timepicker', type: 'link' },       
          { path: '/base/ngb/tooltip', title: 'Tooltip', type: 'link' },       
          { path: '/base/ngb/typeahead', title: 'Typeahead', type: 'link' }
        ]
      }
    ]},
    { 
        headTitle: 'SUPPORT'
    },
    {
        path: 'http://support.pixelstrap.com/help-center', title: 'Raise Support', icon: 'icon-headphone-alt', type: 'extTabLink'
    },
];
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
