import { PORT } from './config';
import { app } from './app';

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
