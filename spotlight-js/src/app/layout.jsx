import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import avatarLogo from '@/images/img/PhotoGallery/IMG_0015.JPEG'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Brandon Warner',
    default:
      'Brandon Warner - Solutions Engineer & Problem-Solver at Heart',
  },
  description:
    "Hi, I'm Brandon — Solutions Engineer & Problem-Solver at Heart.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
