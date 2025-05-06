import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/img/PhotoGallery/IMG_8941.PNG'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Brandon Warner - Solutions Engineer & Problem-Solver at Heart, based in New York.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          I’m Brandon Warner - Tech Translator & Solution Engineer: Where Innovation Meets Impact
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I'm a digital puzzle-solver who transforms complex technology into real-world business victories. With deep expertise in Software Development and Customer Identity & Access Management (CIAM), I operate at the fascinating intersection of technical innovation and strategic business outcomes.
            </p>
            <p>
            My superpower? Translating technical complexity into "aha!" moments. I dive into clients' unique challenges, mapping their technical ecosystems and strategic goals to architect solutions that don't just work—they transform.
            </p>
            <p>When you work with me, you get:</p>
            <l>
              <li>A technical navigator who's implemented CIAM solutions across 15+ industries</li>
              <li>A strategic partner who's orchestrated complex implementations generating over $14M in lifetime customer value</li>
              <li>A relationship builder who maintains a 97% client retention rate through authentic connections and trustworthy execution</li>
            </l>
            <br/>
            <p>
            I've guided Fortune 500 enterprises through digital transformations with $2.3M engagements, helped mid-market companies streamline authentication workflows reducing login friction by 40%, and partnered with scrappy startups to build security foundations that scale with their ambitions.
            </p>
            <p>
            My approach blends technical rigor with business savvy—I speak fluently with CTOs about OAuth flows and federation protocols, while translating these concepts into ROI discussions with C-suite executives. I'm the bridge between your engineering, product, and revenue teams, ensuring technology investments deliver measurable impact.
            </p>
            <p>
            In my toolkit: expert-level knowledge of modern identity protocols, hands-on software development experience, and a knack for creating compelling proof-of-concept environments that showcase exactly how solutions will transform client operations.
            </p>
            <p>
            Beyond the digital realm, I'm a passionate urban explorer capturing New York City's hidden stories through street photography, a fitness enthusiast who believes in strengthening both mind and body, and a coffee connoisseur who approaches brewing with the same precision I bring to my technical work—my current obsession is perfecting the pour-over timing for Ethiopian Yirgacheffe beans.
            </p>
            <p>
            Let's connect and discover how we can transform your technological challenges into your next competitive advantage.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
          <SocialLink href="https://www.linkedin.com/in/brandon--warner/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/Brandon-Warner" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            
            <SocialLink
              href="mailto:brandonswarner5@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              brandonswarner5@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
