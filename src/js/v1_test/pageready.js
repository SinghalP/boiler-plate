import waitUntil from '../utils/waitUntil';
import Promise from 'promise-polyfill';

let jQueryReady = new Promise( ( resolve, reject ) => {
    waitUntil( ['$'], () => {
        resolve();
    }, false );
} );

let elementReady = new Promise( ( resolve, reject ) => {
    waitUntil( ['.autoOrderViewArea-right'], () => {
        resolve();
    }, true );
} );

let domReady = new Promise( ( resolve, reject ) => {
    if( document.readyState.toLowerCase() !== 'loading' ){
        resolve();
    }else{
        document.addEventListener( 'DOMContentLoaded', () => {
            resolve();
        } );
    }
} );

function adOrderDomReady(){
    let promise = new Promise( ( resolve,reject ) => {
        waitUntil( [ '#autoOrderDetailsForm .ado-date-container .selectpicker' ], () => {
            resolve();
        }, true )
    } );
    return promise;
}

export {jQueryReady,elementReady,domReady,adOrderDomReady};