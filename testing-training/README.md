# Testing React + TypeScript + Vite

This template provides a minimal setup to get Testing React in Vite.

Currently, two official plugins are available:

- [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started) for Jest
- [https://testing-library.com/docs/](https://testing-library.com/docs/) for Testing Library
- [https://docs.cypress.io/app/references/configuration](https://docs.cypress.io/app/references/configuration) for Cypress

## Add dependencies : Jest and @testing-library 


```js
    yarn create vite testing-training --template react-ts
    yarn add -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event @testing-library/dom
    yarn add -D identity-obj-proxy jest-transformer-svg
```


Create a jest.setup.ts file with the following code
```js
    import "@testing-library/jest-dom";
```


Create a jest.config.js file with the following configuration code
```js
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
```


## Add dependencies mock fetch
yarn add --dev jest-fetch-mock
```js
    import fetch from 'jest-fetch-mock';
    fetch.enableMocks()
```
