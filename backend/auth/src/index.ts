import app from './app';
import config from './config';

app.listen(config.port, () => {
  console.log(`Server runnong at port ${config.port}`);
});
