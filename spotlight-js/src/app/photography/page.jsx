import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import fs from 'fs';
import path from 'path';
import Image from 'next/image'


import image1 from './pics/DSC01103.JPEG'


function PhotoFill() {


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        
          <Image
          src={image1}
          alt="image1"
          className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
        />
    
       
           <Image 
            alt="Statamic"
            src={image1}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image1}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image1}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image1}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image1}
            className="col-span-2 col-start-2 max-h-33vw w-full object-contain sm:col-start-auto lg:col-span-1"
          />
          <Image
            alt="Statamic"
            src={image1}
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
      <PhotoFill />
      
    </SimpleLayout>
  )
}
