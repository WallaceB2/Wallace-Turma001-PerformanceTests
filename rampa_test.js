import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 300 }, // Rampa de 10 até 300 VUs em 5 minutos
  ],
  vus: 10, // Inicial
  startVUs: 10,
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');
  sleep(1); // espera 1 segundo entre as requisições
}
