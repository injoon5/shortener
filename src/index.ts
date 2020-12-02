import express from 'express';
import { json } from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import db from 'quick.db';
import locale from 'express-locale';
import { join } from 'path';

const app = express();
const port = process.env.PORT || 3000;

const sans = new db.table('sans');
const wa = new db.table('wa');
const fdsf = new db.table('fdsf');
const plag = new db.table('plag');

app.use(
  sassMiddleware({
    src: join(__dirname, './scss'),
    dest: join(__dirname, './public/css'),
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css',
  })
);
app.use(json());
app.use(express.static(join(__dirname, './public')));
app.use(locale());
app.set('view engine', 'ejs');
app.set('views', join(__dirname, './views'));

app.get('/', (req, res) => {
  // if (req.get('host') !== 'url.tica.fun') return res.redirect('https://url.tica.fun');
  res.render('index');
});

app.post('/api/shorten', (req, res) => {});

app.listen(port, () => console.log(`http://localhost:${port}`));
