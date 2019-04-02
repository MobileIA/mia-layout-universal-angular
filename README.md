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

```

## Como usar pantalla de login:
1. Agregar registro al Route:
```js
{
    path: 'login',
    component: LoginComponent,
    data: {
        'success_route' : 'index'
    }
}
```
2. Reemplazar la variable "success_route", por la ruta a donde desea que se rediriga una vez logueado correctamente.


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
