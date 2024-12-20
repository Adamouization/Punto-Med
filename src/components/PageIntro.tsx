import clsx from 'clsx'
import { StylizedImage } from '@/components/StylizedImage'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
  image,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
  image?: React.ComponentPropsWithoutRef<typeof StylizedImage>
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <div className={clsx('lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20', centered && 'lg:justify-center')}>
        <FadeIn className="flex-1">
          <h1>
            <span className="block font-display text-base font-semibold text-neutral-950">
              {eyebrow}
            </span>
            <span className="sr-only"> - </span>
            <span
              className={clsx(
                'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
                centered && 'mx-auto',
              )}
            >
              {title}
            </span>
          </h1>
          <div
            className={clsx(
              'mt-6 max-w-3xl text-xl text-neutral-600',
              centered && 'mx-auto',
            )}
          >
            {children}
          </div>
        </FadeIn>

        {image && (
          <div className="mt-10 flex justify-center lg:mt-0 lg:flex-1">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                {...image}
                shape = {0}
                grayscale = {false}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center"
              />
            </FadeIn>
          </div>
        )}
      </div>
    </Container>
  )
}