"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3005;
app.get('/api', (req, res) => {
    res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});
app
    .listen(port, function () {
    console.log(`Server is running on port ${port}.`);
})
    .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('Error: address already in use');
    }
    else {
        console.log(err);
    }
});
