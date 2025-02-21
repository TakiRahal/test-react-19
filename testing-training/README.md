# Testing React + TypeScript + Vite

This template provides a minimal setup to get Testing React in Vite.

Currently, two official plugins are available:

- [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started) for Jest
- [https://testing-library.com/docs/](https://testing-library.com/docs/) for Testing Library
- [https://docs.cypress.io/app/references/configuration](https://docs.cypress.io/app/references/configuration) for Cypress

## Add dependencies : Jest and @testing-library 


yarn create vite testing-training --template react-ts
yarn add -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event @testing-library/dom
yarn add -D identity-obj-proxy jest-transformer-svg

```js
    Create a jest.setup.ts file with the following code
    import "@testing-library/jest-dom";
```











If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

yarn create vite testing-training --template react-ts
yarn add -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event @testing-library/dom
yarn add -D identity-obj-proxy jest-transformer-svg

Create a jest.setup.ts file with the following code
    import "@testing-library/jest-dom";


Create a jest.config.js file with the following configuration code
    export default {
        testEnvironment: "jsdom",
        transform: {
            "^.+\\.tsx?$": "ts-jest",
        },
        moduleNameMapper: {
            "\\.(css|less|sass|scss)$": "identity-obj-proxy",
            "^.+\\.svg$": "jest-transformer-svg",
        },
        setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    };



yarn add --dev jest-fetch-mock
import fetch from 'jest-fetch-mock';
fetch.enableMocks()


yarn add cypress --dev
