import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageIntro from '@/images/about/china.png'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Quality, Service, Flexibility, and Competitiveness – Always Our Promise, Always for You."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation at Heart" invert>
            Constantly driving progress through creative solutions and forward-thinking strategies.
          </GridListItem>
          <GridListItem title="Global Collaboration" invert>
            Building strong partnerships across continents for mutual growth and success.
          </GridListItem>
          <GridListItem title="Customer-Centric Approach" invert>
            Prioritizing our clients&#39; needs with tailored solutions and dedicated support.
          </GridListItem>
          <GridListItem title="Integrity and Trust" invert>
            Upholding transparency, honesty, and reliability in every interaction.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Punto Med: decades of expertise, global partnerships, and innovation in the home appliances industry, delivering quality since 1984.',
}

export default async function About() {

  return (
    <>
      <PageIntro
        eyebrow="Our strength is collaboration"
        title="About Us"
        image={imageIntro}
      >
        <p>
          With over 40 years of experience serving the Home Appliances industry, we have gathered a speccific knowledge and know-how that enables us to provide an unparalleled and unmatched service.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We provide high-quality personalized home appliances to distributors and retailers, as well as components and raw materials to manufacturers of gas cookers, refrigerators, washing machines, bottle coolers, and freezers, ensuring durability and compliance with global standards. Additionally, we offer flexible solutions for both Complete Knock-Down (CKD) and Completely Built-Up (CBU) products, catering to clients' needs for fully assembled units or on-site assembly. To enhance production efficiency, we supply customized assembly lines for these appliances, complete with installation support and ongoing technical assistance.          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Since 1984" label="Experience spanning five decades" />
          <StatListItem value="Global Reach" label="Trusted by clients worldwide" />
          <StatListItem value="Trusted Expertise" label="Home Appliances, built to last" />
        </StatList>
      </Container>

      <Culture />

      {/* <Team /> */}

      <ContactSection />
    </>
  )
}
