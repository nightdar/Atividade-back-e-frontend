import express, { type Express, type Request, type Response } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());
const port = 3000;

const contatos = [
    { id: 1, nome: "Mauro", email: "canivete@teste.com"},
    { id: 2, nome: "Samuel", email: "Samuelemauro@gmail.com"},
    { id: 3, nome: "Gu", email: "passeio@teste.com"},
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/contatos', (req: Request, res: Response) => {
    res.json(contatos);
});

app.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`);
});