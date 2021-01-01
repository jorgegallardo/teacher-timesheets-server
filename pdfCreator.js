const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

run().catch(err => console.log(err));

async function run() {
  const content = await PDFDocument.load(fs.readFileSync('./per-session-time-sheet.pdf'));

  const page = content.getPages()[0];
  
  page.drawText('Sama', {
    x: 25,
    y: 660,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  })

  page.drawText('Ummaromana', {
    x: 235,
    y: 660,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  })
  
  page.drawText('123456', {
    x: 325,
    y: 590,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  })

  // Write the PDF to a file
  fs.writeFileSync('./test.pdf', await content.save());
}