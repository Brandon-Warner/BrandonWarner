import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import fs from 'fs';
import path from 'path';
import Image from 'next/image'
import { listPhotos, getPhotoUrl } from '@/utils/s3';


import image1 from './pics/DSC01103.JPEG'
import image2 from './pics/DSC01133.JPEG'
import image3 from './pics/DSC01154.JPEG'
import image4 from './pics/DSC01381.JPEG'
import image5 from './pics/DSC01388.JPEG'
import image6 from './pics/DSC01407.JPEG'
import image7 from './pics/DSC01749.JPEG'
import image8 from './pics/DSC01850.JPEG'
import image9 from './pics/DSC01870.JPEG'
import image10 from './pics/DSC02049.JPEG'


async function PhotoGallery() {
const photos = await listPhotos(process.env.NEXT_PUBLIC_S3_BUCKET_NAME);

const photosWithUrl= await Promise.all(
  photos.map(async (photo) => ({
    
    ...photo,
    url: await getPhotoUrl(process.env.NEXT_PUBLIC_S3_BUCKET_NAME, photo.Key),
  }))
);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
         {photosWithUrl.map((photo, index) => {
          console.log('photo: ', photo);
          <Image
          key={photo.Key}
          alt={photo.title}
          src={photo.url}
          className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
        />
        })} 
          
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
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <PhotoGallery />
      
    </SimpleLayout>
  )
}
