const archiver = require('archiver');
const fs = require('fs');

// Create a new ZIP archive
const zip = archiver('zip', { zlib: { level: 9 } });

// Create a write stream for the output ZIP file
const output = fs.createWriteStream('project.zip');

// Pipe the ZIP archive to the output file
zip.pipe(output);

// Append the build folder and the node_modules folder to the ZIP archive
zip.directory('build', 'build');
zip.directory('node_modules', 'node_modules');

// Finalize the ZIP archive
zip.finalize();

// Event listener for when the ZIP archive is finished
output.on('close', () => {
    console.log('ZIP file created successfully!');
});
