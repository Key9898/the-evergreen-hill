import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const FoundersImg = '/Team/founders.jpg'

const contact = [
  {
    email: 'founders@evergreenhill.com',
    telephone: '+95 9 450 100 200',
  },
]

interface FoundersCardProps {
  onNavigate?: (page: string) => void
}

export default function FoundersCard({ onNavigate }: FoundersCardProps) {
  const { fadeInLeft, fadeInRight, scaleIn, staggerContainer } = useAnimation()
  return (
    <section className="bg-white py-16 pb-0 sm:py-16 sm:pb-0 lg:py-16 lg:pb-0 rounded-md border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20"
            variants={fadeInLeft}
          >
            <motion.img
              alt="Founders of The Evergreen Hill"
              src={FoundersImg}
              className="w-full h-full object-cover rounded-md"
              variants={scaleIn}
            />
          </motion.div>
          <motion.div
            className="flex flex-col border-t border-slate-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20"
            variants={fadeInRight}
          >
            <figure className="flex flex-auto flex-col justify-between">
              {/* FoundersCard component figcaption section */}
              <figcaption className="mb-6 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-base text-teal-700">
                    U Thet Win & Daw Sandar
                  </div>
                  <div className="mt-1 text-base text-slate-700">
                    "A shared dream, a home for you."
                  </div>
                  <div className="mt-3 flex items-center gap-x-4 flex-wrap">
                    <button
                      type="button"
                      onClick={() => onNavigate?.('ourStory')}
                      aria-label="Go to Our Story"
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-base font-medium text-green-700 inset-ring inset-ring-green-600/20 hover:bg-green-100 transition-colors cursor-pointer"
                    >
                      Founders of The Evergreen Hill
                    </button>

                    {contact.map((person) => (
                      <div key={person.email} className="inline-flex items-center gap-x-4">
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                        >
                          <EnvelopeIcon aria-hidden="true" className="size-5 text-slate-400" />
                          <span className="text-sm font-semibold">Email</span>
                        </a>

                        <span aria-hidden="true" className="h-5 w-px bg-slate-200"></span>

                        <a
                          href={`tel:${person.telephone}`}
                          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                        >
                          <PhoneIcon aria-hidden="true" className="size-5 text-slate-400" />
                          <span className="text-sm font-semibold">Call</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </figcaption>
              <blockquote className="text-lg/8 text-slate-700">
                <p>
                  Our journey with The Evergreen Hill began from{' '}
                  <span className="text-2xl font-semibold text-teal-600">a shared dream.</span> As a
                  husband-and-wife team—one an architect with a passion for heritage, the other a
                  lifelong hotelier—we fell in love with Kalaw's timeless serenity.
                </p>
                <p>
                  We envisioned a place that felt{' '}
                  <span className="text-2xl font-semibold text-teal-600">
                    less like a hotel and more like a cherished friend's home;
                  </span>{' '}
                  a place where elegant colonial design meets the genuine warmth of Shan
                  hospitality. It is our personal promise that every stay with us is filled with
                  comfort, peace, and heartfelt care.
                </p>
              </blockquote>
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
