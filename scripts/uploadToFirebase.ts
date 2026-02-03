import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../src/lib/firebase';
import * as fs from 'fs';

/**
 * Upload files to Firebase Storage
 * Run this script once to upload your sensitive files
 * 
 * Usage: ts-node scripts/uploadToFirebase.ts
 */

async function uploadFile(localPath: string, storagePath: string) {
  try {
    const file = fs.readFileSync(localPath);
    const storageRef = ref(storage, storagePath);
    
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    
    console.log(`✅ Uploaded: ${storagePath}`);
    console.log(`   URL: ${url}\n`);
    
    return url;
  } catch (error) {
    console.error(`❌ Failed to upload ${localPath}:`, error);
  }
}

async function main() {
  console.log('🚀 Starting Firebase upload...\n');
  
  // Upload profile picture
  await uploadFile(
    'public/profile-pic/shub.jpeg',
    'profile.jpg'
  );
  
  // Upload about me image
  await uploadFile(
    'public/gallery/about me/winning .jpeg',
    'about/winning.jpg'
  );
  
  // Upload resume (if you have one)
  // await uploadFile('path/to/resume.pdf', 'resume.pdf');
  
  // Upload gallery images (example)
  const galleryFiles = fs.readdirSync('public/gallery')
    .filter(file => file.startsWith('IMG_'));
  
  for (const file of galleryFiles) {
    await uploadFile(
      `public/gallery/${file}`,
      `gallery/${file}`
    );
  }
  
  console.log('\n✨ Upload complete!');
  console.log('📋 Copy the URLs above to your .env.local file');
}

main().catch(console.error);
