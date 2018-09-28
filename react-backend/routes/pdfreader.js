var express = require('express');
var router = express.Router();
var pdfText = require('pdf-text')
var pathToPdf = "files/testsides.pdf"

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   var text
//   pdfText(pathToPdf, function(err, chunks) {
//     text = chunks
//     console.error(chunks)
//   })
//   res.text = (text) => {
//     return text
//   }
// });

// router.get('/', function(req, res, next) {
//   var text
//   pdfText(pathToPdf, function(err, chunks) {
//     text = chunks
//     console.error(chunks)
//   })
//   res.send(text)
// });

router.get('/', function(req, res, next) {
  var text
  pdfText(pathToPdf, function(err, chunks) {
    text = chunks
    console.error(chunks)
  })
  res.text(text)
});

module.exports = router;
