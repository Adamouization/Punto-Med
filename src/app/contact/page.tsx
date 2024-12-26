import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { ContactForm } from '@/components/custom/ContactForm';





function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Our headquarters in the heart of Monaco reflect our global reach and commitment to excellence, providing a strategic base to serve our partners worldwide.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Reach us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'info@puntomed.com'],
            ['Phone', '+377.97.70.68.86'],
          ].map(([label, value], index) => (
            <div key={value}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                {index === 0 ? (
                  <Link
                    href={`mailto:${value}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {value}
                  </Link>
                ) : (
                  <span className="text-neutral-600">{value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      {/* <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border> */}
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>
          We are here to assist you with any inquiries or requests. Whether you are looking for more information about our products and services or want to discuss a potential collaboration, we can&#39;t wait to hear from you.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
