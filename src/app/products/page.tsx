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
import { StyledList } from '@/components/custom/StyledList';
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

function GasCookers() {

  // const gazCookerSizes = [
  //   '20”', 
  //   '24”',
  //   '30”'
  // ];

  return (
    <Section title="Gas Cookers" image={{ src: imageWhiteboard, shape: 0 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our gas cookers combine efficiency and versatility, and are available in multiple sizes to suit all your needs.
        </p>
        <p>
          Sizes: 20”, 24”, and 30”.
        </p>
        <p>
          Built for durability and user convenience, perfect for domestic and commercial applications.
        </p>
      </div>
    </Section>
  )
}

function TableCookers() {

  return (
    <Section title="Table Cookers" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Compact and efficient, our table cookers are designed for smaller spaces without compromising performance.
        </p>
        <p>
          Options: 2-burner and 4-burner configurations.
        </p>
        <p>
          Ideal for portable or limited-space cooking requirements.
        </p>
      </div>
    </Section>
  )
}

function Refrigerators() {
  return (
    <Section title="Refrigerators" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We provide a variety of refrigerators suitable for different applications, combining energy efficiency with optimal storage solutions.
        </p>
        <p>
          Designed to meet household and commercial needs.
        </p>
        <p>
          Reliable and energy-efficient cooling technology.
        </p>
      </div>
    </Section>
  )
}

function WashingMachines() {
  return (
    <Section title="Washing Machines" image={{ src: imageMeeting, shape: 0 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our washing machines are built for performance, catering to diverse load capacities and requirements:
        </p>
        <p>
          Capacity Range: From 5 kg to 18 kg.
        </p>
        <p>
          Engineered for energy efficiency, durability, and superior washing performance.
        </p>
      </div>
    </Section>
  )
}

function BottleCoolersAndChestFreezers() {
  return (
    <Section title="Bottle Coolers & Chest Freezers" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We offer bottle coolers designed for effective cooling and maximum storage efficiency, and we offer freezers designed to handle storage needs for both domestic and commercial use.
        </p>
        <p>
          Capacity: Starting from 100L and above.
        </p>
        <p>
          Bottle Coolers door options: Available with hinged or sliding doors.
        </p>
        <p>
          Freezers: built to maintain consistent freezing performance for long-term use.
        </p>
      </div>
    </Section>
  )
}

function WhyChooseOurProducts() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our products"
        title="Why Choose Our Products?"
      >
        <p>
          Explore our comprehensive product portfolio and discover solutions that elevate your manufacturing capabilities.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Versatility">
            A wide range of sizes and configurations to suit various market needs.
          </GridListItem>
          <GridListItem title="Quality Assurance">
            Built with durable materials to ensure longevity and reliability.
          </GridListItem>
          <GridListItem title="Energy Efficiency">
            Designed to reduce operational costs without compromising performance.
          </GridListItem>
          <GridListItem title="Customization">
            Options to tailor appliances to your specific requirements.
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

export default function Products() {
  return (
    <>
      <PageIntro eyebrow="Our Products" title="What we offer">
        <p>
          At Punto Med, we pride ourselves on offering a diverse range of high-quality home appliances tailored to meet the needs of manufacturers and markets around the globe. From compact solutions to large-scale appliances, our products are designed with functionality, durability, and efficiency in mind.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <GasCookers />
        <TableCookers />
        <Refrigerators />
        <WashingMachines />
        <BottleCoolersAndChestFreezers />
      </div>

      <WhyChooseOurProducts />

      <ContactSection />
    </>
  )
}
