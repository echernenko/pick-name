const express = require('express');
const app = express();
app.set('views', './views');
app.set('view engine', 'pug');
// from node_modules
app.use('/static', express.static('node_modules/bootstrap/dist'));
// from website folder
app.use('/static', express.static('public'));

app.get('/', (req, res) => { res.render('main', {
    title: 'Pick a Child Name Wizard'
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
