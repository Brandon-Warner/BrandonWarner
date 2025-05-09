import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import fs from 'fs';
import path from 'path';
import Image from 'next/image'


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


function PhotoGallery() {
const photos = [image1, image2, image3, image4, image5]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {/* {photos.map((photo, index) => {
          <Image
          key={index}
          alt={`photo ${index + 1}`}
          src={photo}
          className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
        />
        })} */}
          <Image
          src={image1}
          alt="image1"
          className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
        />
    
       
           <Image 
            alt="image2"
            src={image2}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image3}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image4}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image5}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image6}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image7}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />  
          <Image
            alt="Statamic"
            src={image8}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />  
          <Image
            alt="Statamic"
            src={image9}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />  
          <Image
            alt="Statamic"
            src={image10}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />  
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
