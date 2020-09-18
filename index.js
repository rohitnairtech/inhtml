"use strict";
const {readFileSync} = require('fs');

const inHtml = {
    html : '',
    load: function(fName){
        this.html = readFileSync(fName, 'utf-8').replace(/\s\s+/g, ' ');
    },
    renderLoad: function(data){
        let {html} = this;
        for(let changeable in data){
            html = html.replace(new RegExp('#{'+changeable+'}','g'),data[changeable]);
        }
        return html;
    },
    render: (fName, data)=>{
        let html = readFileSync(fName, 'utf-8').replace(/\s\s+/g, ' ');
        for(let changeable in data){
            html = html.replace(new RegExp('#{'+changeable+'}','g'), data[changeable]);
        }
        return html;
    }
}

module.exports = inHtml;

// inHtml.load('./mail/mailer.html');
// const rep = inHtml.renderLoad({link:'somshit.in', nameBtn: 'SendWa'});
// console.log(rep);
// console.log(inHtml.render('./mail/mailer.html', {link:'somshit.insss'}));