const app = require('./controller/app')
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번에서 작동중입니다.`);
});

