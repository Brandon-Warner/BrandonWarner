import { NextResponse } from 'next/server'
import { listPhotos, getPhotoUrl } from '../../../utils/s3'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const bucketName =
      searchParams.get('bucketName') || process.env.S3_BUCKET_NAME

    if (!bucketName) {
      return NextResponse.json(
        { error: 'Bucket name is required' },
        { status: 400 },
      )
    }

    // List all photos in a directory
    if (action === 'list') {
      const prefix = searchParams.get('prefix') || ''
      const photos = await listPhotos(bucketName, prefix)
      return NextResponse.json({ photos })
    }

    // Get a presigned URL for a specific photo
    if (action === 'url') {
      const photoKey = searchParams.get('photoKey')
      if (!photoKey) {
        return NextResponse.json(
          { error: 'Photo key is required' },
          { status: 400 },
        )
      }

      const expiresIn = parseInt(searchParams.get('expiresIn') || '3600', 10)
      const url = await getPhotoUrl(bucketName, photoKey, expiresIn)
      return NextResponse.json({ url })
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "list" or "url"' },
      { status: 400 },
    )
  } catch (error) {
    console.error('Error processing S3 photo request:', error)
    return NextResponse.json(
      { error: 'Failed to process request', message: error.message },
      { status: 500 },
    )
  }
}
