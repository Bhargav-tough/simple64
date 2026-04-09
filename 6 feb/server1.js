const fs = require('fs/promises');

async function writeFileData() {
  const text = "Hello, this is text data";
  const json = { name: "Vishal", age: 21, role: "Student" };

  await fs.writeFile(
    'output.txt',
    text + '\n' + JSON.stringify(json, null, 2),
    'utf8'
  );
}

writeFileData();
