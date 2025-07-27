import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import croImage from '@/images/photos/cro-book.png'


function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

function Books({
  title,
  description,
  event,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSrc: StaticImageData
  imageAlt: string
  imageWidth: number
  imageHeight: number
  title: string
  description: string
  event: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href="#">
      {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="hover:opacity-100 opactity-100  w-3/4 h-auto dark:bg-transparent"
      />
    </Card>
  )
}


export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I&apos;ve spoken at events.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I&apos;ve spoken at events"
      intro="One of my favorite ways to share my ideas is live on stage, where there&apos;s so much more communication bandwidth than there is in writing. I had a nearly seven years pause due to my contracts."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
	      <Appearance
            href="https://ai.compasstechsummit.com/speaker/szabolcs-bader"
            title="Illusion of life?"
            description="What do we expect from AGI (Artificial General Intelligence)? How will the technology of the future differ from what we have today? Why is AGI or ASI (Artificial Super Intelligence) not possible with current architectures? What is life, really? What is personality, and how might an AGI with a personality come into existence? Could belief emerge during the testing of AGI/ASI? What are the current usability limits (with practical examples, like RAG/graph)?"
            event="Compass AI Session 2024"
            cta="Conference link"
          />
        <Appearance
            href="https://www.meetup.com/itrend/events/297318835/"
            title="Collective Intelligence"
            description="Here it is, operational, soon to revolutionize 80% of our lives. Let&apos;s look at the workings of an AI software development agency from a developer&apos;s perspective! A month&apos;s work in just a few minutes?"
            event="ITrends Meetup 2023"
            cta="Meetup link"
          />
          <Appearance
            href="https://www.slideshare.net/baadersz/facebook-research-2014-brightly-labs-full-presentation"
            title="What are you looking at on Facebook?"
            description="UX/UI analysis, attention rate, recall rate, ad effiency"
            event="Facebook AllThings&apos;14 2014"
            cta="Presentation link"
          />
          <Appearance
            href="https://www.linkedin.com/in/baaderszabolcs/overlay/50329258/single-media-viewer/?profileId=ACoAAAIg294BADH1-YYSAMWke7ZVc7Zd-PAkdqE"
            title="Conversion Optimization"
            description="60 slides about CRO basics and strategy, build up large databases"
            event="Email Marketing Meetup 2014"
            cta="Presentation link/ LinkedIn"
          />
          <Appearance
            href="https://szinapszis.hu/hu/hirek/kutatas-2012-konferencia"
            title="Automatic, research-free web usability"
            description="They say that if you&apos;re not embarassed by your first version, you&apos;re doing it wrong. Well when you&apos;re selling DIY space shuttle kits it turns out it&apos;s a bit more complicated."
            event="Kutatas 2012"
            cta="Conference Summary page"
          />
        </SpeakingSection>
        </div>

        <div className="space-y-20 pt-10 mt-10 bg-white dark:bg-transparent">
        <SpeakingSection title="Books"> 
          {/* Latest Book - LinkedIn Post */}
          <Card as="article">
            <Card.Title as="h3" href="#">
              {`"Európai AI Szabályozás - hogyan kerüld el akár 35 millió EUR bírságot?"`} 
            </Card.Title>
            <Card.Eyebrow decorate> Bader Szabolcs, 2025, 450 pages </Card.Eyebrow>
            <Card.Description>
              I&apos;m pleased to introduce my new book on European AI regulation, which I believe fills an important gap - what started as a personal guide grew into a comprehensive 450-page, 20-chapter resource. With EU AI regulations becoming mandatory from February 2025 and potential fines up to 35 million euros for non-compliance, this book explains key concepts like CoP, MIIR, and GPAI, helping readers avoid costly mistakes.
            </Card.Description>
            <div className="mt-6 w-full">
              <div className="relative overflow-hidden rounded-lg shadow-md bg-zinc-50 dark:bg-zinc-800/50 p-4">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332585724786937856" 
                  height="1072" 
                  width="504" 
                  frameBorder="0" 
                  allowFullScreen
                  title="Embedded post"
                  className="w-full max-w-full"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>
          </Card>
          
          {/* Conversion Optimization Book */}
          <Books
            title="Conversion Optimization Book"
            description="The first Hungarian book on conversion optimization techniques, featuring media files and eye-tracking results, is now outdated and no longer accessible."
            event="Bader Szabolcs, 2014, 150 pages + CD"
            imageSrc={croImage}
            imageAlt="Conversion Optimization Book"
            imageWidth={533} 
            imageHeight={357} 
          />
        </SpeakingSection>
        
      </div>
    </SimpleLayout>
  )
}
