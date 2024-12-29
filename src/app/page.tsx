import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedVideo } from '@/components/custom/StylizedVideo'
import { TestimonialSimple } from '@/components/custom/TestimonialSimple'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

// const clients = [
//   ['Test', logo1968],
//   ['Test', logo1985],
//   ['Test', logo1989],
//   ['Test', logo1993_1],
//   ['Test', logo1993_2],
// ]

// function Clients() {
//   return (
//     <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Delivering Real Value"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Punto Med, we are committed to delivering real value to our customers through expertise, innovation, and unwavering dedication.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Punto Med, we are dedicated to supporting home appliance manufacturers with high-quality components, raw materials, and assembly solutions. With decades of experience and an extensive global network, we deliver reliable, tailored services to meet your production needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              {/* <StylizedImage
                src={imageHomeAppliances}
                shape={0}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              /> */}
              <StylizedVideo
                src="video_products.mp4"
                shape={0}
                className="justify-center lg:justify-end"
                autoPlay
                muted
                loop
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Supply of Components and Raw Materials">
              We specialize in providing premium components and raw materials for the production of gas cookers, refrigerators, washing machines, bottle coolers, freezers.
            </ListItem>
            <ListItem title="Finished and Semi-Finished Products (CKD and CBU)">
              We cater to manufacturers with both Complete Knock-Down (CKD) and Completely Built-Up (CBU) solutions.
            </ListItem>
            <ListItem title="Supply of Assembly Lines">
              To streamline production processes, we offer customized assembly line solutions, including complete tailored assembly lines, installation and setup support, and ongoing technical assistance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.', // TODO: use smaller version of description
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Your Partner in Excellence for Home Appliances
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Rooted in a rich legacy, we specialize in premium components, assembly solutions, and tailored support for gas cookers, refrigerators, washing machines, and more.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <Services />

      <TestimonialSimple
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        Punto Med&#39;s expertise and commitment to quality have been invaluable. Their partnership has helped us deliver exceptional appliances, and we look forward to continuing our collaboration.
      </TestimonialSimple>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
