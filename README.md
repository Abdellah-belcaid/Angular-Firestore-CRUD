# Angular Firestore CRUD App
This is an Angular application that demonstrates basic CRUD (Create, Read, Update, Delete) operations using Firestore as the backend database. The app allows you to manage a collection of items, including their titles and descriptions.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Features
- List all items
- Add a new item
- Edit an existing item
- Delete an item
- Real-time updates using Firestore

## Getting Started

### Prerequisites :
1. Node.js and npm (Node Package Manager) should be installed on your system.
2. Angular CLI (Command Line Interface) is required to run and build the Angular application.

### Installation :
1. Clone the repository:
  ```bash
    git clone https://github.com/abdellah-belcaid/angular-firestore-crud-app.git
    cd angular-firestore-crud-app
  ```
2. Install project dependencies:
 ```bash
    npm install
  ```

### Configuration
1. Create a Firebase project on the Firebase Console.
2. Set up Firestore in your Firebase project.
3. Update the Firebase configuration in the src/environments/environment.ts and src/environments/environment.prod.ts files with your Firebase project credentials. [see bellow to knwo how to change it]
#### Changing Firebase Configuration
If you want to use your own Firebase project with this app, follow these steps to update the Firebase configuration:

1. Create a Firebase Project:

If you don't have a Firebase project, create one by visiting the Firebase Console and clicking on "Add project."

2. Set Up Firestore:

- In your Firebase project dashboard, navigate to "Firestore Database" from the left sidebar.
- Click on the "Create Database" button.
- Choose "Start in production mode" and select a location for your database.

3. Get Firebase Configuration:

- In your Firebase project dashboard, click on the gear icon at the top left and select "Project settings."

- Scroll down to the "Your apps" section and click on the "Config" radio button.

- You'll see a configuration object that looks like this:

  ```bash 
      const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
      };
  ```
  
4. Update Angular Project:

- Open the src/environments/environment.ts and src/environments/environment.prod.ts files in your Angular project.
- Replace the existing firebaseConfig object with the configuration from your Firebase project.

5. Run the App:

- If you haven't already, make sure you've installed the necessary dependencies by running npm install in your project directory.
- Start the development server by running ng serve.

6. Access Your App:

- Open your web browser and visit http://localhost:4200/ to access your app running locally.
- Ensure you're using the appropriate development or production environment based on your needs.

` Remember to keep your Firebase API keys and credentials secure and avoid sharing them publicly, especially if you're hosting your code on a public repository like GitHub. You can use environment variables or other secure methods to manage sensitive data in your application. `

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## pictures of the app :

![image](https://github.com/Abdellah-belcaid/Angular-Firestore-CRUD/assets/85366841/7dcde44f-7e11-4070-a61a-09b795081c90) 

![image](https://github.com/Abdellah-belcaid/Angular-Firestore-CRUD/assets/85366841/1c6cd7dd-6711-4d86-a48c-60086000ae60)






