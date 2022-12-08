const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({
    name: "Nils"
}));

function buildHTML(filename, data) {
    const source = fs.readFileSync(filename, 'utf8').toString();
    const template = Handlebars.compile(source);
    const output = template(data);

    return output
}

async function main(src, dist) {
    const html = buildHTML(src, {
        "variableData": "This is variable data"
    });

    fs.writeFile(destination, html, function (err) {
        if (err) return console.log(err);
        console.log('index.html created');
    });
}

main('./src/index.html', './dist/index.html');