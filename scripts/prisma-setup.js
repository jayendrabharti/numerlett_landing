const { execSync } = require('child_process');

console.log('Setting up Prisma...');

try {
  // Try to deploy migrations
  console.log('Attempting to deploy migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('Migrations deployed successfully!');
} catch (error) {
  // If migration fails due to existing schema, just generate the client
  console.log('Migration deploy failed (database likely already has schema). Generating client only...');
}

// Always generate the Prisma client
console.log('Generating Prisma Client...');
execSync('npx prisma generate', { stdio: 'inherit' });
console.log('Prisma setup complete!');
