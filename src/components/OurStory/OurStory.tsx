import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { Header } from '../Layout'
import { Footer } from '../Layout'
import { ScrollToTopButton } from '../Layout'
import OurStoryBanner from './OurStoryBanner'
import AmenitiesCards from './AmenitiesCards'
import OurStoryCTA from './OurStoryCTA'
const StoryOneImg = '/OurStory/story_one_img.jpg'
const StoryTwoImg = '/OurStory/story_two_img.jpg'
const StoryThreeImg = '/OurStory/story_three_img.jpg'
const StoryFourImg = '/OurStory/story_four_img.jpg'

interface OurStoryProps {
  onNavigate?: (page: string) => void
}

export default function OurStory({ onNavigate }: OurStoryProps) {
  const { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } = useAnimation()

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} activePage="ourStory" />
      <div className="relative -mt-40 sm:-mt-44 lg:-mt-48">
        <OurStoryBanner onNavigate={onNavigate} />
      </div>

      <div className="bg-white relative z-20">
        <div className="mx-auto max-w-7xl px-6 sm:py-16 lg:px-8 py-16 lg:pb-6">
          <div className="mx-auto md:mx-0 md:max-w-none">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-teal-600">
                  The Story of The Evergreen Hill
                </h2>
                <p className="text-lg/8 mt-6 text-slate-700">
                  Our story begins not with bricks and mortar, but with{' '}
                  <span className=" font-semibold text-2xl text-teal-600">
                    {' '}
                    a deep affection for Kalaw.
                  </span>{' '}
                  We were captivated by its tranquil hills, the crisp scent of pine in the air, and
                  the timeless charm of its colonial past. We dreamed of creating a place that
                  wasn't just a hotel, but a true sanctuary where others could experience this
                  unique serenity.
                </p>
                <p className="text-lg/8 mt-2 text-slate-700">
                  Inspired by the region's rich{' '}
                  <span className=" font-semibold text-2xl text-teal-600">colonial heritage,</span>{' '}
                  The Evergreen Hill was born from a vision to honor this elegant past while
                  embracing the comforts of modern luxury. Every detail, from the classic
                  architectural lines to the locally sourced materials, was thoughtfully chosen to
                  create a space that feels both grand and intuitively welcoming.
                </p>
                <p className="text-lg/8 mt-2 text-slate-700">
                  Today, The Evergreen Hill stands as a testament to that dream. It is more than a
                  building on a hill; it is a backdrop for your stories,{' '}
                  <span className=" font-semibold text-2xl text-teal-600">
                    a haven for your peace of mind,
                  </span>{' '}
                  and our heartfelt invitation to you to discover the soul of Kalaw. Welcome to our
                  story.
                </p>
                <div className="mt-8 border-b border-slate-200"></div>
                <div className="mt-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-teal-600">
                    The Heart of Our Hospitality
                  </h2>
                  <p className="text-lg/8 mt-4 text-slate-700">
                    We believe{' '}
                    <span className=" font-semibold text-2xl text-teal-600">true hospitality</span>{' '}
                    is not found in grand gestures, but in the quiet, sincere details. It's in the
                    warmth of a genuine smile, the thoughtful anticipation of your needs, and the
                    creation of a space where you feel not just welcomed, but truly at peace.
                  </p>
                  <p className="text-lg/8 mt-2 text-slate-700">
                    Our philosophy is simple: to be your serene home in the Shan hills. We are
                    dedicated to providing intuitive, heartfelt service that allows you to
                    disconnect from the world and reconnect with what truly matters. Your comfort,{' '}
                    <span className="text-2xl font-semibold text-teal-600">
                      {' '}
                      "your memories, and your sense of tranquility are the true measures of our
                      success."
                    </span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="pt-14 sm:pt-14 lg:pt-32 lg:row-span-2 lg:-mr-16 xl:mr-auto"
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
              >
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:gap-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <motion.div
                    variants={fadeInUp}
                    className="aspect-square group overflow-hidden rounded-md shadow-lg outline-1 -outline-offset-1 outline-black/10"
                  >
                    <img
                      alt="Our Story One image"
                      src={StoryOneImg}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="size-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="-mt-8 aspect-square group overflow-hidden rounded-md shadow-lg outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
                  >
                    <img
                      alt="Our Story Two image"
                      src={StoryTwoImg}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="size-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="aspect-square group overflow-hidden rounded-md shadow-lg outline-1 -outline-offset-1 outline-black/10"
                  >
                    <img
                      alt="Our Story Three image"
                      src={StoryThreeImg}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="size-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    className="-mt-8 aspect-square group overflow-hidden rounded-md shadow-lg outline-1 -outline-offset-1 outline-black/10 lg:-mt-40"
                  >
                    <img
                      alt="Our Story Four image"
                      src={StoryFourImg}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="size-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AmenitiesCards onNavigate={onNavigate} />
      <OurStoryCTA onNavigate={onNavigate} />
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
