# React Boilerplate

This boilerplate is built using React, Redux-toolkit, Redux-saga, AntD, and Vite.

## Features

- **React** with **Vite** for fast development
- **Redux-Toolkit** for state management
- **Redux-Saga** for handling side effects
- **Ant Design** for a beautiful UI
- **Next.js** like folder structure

## Project Structure

This project has been initiated with the concept of modules, pages, components and every other type of code is stored in single folder and then has been separated into folders module wise.

- Here is the project folder structure:
  ```
  ...
  ├── public/           # Static files (e.g. favicon.ico)
  ├── src/              # Application source code
  │   ├── api/          # API utility functions
  │   ├── assets/       # Asset files (e.g. images, fonts)
  │   ├── components/   # Reusable presentational components
  │   ├── pages/        # Page components (i.e. routes)
  │   ├── redux/        # Redux store, actions, and reducers
  │   ├── sagas/        # Redux sagas
  │   ├── styles/       # Global styles
  │   ├── utils/        # Utility functions
  │   ├── App.jsx       # Root component
  │   ├── index.jsx     # Application entry point
  ...
  ```

Example:

- `views/auth/PAGES_FOR_AUTH_MODULE`
- `views/notes/PAGES_FOR_NOTES_MODULE`

Examples for context api, custom hooks, redux structure, routes setup are available.

utitlity functions & variables are available in `/utils` folder

- `contants.js` : to store constants used throughout the project
- `helper.js` : to contains helper functions ( i.e roundOff function )
- all the file will be exported from `/utils` ( index.js )

## Getting Started

- Clone this repository: `git clone https://github.com/your-username/your-repo.git`

- refer to `.env.example` file, create `.env` in the root file assign required variables.

- run `npm install` or `npm i` to install dependencies:
- Start the development server: `npm run dev`

- Open the application in your browser at `http://localhost:3000`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
