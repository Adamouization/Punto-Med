import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Supply" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We specialize in providing premium components and raw materials for the production of:
        </p>
        <ul>
          <li>Gas cookers</li>
          <li>Refrigerators</li>
          <li>Washing machines</li>
          <li>Bottle coolers</li>
          <li>Freezers</li>
        </ul>
        <p>
          Our materials and components are sourced to ensure durability, efficiency, and compliance with global quality standards, helping manufacturers achieve excellence in their products.
        </p>
        {/* We work closely with our clients to understand their{' '} */}
        {/* <strong className="font-semibold text-neutral-950">needs</strong> and */}
      </div>

      {/* list of tags */}
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function Build() {
  return (
    <Section title="Finished and Semi-Finished Products" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We cater to manufacturers with both Complete Knock-Down (CKD) and Completely Built-Up (CBU) solutions for:
        </p>
        <ul>
          <li>Gas cookers</li>
          <li>Refrigerators</li>
          <li>Washing machines</li>
        </ul>
        <p>
          Whether you need fully assembled units or parts for on-site assembly, we provide flexible options to fit your manufacturing requirements.
        </p>
      </div>

      {/* blockquote */}
      {/* <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Assembly Lines Supply" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          To streamline production processes, we offer customized assembly line solutions.
        </p>
        {/* <ul>
          <li>Complete assembly lines tailored for gas cookers, refrigerators, and washing machines.</li>
          <li>Installation and setup support to optimize manufacturing efficiency.</li>
          <li>Ongoing technical assistance to ensure smooth operations and minimal downtime.</li>
        </ul> */}
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Tailored Assembly Lines">
          Complete assembly lines tailored for gas cookers, refrigerators, and washing machines.
        </ListItem>
        <ListItem title="Support">
          Installation and setup support to optimize manufacturing efficiency.
        </ListItem>
        <ListItem title="Assistance">
          Ongoing technical assistance to ensure smooth operations and minimal downtime.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Why Choose Punto Med?"
      >
        <p>
          Let us help you enhance your production capabilities and achieve operational excellence.
        </p>
      </SectionIntro>

      {/* : 
    ⁃    : 
    ⁃    : 
    ⁃    :  */}

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Extensive Experience">
            Over five decades in the home appliances industry.
          </GridListItem>
          <GridListItem title="Custom Solutions">
            Tailored services to meet the unique needs of each manufacturer.
          </GridListItem>
          <GridListItem title="Global Reach">
            Trusted by partners worldwide with supply and assembly expertise.
          </GridListItem>
          <GridListItem title="Commitment to Quality">
            Delivering materials, components, and solutions that meet the highest standards.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our Services" title="How we work">
        <p>
          At Punto Med, we are dedicated to supporting home appliance manufacturers with high-quality components, raw materials, and assembly solutions. With decades of experience and an extensive global network, we deliver reliable, tailored services to meet your production needs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
