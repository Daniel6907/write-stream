const http = require('http');
const fs = require('fs');
const path = require('path');

// Визначаємо ім'я файлу для логування
const logFileName = 'server_requests.log';

// Створюємо потік для запису у файл з прапором 'a' (append - додавання в кінець файлу)
const logStream = fs.createWriteStream(path.join(__dirname, logFileName), { flags: 'a' });

const server = http.createServer((req, res) => {
  // Отримуємо поточну дату та час
  const now = new Date();
  const dateString = now.toISOString(); // Форматуємо дату як ISO string

  // Отримуємо шлях та метод запиту
  const { url, method } = req;

  // Формуємо рядок для запису в лог-файл
  const logEntry = `${dateString} - ${method} ${url}\n`;

  // Записуємо подію в лог-файл
  logStream.write(logEntry);

  // Відправляємо простий response для клієнта
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Привіт зі сервера!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});