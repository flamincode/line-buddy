var express = require('express');
var router = express.Router();
var pdfUtil = require('pdf-to-text')
var pdf_path = "files/testsides.pdf"

/* GET users listing. */
router.get('/', function(req, res, next) {
  var text
  pdfUtil.pdfToText(pdf_path, function(err, info) {
    if (err) throw(err);
    console.error(info);
    let text = info
  });
  res.text = (text) => {
    return text
  }
});

module.exports = router;
