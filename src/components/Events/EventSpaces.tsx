import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const OutdoorEventSpacesImg = '/Events/outdoor_celebrations_events.jpg'
const IndoorEventSpacesImg = '/Events/indoor_gathering_events.jpg'
const LibraryLoungeEventSpacesImg = '/Events/library_lounge_events.jpg'
const PoolsideDeckEventSpacesImg = '/Events/poolside_deck_events.jpg'
const EvergreenHillDiningEventSpacesImg = '/Events/evergreen_hill_dining_events.jpg'

export default function EventSpaces() {
  const { fadeInUp, staggerContainer } = useAnimation()

  return (
    <div className="bg-white pb-16 sm:pb-16 lg:pb-16">
      <div className="mx-auto max-w-2xl px-6 sm:max-w-none sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="relative lg:col-span-3"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 rounded-md bg-white max-lg:rounded-t-md lg:rounded-tl-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-md)+1px)] max-lg:rounded-t-md lg:rounded-tl-[calc(var(--radius-md)+1px)] group overflow-hidden rounded-md">
              <img
                alt="Outdoor Celebrations Events"
                src={OutdoorEventSpacesImg}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-80 lg:h-95 object-cover object-left group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 pt-6 pl-7 pb-6 sm:pl-7 lg:pl-6 lg:pb-4">
                <h3 className="text-base font-semibold text-teal-600 underline">
                  Scenic Outdoor Celebrations
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-teal-700">
                  The Garden Terrace
                </p>
                <p className="mt-2 max-w-lg text-base text-slate-700">
                  Our stunning outdoor terrace offers a breathtaking backdrop of the Kalaw hills,
                  perfect for open-air ceremonies and elegant receptions. Create unforgettable
                  moments under the open sky.
                </p>
                <p className="mt-2 max-w-lg text-base text-teal-600">Capacity: Up to 100 guests</p>
                <p className="mt-2 max-w-lg text-base text-teal-600">
                  Ideal for: Weddings, Anniversary Celebrations, Social Gatherings
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-md shadow-sm outline outline-black/5 max-lg:rounded-t-md lg:rounded-tl-md" />
          </motion.div>

          <motion.div
            className="relative lg:col-span-3"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 rounded-md bg-white lg:rounded-tr-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-md)+1px)] lg:rounded-tr-[calc(var(--radius-md)+1px)] group overflow-hidden rounded-md">
              <img
                alt="Indoor Gathering Events"
                src={IndoorEventSpacesImg}
                className="h-80 lg:h-95 object-cover object-left lg:object-right group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 pt-6 pl-7 pb-6 sm:pl-7 lg:pl-6 lg:pb-4">
                <h3 className="text-base font-semibold text-teal-600 underline">
                  Elegant Indoor Gatherings
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-teal-700">
                  The Highland Room
                </p>
                <p className="mt-2 max-w-lg text-base text-slate-700">
                  A versatile and elegant indoor space equipped with modern audiovisual technology.
                  This room can be configured to suit everything from a professional workshop to an
                  intimate dinner.
                </p>
                <p className="mt-2 max-w-lg text-base text-teal-600">Capacity: Up to 50 guests</p>
                <p className="mt-2 max-w-lg text-base text-teal-600">
                  Ideal for: Corporate Meetings / Workshops, Private Dinners, Birthday Parties
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-md shadow-sm outline outline-black/5 lg:rounded-tr-md" />
          </motion.div>

          <motion.div
            className="relative lg:col-span-2"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 rounded-md bg-white lg:rounded-bl-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-md)+1px)] lg:rounded-bl-[calc(2rem+1px)] group overflow-hidden rounded-md">
              <img
                alt="The Library Lounge Events"
                src={LibraryLoungeEventSpacesImg}
                className="h-80 object-cover object-left group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 pt-6 pl-7 pb-6 sm:pl-7 lg:pl-6">
                <h3 className="text-base font-semibold text-teal-600 underline">
                  Intimate Gatherings
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-teal-700">
                  The Library Lounge
                </p>
                <p className="mt-2 max-w-lg text-base text-slate-700">
                  With its cozy fireplace and classic décor, our Library Lounge provides a warm and
                  intimate setting for smaller, more personal gatherings or cocktail receptions.
                </p>
                <p className="mt-2 max-w-lg text-base text-teal-600">Capacity: Up to 20 guests</p>
                <p className="mt-2 max-w-lg text-base text-teal-600">
                  Ideal for: Social Gatherings, Small Birthday Parties, Welcome Drinks
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-md shadow-sm outline outline-black/5 lg:rounded-bl-md" />
          </motion.div>

          <motion.div
            className="relative lg:col-span-2"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 rounded-md bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-md)+1px)] group overflow-hidden rounded-md">
              <img
                alt="The Poolside Deck Events"
                src={PoolsideDeckEventSpacesImg}
                className="h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 pt-6 pl-7 pb-6 sm:pl-7 lg:pl-6">
                <h3 className="text-base font-semibold text-teal-600 underline">
                  Casual & Modern Parties
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-teal-700">
                  The Poolside Deck
                </p>
                <p className="mt-2 max-w-lg text-base text-slate-700">
                  For a relaxed and modern atmosphere, our poolside deck offers a chic setting for
                  cocktail parties or evening social events, complete with ambient lighting and
                  stunning views.
                </p>
                <p className="mt-2 max-w-lg text-base text-teal-600">Capacity: Up to 40 guests</p>
                <p className="mt-2 max-w-lg text-base text-teal-600">
                  Ideal for: Cocktail Parties, Social Gatherings, Product Launches
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-md shadow-sm outline outline-black/5" />
          </motion.div>

          <motion.div
            className="relative lg:col-span-2"
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 rounded-md bg-white max-lg:rounded-b-md lg:rounded-br-md" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-md)+1px)] max-lg:rounded-b-md lg:rounded-br-[calc(var(--radius-md)+1px)] group overflow-hidden rounded-md">
              <img
                alt="The Evergreen Suite Dining Events"
                src={EvergreenHillDiningEventSpacesImg}
                className="h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8 pt-6 pl-7 pb-6 sm:pl-7 lg:pl-6">
                <h3 className="text-base font-semibold text-teal-600 underline">
                  Exclusive VIP Dinners
                </h3>
                <p className="mt-2 text-xl font-medium tracking-tight text-teal-700">
                  The Evergreen Suite Dining
                </p>
                <p className="mt-2 max-w-lg text-base text-slate-700">
                  For the ultimate exclusive experience, the dining area of our top suite can be
                  reserved for VIP private dinners, offering unparalleled luxury and personalized
                  butler service.
                </p>
                <p className="mt-2 max-w-lg text-base text-teal-600">Capacity: Up to 8 guests</p>
                <p className="mt-2 max-w-lg text-base text-teal-600">
                  Ideal for: VIP Private Dinners, Exclusive Company Retreats
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-md shadow-sm outline outline-black/5 max-lg:rounded-b-md lg:rounded-br-md" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
