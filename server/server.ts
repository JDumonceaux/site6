import express, { Application } from 'express';

const app: Application = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3005;

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree'] });
});

app
  .listen(port, function () {
    console.log(`Server is running on port ${port}.`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(err);
    }
  });
