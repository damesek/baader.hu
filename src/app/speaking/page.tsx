import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
            href="https://szinapszis.hu/hu/hirek/kutatas-2012-konferencia"
            title="Automatic, research-free web usability"
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Kutatas 2012"
            cta="Conference Summary page"
          />
        </SpeakingSection>
        
      </div>
    </SimpleLayout>
  )
}
