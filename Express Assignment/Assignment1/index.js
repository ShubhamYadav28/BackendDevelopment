const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        const menProducts = DummyProducts(10, 'men');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        const womenProducts = DummyProducts(10, 'women');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(womenProducts));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Page not found');
    }
});

function DummyProducts(count, category) {
    const products = [];
    for (let i = 1; i <= count; i++) {
        products.push({
            id: i,
            name: `Product ${i}`,
            category: category,
        });
    }
    return products;
}

const PORT = 3050;
const HOSTNAME = 'localhost'
server.listen(PORT, () => {
    console.log(`Server is running on ${HOSTNAME}: ${PORT}`);
});
