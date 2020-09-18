"use strict";
const {readFileSync} = require('fs');

module.exports = (filename) => {

    const file = readFileSync(filename, 'utf-8').replace(/\s\s+/g, ' ');
    
    return {
            render: data => {
                let html = file;
                for(let changeable in data){
                    html = html.replace(new RegExp('#{'+changeable+'}','g'),data[changeable]);
                }
                return html;
            }
        };
}