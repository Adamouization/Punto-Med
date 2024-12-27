import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'

export default function PrivacyPolicy() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <PageIntro eyebrow="Effective Date: December 27, 2024" title="Privacy Policy">
          <p>
            Punto Med S.A.M. (&#34;we,&#34; &#34;our,&#34; or &#34;us&#34;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, <a href="https://puntomed.com/" className="text-blue-500 hover:underline">https://puntomed.com/</a>.
          </p>
          <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">1. Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li><strong>Personal Information</strong>: When you use our contact form, we collect your name and email address (mandatory). Optionally, you may also provide your phone number and company name.</li>
            <li><strong>Non-Personal Information</strong>: We collect web cookies to analyze website performance and improve your user experience.</li>
          </ul>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">2. Purpose of Data Collection</h2>
          <p>We collect your information to:</p>
          <ul className="list-disc list-inside">
            <li>Generate leads.</li>
            <li>Respond to your business inquiries.</li>
          </ul>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">3. Data Sharing</h2>
          <p>We do not share your personal information with any third parties.</p>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">4. Children&#39;s Privacy</h2>
          <p>We do not knowingly collect data from children under 18 years of age. If we become aware of such collection, we will delete the information promptly.</p>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">5. Updates to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you via the email address you provided.</p>
          <h2 className="mt-6 font-display text-2xl font-semibold text-neutral-950">6. Contact Us</h2>
          <p>For any questions or concerns about this Privacy Policy, please contact us via the contact us page, or directly at:</p>
          <p><strong>Email</strong>: <a href="mailto:hello@puntomed.com" className="text-blue-500 hover:underline">hello@puntomed.com</a></p>
          <p className="mt-6">By using our website, you agree to the terms outlined in this Privacy Policy.</p>
        </PageIntro>
      </FadeIn>
    </Container>
  )
}