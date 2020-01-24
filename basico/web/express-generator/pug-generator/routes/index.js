var express = require('express');
var router = express.Router();

let personas = [
  {
      id: 1,
      nombre: "Hilbert"
  },
  {
      id: 2,
      nombre: "Mito"
  },
  {
      id: 3,
      nombre: "Code"
  }
]

router.get('/', (req, res) => {
  res.render('index', { titulo: 'pug', mensaje: 'Hilbert | Pug', personas: personas });
});
module.exports = router;

module.exports = router;
