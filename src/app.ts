import 'reflect-metadata';
import { inversifyServer } from './core/inversify.restify';

const app = inversifyServer.build();

app.get('/', (req, res) => {
    res.send('Server health check!');
});

app.listen(3001, () => {
    // tslint:disable-next-line:no-console
    console.log(`INFO: Node app 'REST-Server is running at ${app.router}`);
});