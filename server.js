// Import module http dan url
const http = require("http");
const url = require("url");

// Fungsi untuk membuat server
const server = http.createServer((req, res) => {
  // Parse URL untuk mendapatkan path
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Routing sederhana
  if (path === "/") {
    // Root path
    res.statusCode = 200; // Set status code menjadi 200 (OK)
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
  } else if (path === "/redirect") {
    // Redirect ke URL lain
    res.statusCode = 302; // Set status code menjadi 302 (Found)
    res.setHeader("Location", "/new-url"); // Redirect ke path '/new-url'
    res.end();
  } else if (path === "/new-url") {
    // Halaman setelah redirect
    res.statusCode = 200; // Set status code menjadi 200 (OK)
    res.setHeader("Content-Type", "text/plain");
    res.end("You have been redirected to the new URL!");
  } else {
    // Halaman tidak ditemukan
    res.statusCode = 404; // Set status code menjadi 404 (Not Found)
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
  }
});

// Menentukan port server
const port = 3000;

// Server mendengarkan pada port yang ditentukan
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
