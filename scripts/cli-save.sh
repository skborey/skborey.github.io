#!/bin/bash

# $1 is command $2 is description
# save to file cmd.md in format >$2 ```bash\n$1```

echo "##### $2" >> ./cmd.md
echo "
\`\`\`bash
$1
\`\`\`
" >> ./cmd.md

# commit and push to main
git config user.name "Borey"
git config user.email skborey@gmail.com
git add .
git commit -m "Add new command"
git push origin