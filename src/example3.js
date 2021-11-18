// example.3.js
import { funcD } from './example2';
import funcA from './example1';

export const  funcF = () => {
    funcD();
    funcA();
    console.log('funcF');
}

export const funcH = () => {
    console.log('funcH');
}
