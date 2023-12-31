import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import referencesImage from '@/images/logos/references.jpg'

const projects = [
  {
    name: 'Clojure wrapper of Magyarlanc',
    description:
      'Clojurized access and OpenAPI to Magyarlanc toolkit for linguistic processing of Hungarian.',
    link: { href: 'https://github.com/damesek/eszterlanc', label: 'eszterlanc' },
    version: 'shipped v0.3.2'
    
  },
  {
    name: 'Contribution to the openai-clojure',
    description:
      'Clojure functions to drive the OpenAI API and Azure OpenAI API.',
    link: { href: 'https://github.com/wkok/openai-clojure', label: 'openai-clojure' },
    version: 'to v0.12.2'
    
  }
  
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I have created while trying to leave a mark in the Clojure community.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've created while trying to leave a mark in the Clojure community."
      intro="I’ve worked on tons of digital projects for small and big clients. Here I would like to collect just the community related projects."
    >
      
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 group-hover:text-teal-500  dark:text-zinc-200">
                      <span className="pl-12">{project.version}</span>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
            </p>
          </Card>
        ))}
      </ul>

      <div className="mt-10 max-w-xs px-2.5 lg:max-w-none p-20 w-4/5 h-20">
          <p className="mb-3 text-md font-light text-gray-600  dark:text-zinc-200">I feel privileged that so many have trusted me and I&apos;ve been able to work on amazing projects. Just a few:</p>
            <Image
              src={referencesImage}
              alt=""
              className="mt-5 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:-translate-y-0.5 hover:transition ease-in-out hover:duration-300"
            />
          </div>
    </SimpleLayout>
  )
}
