const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

run().catch((err) => console.log(err));

async function run(firstName, lastName, fileNumber) {
  const content = await PDFDocument.load(
    fs.readFileSync('./per-session-time-sheet.pdf')
  );

  const page = content.getPages()[0];

  page.drawText(lastName, {
    x: 25,
    y: 660,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawText(firstName, {
    x: 235,
    y: 660,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawText(fileNumber, {
    x: 325,
    y: 590,
    size: 15,
    color: rgb(0, 0.53, 0.71),
  });

  // Write the PDF to a file
  fs.writeFileSync('./test.pdf', await content.save());
}

module.exports = run;
