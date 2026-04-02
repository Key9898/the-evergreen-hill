import os
import re

src_dir = r"c:\Users\keych\Development\Projects\Personal\the-evergreen-hill\src"

# Regex to find: import Name from 'any_relative_path/assets/SubFolder/File.ext'
# Capture groups: 1=Name, 2=SubFolder/File.ext
import_re = re.compile(r"import\s+(\w+)\s+from\s+['\"].*assets/([^'\"]+)['\"]")

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    matches = import_re.findall(content)
    
    if matches:
        updated = False
        for name, asset_path in matches:
            # We must escape the asset_path because it could contain '&' or other regex specials
            escaped_asset_path = re.escape(asset_path)
            # Find the exact import line to replace
            pattern = rf"import\s+{name}\s+from\s+['\"].*assets/{escaped_asset_path}['\"]"
            replacement = f"const {name} = '/{asset_path}'"
            
            # Perform search and replace
            found = re.search(pattern, new_content)
            if found:
                print(f"  Replacing {name} -> /{asset_path}")
                new_content = re.sub(pattern, replacement, new_content)
                updated = True
        
        if updated:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

print(f"Starting migration in: {src_dir}")
count = 0
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            if process_file(os.path.join(root, file)):
                count += 1

print(f"Total files updated: {count}")
