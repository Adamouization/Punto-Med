'use client'

import { useRef } from 'react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { type ImageProps } from 'next/image'
import { StylizedImage } from '@/components/StylizedImage'

const MotionDiv = motion.div

export function StylizedGrayscaleTransitionImage(
  props: Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority'
  > & {
    alt?: string
    shape?: 0 | 1 | 2
  }
) {
  let ref = useRef<React.ElementRef<'div'>>(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="group relative">
      <MotionDiv style={{ filter }}>
        <StylizedImage {...props} grayscale={false} />
      </MotionDiv>
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <StylizedImage {...props} grayscale={false} />
      </div>
    </div>
  )
}