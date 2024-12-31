import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageIntro from '@/images/Fichier0006.jpeg'
import { loadArticles } from '@/lib/mdx'

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
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="Our strength is collaboration"
        title="About Us"
        image={imageIntro}
      >
        <p>
          With over 40 years of experience serving the Home Appliances industry, we have gathered a certain knowledge and know-how that enables us to provide an unparalleled and unmatched service.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We provide high-quality components and raw materials for manufacturing gas cookers, refrigerators, washing machines, bottle coolers, and freezers, ensuring durability and compliance with global standards. Additionally, we offer flexible solutions for both Complete Knock-Down (CKD) and Completely Built-Up (CBU) products, catering to manufacturers&#39; needs for fully assembled units or on-site assembly. To enhance production efficiency, we supply customized assembly lines for these appliances, complete with installation support and ongoing technical assistance.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Since 1984" label="Experience spanning five decades" />
          <StatListItem value="Global Reach" label="Trusted by clients worldwide" />
          <StatListItem value="Trusted Expertise" label="Home Appliances, Built to Last" />
        </StatList>
      </Container>

      <Culture />

      {/* <Team /> */}

      {/* <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
            title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
