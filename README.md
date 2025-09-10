# AngularFrontend app installation
app page view available: @ <video controls src="https://github.com/chanakya-git-kbc/app-registration/blob/main/public/register1.mp4" title="register1.mp4"></video>

```bash
ng new app-registration
```

√ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai None

```bash
git remote add origin https://github.com/chanakya-git-kbc/app-registration
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

```bash
ng generate c app-registration
```

```bash
ng generate c menu
```

```bash
ng generate c home
```

```bash
ng generate c about
```

```bash
ng generate c login --standalone
```
```bash
git commit -m "feat(app): add Home, About, Registration routes with shared menu and login link"
```
```bash
git add . 
git commit -m "feat(common): move menu to common components folder"
git push origin main    
```
```bash
ng add @angular/material  
npm install @angular/animations    
```
```bash
ng g s services/registrationService  
ng g s services/emailService  
```



# AppRegistration

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
