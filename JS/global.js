const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const html = (string) =>{
    let parser = new DOMParser();
    let dom = parser.parseFromString(string,'text/html');
    let children = Array.from(dom.all[2].children);
    return (children.length == 1) ? children[0] : children;
}
