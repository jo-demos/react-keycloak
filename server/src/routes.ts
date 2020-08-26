import express from 'express';

const routes = express.Router();

routes.get('/user', (request, response) => {
    return response.json('Eu sou FC');
});

export default routes;