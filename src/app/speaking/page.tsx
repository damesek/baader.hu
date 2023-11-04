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
    'I’ve spoken at events.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events"
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://www.slideshare.net/baadersz/facebook-research-2014-brightly-labs-full-presentation"
            title="What are you looking at on Facebook?"
            description="UX/UI analysis, attention rate, recall rate, ad effiency"
            event="Facebook AllThings'14 2014"
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
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Kutatas 2012"
            cta="Conference Summary page"
          />
        </SpeakingSection>
        </div>

        <div className="space-y-20 pt-10 mt-10 bg-white dark:bg-transparent">
        <SpeakingSection title="Books"> 
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
