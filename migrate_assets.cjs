const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]*assets\/([^'"]+))['"]/g;
    
    let updated = false;
    let newContent = content.replace(importRegex, (match, name, fullPath, assetPath) => {
        console.log(`  Replacing ${name} -> /${assetPath} in ${path.basename(filePath)}`);
        updated = true;
        return `const ${name} = '/${assetPath}'`;
    });

    if (updated) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        return true;
    }
    return false;
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += walk(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            if (processFile(fullPath)) {
                count++;
            }
        }
    });
    return count;
}

console.log(`Starting migration in: ${srcDir}`);
const total = walk(srcDir);
console.log(`Total files updated: ${total}`);
