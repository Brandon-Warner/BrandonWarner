import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import { listPhotos, getPhotoUrl } from '@/utils/s3';



async function PhotoGallery() {
const photos = await listPhotos(process.env.NEXT_PUBLIC_S3_BUCKET_NAME);

const photosWithUrl= await Promise.all(
  photos.map(async (photo) => ({
    ...photo,
    url: await getPhotoUrl(process.env.NEXT_PUBLIC_S3_BUCKET_NAME, photo.Key),
  }))
);

  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-zinc-800" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 md:grid-cols-2 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {photosWithUrl.map((photo, index) => (
          <Image
            key={photo.Key}
            src={photo.url}
            alt={photo.Key}
            width={500}
            height={500}
            loading="eager"
            className="object-cover object-center group-hover:opacity-75"
            />
        ))}
          
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Photos"
      intro="Photography has become a new hobby while traveling - here are my favorites from Mexico City, San Francisco, Italy, and New York!"
    >
      <PhotoGallery />
      
    </SimpleLayout>
  )
}
