import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// Initialize the S3 client with your credentials
const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
})

// Function to get a list of all photos in a bucket
export async function listPhotos(bucketName, prefix = '') {
  // console.log('s3Client: ', s3Client)
  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: prefix,
    })

    const { Contents } = await s3Client.send(command)
    console.log('Contents: ', Contents)
    return Contents || []
  } catch (error) {
    console.error('Error listing photos:', error)
    throw error
  }
}

// Function to get a presigned URL for a specific photo
export async function getPhotoUrl(bucketName, key, expiresIn = 3600) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    })

    // Generate a presigned URL that will be valid for 'expiresIn' seconds
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn })
    return signedUrl
  } catch (error) {
    console.error('Error getting photo URL:', error)
    throw error
  }
}

// Function to directly fetch a photo's data
export async function getPhotoData(bucketName, key) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    })

    const response = await s3Client.send(command)

    // Convert the readable stream to a buffer
    const chunks = []
    for await (const chunk of response.Body) {
      chunks.push(chunk)
    }

    return Buffer.concat(chunks)
  } catch (error) {
    console.error('Error fetching photo data:', error)
    throw error
  }
}
