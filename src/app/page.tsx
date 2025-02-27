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
// import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogoColored from '@/public/logos/WithMeLogo.svg'
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
    <Link className="group -m-1 p-1" {...props}>
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
      className="flex items-center justify-between rounded-2xl backdrop-blur-sm bg-white/10 p-3 border border-white/10 hover:bg-white/20 transition-colors"
    >
      <div className="flex items-center gap-4 flex-1">
        {image ? (
          <div className="h-12 w-12 rounded-xl overflow-hidden">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        ) : Icon && (
          <div className="rounded-xl bg-white/5 p-2">
            <Icon className="h-6 w-6 fill-white" />
          </div>
        )}
        <div className="text-left">
          <h2 className="text-sm font-medium text-white">{title}</h2>
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
                  className="w-full h-full object-cover sm:rounded-3xl"
                />
              </div>
            </div>
            
            <div className="relative z-30">
              <h1 className={`${satisfy.className} text-4xl sm:text-5xl mb-4 text-white leading-none -mt-16 sm:mt-6`}>
                Kimberly's Journey
              </h1>
              <p className="text-sm text-white/80 mb-8 px-6">
                Join me for yummy food inspiration & meal plans or get in touch if you need any travel or Disney related advice
              </p>

              <div className="flex justify-center gap-6 mb-12">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                <SocialLink
                  href="https://www.instagram.com/gemmab.slimming"
                  target="_blank"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                />
                <SocialLink
                  href="#"
                  aria-label="Follow on GitHub"
                  icon={TikTokIcon}
                />
                <SocialLink
                  href="https://wa.me/447506777777"
                  target="_blank"
                  aria-label="Follow on WhatsApp"
                  icon={YouTubeIcon}
                />
                   <SocialLink
                  href="https://wa.me/447506777777"
                  target="_blank"
                  aria-label="Follow on WhatsApp"
                  icon={FacebookIcon}
                />
              </div>

              <div className="space-y-4 px-4">
                <LinkBox
                  image="https://withme.so/static/media/kim.da82f64a150bc96a6e19.webp"
                  title="4 WEEK MEAL PLAN FOR £3.99"
                  href="#"
                />
                <LinkBox
                  image="https://withme.so/static/media/kim.da82f64a150bc96a6e19.webp"
                  title="GET MY COOKBOOK ON AMAZON"
                  href="#"
                />
                <LinkBox
                  image="https://withme.so/static/media/kim.da82f64a150bc96a6e19.webp"
                  title="ORDER MY COOKBOOK"
                  href="#"
                />
                <LinkBox
                  icon={ExternalLinkIcon}
                  title="Walking Pad code 'KIMBERLYSLIMMINGJOURNEY'"
                  href="#"
                />
                <LinkBox
                  image="https://withme.so/static/media/kim.da82f64a150bc96a6e19.webp"
                  title="My Amazon Storefront"
                  href="#"
                />
                <LinkBox
                  icon={InstagramIcon}
                  title="Instagram"
                  href="#"
                />
                <LinkBox
                  icon={ExternalLinkIcon}
                  title="TikTok"
                  href="#"
                />
                <LinkBox
                  icon={ExternalLinkIcon}
                  title="YouTube travel vlogs!"
                  href="#"
                />
                <LinkBox
                  icon={ExternalLinkIcon}
                  title="Facebook"
                  href="#"
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
