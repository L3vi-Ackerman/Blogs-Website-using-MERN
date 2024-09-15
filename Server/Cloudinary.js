require('dotenv').config(); // This should be the first line;
const cloudinary = require('cloudinary').v2;

console.log('CLOUD_NAME:', process.env.CLOUD_NAME); // Debug output
console.log('CLOUD_KEY:', process.env.CLOUD_KEY);   // Debug output
console.log('CLOUD_KEY_SECRET:', process.env.CLOUD_KEY_SECRET); // Debug output

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret:process.env.CLOUD_KEY_SECRET
})

const uploadImage = (path) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(path, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      });
    });
  };
  
  const uploadMultipleImagesSequentially = async (paths) => {
    try {
      for (let path of paths) {
        const url = await uploadImage(path);
        console.log(`Uploaded ${path}: ${url}`);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };


  const print =()=>{
    console.log(process.env.CLOUD_KEY)
  }
  
  // List of image paths
  const imagePaths = [
    '../assets/angular.png',
    '../assets/c#.png',
    '../assets/go.png',
    '../assets/java.png',
    '../assets/javascript.png',
    '../assets/python.jpg',
    '../assets/react.png',
    '../assets/ruby.png',
    '../assets/swift.jpg',
    '../assets/vuejs.png',
  ];

  uploadMultipleImagesSequentially(imagePaths);
