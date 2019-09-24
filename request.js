const http = require("https");

module.exports = (options) => {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            req.on("error", (err) => {
                reject(new Error(err));
            });
            res.on("end", () => {
                let body = Buffer.concat(chunks).toString();
                resolve(JSON.parse(body));
            });
        });
        req.end();
    });
};
