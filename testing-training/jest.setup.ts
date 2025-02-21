import "@testing-library/jest-dom";
import { TextEncoder } from 'node:util'
import fetch from 'jest-fetch-mock';

global.TextEncoder = TextEncoder

fetch.enableMocks()

