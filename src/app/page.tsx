'use client'

import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  WhatsAppIcon,
  ExternalLinkIcon,
  TikTokIcon,
  YouTubeIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogoColored from '@/public/logos/WithMeLogo.svg'
import Amazon from '@/images/photos/amazon.webp'
import MealPlan from '@/images/photos/mealplan.webp'
import OrderCookBook from '@/images/photos/ordercookbook.webp'
import WalkingPad from '@/images/photos/walkingpad.webp'
import WithMeLogo from '@/images/photos/withmelogo.png'
import AmazonLogo from '@/images/photos/amazonlogo.jpg'
import YoutubeLogo from '@/images/photos/youtube.png'
import CookBook from '@/images/photos/cookbook.jpg'
import Found from '@/images/photos/found.png'
const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})



function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1 transition-transform transform hover:scale-110" {...props} target="_blank" rel="noopener noreferrer">
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-white/80" />
    </Link>
  )
}


function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image
}: {
  icon?: React.ComponentType<{ className?: string }>,
  title: string,
  description?: string,
  href: string,
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl backdrop-blur-sm bg-white/10 p-2 border border-white/10 hover:bg-white/20 transition-colors"
    >
      <div className="flex items-center gap-4 flex-1">
        {image ? (
          <div className="h-12 w-12 min-w-[3rem] aspect-square rounded-xl overflow-hidden">
            <img src={image} alt="" className="h-full w-full object-cover" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        ) : Icon && (
          <div className="h-12 w-12 min-w-[3rem] aspect-square rounded-xl bg-white/5 p-2 flex items-center justify-center">
            <Icon className="h-6 w-6 fill-white" />
          </div>
        )}
        <div className="text-left">
          <h2 className="text-xs font-medium text-white pr-6">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-white/80">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </a>
  )
}

export default function Home() {

  return (
    <>
      <Container className="bg-zinc-950 flex-1 pb-32">
        <div className="mx-auto text-center max-w-lg">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="absolute sm:hidden h-[30dvh] bottom-0 inset-x-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.95) 75%, #000000 100%)'
                }}
              />
              <div className="h-[40dvh] sm:h-48 md:h-72 sm:w-40 md:w-64 sm:mt-12 mx-auto">
                <img
                  src="https://withme.so/static/media/kim.da82f64a150bc96a6e19.webp"
                  alt="Kimberly"
                  className="w-full h-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1 className={`${satisfy.className} text-4xl sm:text-5xl mb-4 text-white leading-none -mt-16 sm:mt-6`}>
                Kimberly&apos;s Journey
              </h1>
              <p className="text-sm text-white/80 mb-8 px-6">
                Join me for yummy food inspiration & meal plans or get in touch if you need any travel or Disney related advice
              </p>

              <div className="flex justify-center gap-6 mb-12">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                <SocialLink
                  href="https://www.instagram.com/kimberlys_journeyy"
                  target="_blank"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href="https://www.tiktok.com/@kimberlys_journey"
                  aria-label="Follow on GitHub"
                  icon={TikTokIcon}
                />
                <SocialLink
                  href="https://www.youtube.com/channel/UCviWCpWoLsREjGnIFGeE3TA"
                  target="_blank"
                  aria-label="Follow on YouTube"
                  icon={YouTubeIcon}
                />
                <SocialLink
                  href="https://www.facebook.com/Kimberlyslimmingjourney"
                  target="_blank"
                  aria-label="Follow on Facebook"
                  icon={FacebookIcon}
                />
              </div>

              <div className="space-y-4 px-4">
                <LinkBox
                  image={MealPlan.src}
                  title="Sign up for weekly meal plans + recipe cards"
                  href="https://www.fitwith.io/kimberlysjourney"
                />
                <LinkBox
                  image={MealPlan.src}
                  title="4 WEEK MEAL PLAN FOR £3.99"
                  href="https://www.fitwith.io/kimberlysjourney"
                />
                <LinkBox
                  image={WithMeLogo.src}
                  title="Earn money from your own content here"
                  href="https://withme.so/become-a-creator?id=4104&code=2e1a2cc33b03ff2600e40cd989f648a76fe4fe07ac5b89936d4a6ed0df4bc038"
                />
                <LinkBox
                  image={CookBook.src}
                  title="GET MY COOKBOOK ON AMAZON"
                  href="https://www.amazon.co.uk/dp/B0DPXYCV5P"
                />
                <LinkBox
                  image={Found.src}
                  title="ORDER MY COOKBOOK"
                  href="https://found.us/cookbooks/650457dc54410a6ac184d9ff"
                />

                <LinkBox
                  image={WalkingPad.src}
                  title="Walking Pad code 'KIMBERLYSLIMMINGJOURNEY'"
                  href="https://uk.walkingpad.com/products/walkingpad-c2-foldable-walking-machine-for-uk?fbclid=PAZXh0bgNhZW0CMTEAAabqKMx4RnLsSxiXvr9B4elgojz0AhxHO5wZxR504PR2tiQ4kXapgAZJ0KE_aem_3rEs0KK_gN-mUUwmFmmj7g"
                />
                <LinkBox
                  image={AmazonLogo.src}
                  title="My Amazon Storefront"
                  href="https://www.amazon.co.uk/shop/kimberlys_journeyy"
                />
                <LinkBox
                  icon={InstagramIcon}
                  title="Instagram"
                  href="https://www.instagram.com/kimberlys_journeyy"
                />
                <LinkBox
                  icon={TikTokIcon}
                  title="TikTok"
                  href="https://www.tiktok.com/@kimberlys_journey"
                />
                <LinkBox
                  icon={YouTubeIcon}
                  title="YouTube travel vlogs!"
                  href="https://www.youtube.com/channel/UCviWCpWoLsREjGnIFGeE3TA"
                />
                <LinkBox
                  icon={FacebookIcon}
                  title="Facebook"
                  href="https://www.facebook.com/Kimberlyslimmingjourney"
                />
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
