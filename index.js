const Handlebars = require("handlebars");
const fs = require("fs");

function buildHTML(filename, data) {
    // new Date().toLocaleString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "numeric", minute: "numeric"})
    const source = fs.readFileSync(filename, 'utf8').toString();
    Handlebars.registerHelper('dateConvert', function (someString) {
        return new Date(someString).toLocaleString('en-us', {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        });
    });
    Handlebars.registerHelper('toLower', function (someString) {
        return someString.toLowerCase();
    });
    Handlebars.registerHelper('newlineToBr', function (someString) {
        return someString.replace(/(?:\r\n|\r|\n)/g, '<br>');
    })
    const template = Handlebars.compile(source);
    const output = template(data);

    return output
}

async function main(src, dist) {
    const json = fs.readFileSync('./src/chats.json', 'utf8').toString()
    const parsedJson = JSON.parse(json);

    const html = buildHTML(src, parsedJson);

    fs.writeFile(dist, html, function (err) {
        if (err) return console.log(err);
        console.log('index.html created');
    });
}

main('./src/template.html', './dist/chatOutput.html');