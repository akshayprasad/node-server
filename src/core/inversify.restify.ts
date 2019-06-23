import { InversifyRestifyServer } from 'inversify-restify-utils';
import * as restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';

import { container } from './inversify.config';

const cors = corsMiddleware({
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry'],
    origins: ['*', ''],
    preflightMaxAge: 5, // Optional
});

const inversifyServer = new InversifyRestifyServer(container, { name: 'Sample code base', defaultRoot: '/api' });

inversifyServer.setConfig((app) => {
    app.use(cors.preflight);
    app.use(cors.actual);
    app.use(restify.pre.sanitizePath());
    app.use(restify.plugins.pre.userAgentConnection());
    app.use(restify.plugins.acceptParser(app.acceptable));
    app.use(restify.plugins.authorizationParser());
    app.use(restify.plugins.bodyParser());
    app.use(restify.plugins.requestLogger());
});

export { inversifyServer };