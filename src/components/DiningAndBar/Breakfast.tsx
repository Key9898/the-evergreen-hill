import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const BreakfastImg = '/DiningAndBar/breakfast_dining_bar.jpg'

const posts = [
  {
    id: 1,
    title: 'Shan & Myanmar',
    description:
      'Start your day with the authentic tastes of the region. A curated selection of traditional Shan and Myanmar breakfast dishes, prepared with local love and pride.',
    notice:
      'Breakfast is complimentary for all registered hotel guests. Prices listed are for walk-in guests or for additional orders.',
    imageAlt: 'Shan & Myanmar',
    imageUrl: BreakfastImg,
    category: { title: 'Breakfast' },
    time: { time: 'Served daily from 06:30 AM to 10:00 AM' },
    menu: [
      { no: 1, name: 'Shan Tofu Nway', price: '6,500 MMK' },
      { no: 2, name: 'Mohinga', price: '5,500 MMK' },
      { no: 3, name: 'Coconut Noodle', price: '5,500 MMK' },
      { no: 4, name: 'Nangyi Thoke', price: '6,000 MMK' },
      { no: 5, name: 'Shan Khout Swe', price: '6,000 MMK' },
      { no: 6, name: 'Myay Oh Mee Shay', price: '6,500 MMK' },
      { no: 7, name: 'Pe Byouk with Nanbya', price: '4,500 MMK' },
      { no: 8, name: 'Paratha', price: '4,500 MMK' },
      { no: 9, name: 'Tea', price: '2,000 MMK' },
      { no: 10, name: 'The Evergreen Hill Coffee', price: '2,000 MMK' },
    ],
  },
  {
    id: 2,
    title: 'Western Classics',
    description:
      'For those who crave a timeless classic. From a hearty full breakfast to fluffy pancakes, enjoy your international favorites made with the finest ingredients.',
    notice:
      'Breakfast is complimentary for all registered hotel guests. Prices listed are for walk-in guests or for additional orders.',
    imageAlt: 'Western Classics',
    imageUrl: BreakfastImg,
    category: { title: 'Breakfast' },
    time: { time: 'Served daily from 06:30 AM to 10:00 AM' },
    menu: [
      { no: 1, name: 'The Evergreen Hill Breakfast', price: '12,000 MMK' },
      { no: 2, name: 'Eggs Benedict', price: '11,000 MMK' },
      { no: 3, name: 'Three-Egg Omelette', price: '9,500 MMK' },
      { no: 4, name: 'Fluffy Pancakes', price: '8,500 MMK' },
      { no: 5, name: 'Classic French Toast', price: '8,000 MMK' },
      { no: 6, name: 'Smoked Salmon Bagel', price: '11,500 MMK' },
      { no: 7, name: 'Sausage & Egg Muffin', price: '7,500 MMK' },
      { no: 8, name: 'Steak & Eggs', price: '16,000 MMK' },
      { no: 9, name: 'Shakshuka', price: '9,000 MMK' },
      { no: 10, name: 'Burrito', price: '8,500 MMK' },
    ],
  },
  {
    id: 3,
    title: 'Light & Healthy',
    description:
      'Fuel your day of exploration with our fresh and wholesome options. A vibrant selection of fruits, grains, and proteins to start your morning right.',
    notice:
      'Breakfast is complimentary for all registered hotel guests. Prices listed are for walk-in guests or for additional orders.',
    imageAlt: 'Light & Healthy',
    imageUrl: BreakfastImg,
    category: { title: 'Breakfast' },
    time: { time: 'Served daily from 06:30 AM to 10:00 AM' },
    menu: [
      { no: 1, name: 'Fresh Seasonal Fruit', price: '7,000 MMK' },
      { no: 2, name: 'Avocado Toast', price: '9,000 MMK' },
      { no: 3, name: 'Kalaw Greens Salad', price: '7,000 MMK' },
      { no: 4, name: 'Green Smoothie Bowl', price: '9,500 MMK' },
      { no: 5, name: 'Yogurt & Granola Bowl', price: '7,500 MMK' },
      { no: 6, name: 'Hot Oatmeal Porridge', price: '6,000 MMK' },
      { no: 7, name: 'Egg White Scramble', price: '8,500 MMK' },
      { no: 8, name: 'Congee (Rice Porridge)', price: '6,000 MMK' },
      { no: 9, name: 'Tofu Scramble', price: '8,000 MMK' },
      { no: 10, name: 'Chia Seed Pudding', price: '7,500 MMK' },
    ],
  },
  {
    id: 4,
    title: 'Beverages',
    description:
      'From a robust cup of freshly brewed Shan coffee to a soothing herbal tea, find the perfect drink to awaken your senses and complement your breakfast.',
    notice:
      'Breakfast is complimentary for all registered hotel guests. Prices listed are for walk-in guests or for additional orders.',
    imageAlt: 'Beverages',
    imageUrl: BreakfastImg,
    category: { title: 'Breakfast' },
    time: { time: 'Served daily from 06:30 AM to 10:00 AM' },
    menu: [
      { no: 1, name: 'Freshly Brewed Shan Coffee', price: '3,000 MMK' },
      { no: 2, name: 'Artisanal Shan Tea', price: '2,000 MMK' },
      { no: 3, name: 'Espresso', price: '3,500 MMK' },
      { no: 4, name: 'Americano', price: '3,500 MMK' },
      { no: 5, name: 'Cappuccino', price: '4,000 MMK' },
      { no: 6, name: 'Latte', price: '4,000 MMK' },
      { no: 7, name: 'Rich Hot Chocolate', price: '4,500 MMK' },
      { no: 8, name: 'Fresh Juices & Smoothies', price: '5,000 MMK' },
      { no: 9, name: 'Local Herbal Infusions', price: '3,500 MMK' },
      { no: 10, name: 'Fresh Lime & Mint Soda', price: '4,000 MMK' },
    ],
  },
]

interface BreakfastProps {
  currentPage?: number
  postsPerPage?: number
  renderMode?: 'card'
}

export default function Breakfast({ currentPage = 1, postsPerPage, renderMode }: BreakfastProps) {
  const { fadeInUp, staggerContainer } = useAnimation()
  const perPage = renderMode === 'card' ? 1 : (postsPerPage ?? posts.length)
  const startIndex = (currentPage - 1) * perPage
  const visiblePosts = posts.slice(startIndex, startIndex + perPage)

  if (renderMode === 'card') {
    const post = visiblePosts[0]
    if (!post) return null
    return (
      <motion.article
        className="flex flex-col items-start justify-between rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        <div className="relative w-full group overflow-hidden rounded-md">
          <img
            alt={post.imageAlt}
            src={post.imageUrl}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
        </div>
        <div className="flex max-w-xl grow flex-col justify-between">
          <div className="mt-8 flex items-center gap-x-4 text-base">
            <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
              {post.category.title}
            </span>
            {post.time?.time && <span className="text-slate-500">{post.time.time}</span>}
          </div>
          <div className="group relative grow">
            <h3 className="mt-3 text-xl font-semibold text-teal-700">{post.title}</h3>
            <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
            {post.notice && (
              <p className="mt-3 text-base text-slate-700 rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                <span className="font-semibold text-teal-700">Notice: </span>
                {post.notice}
              </p>
            )}
          </div>
        </div>

        {post.menu && post.menu.length > 0 && (
          <div className="mt-6 w-full overflow-x-auto">
            <table className="relative w-full min-w-full table-fixed divide-y divide-slate-300">
              <colgroup>
                <col className="w-14 sm:w-16" />
                <col />
                <col className="w-24 sm:w-28" />
              </colgroup>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-16 py-3.5 pr-2 pl-0 text-left text-base font-semibold text-teal-600 sm:pl-0"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="pl-2 pr-3 py-3.5 text-left text-base font-semibold text-teal-600"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-3 pr-0 text-right text-base font-semibold text-teal-600"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {post.menu.map((item) => (
                  <tr key={item.no}>
                    <td className="w-16 py-4 pr-2 pl-0 text-sm font-medium whitespace-nowrap text-slate-900 sm:pl-0">
                      {item.no}
                    </td>
                    <td className="pl-2 pr-3 py-4 text-sm whitespace-nowrap text-slate-700">
                      {item.name}
                    </td>
                    <td className="py-4 pl-3 pr-0 text-sm whitespace-nowrap text-right text-slate-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.article>
    )
  }

  return (
    <div className="bg-white">
      <div className="py-16 pt-0 pb-16 lg:py-16 lg:pt-0 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:max-w-none sm:gap-x-6 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.id}
                className={`flex flex-col items-start justify-between ${
                  index % 2 === 0 ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-start-7 lg:col-span-6'
                } rounded-md bg-white ring-1 ring-slate-200 shadow-sm p-4 sm:p-6`}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="relative w-full group overflow-hidden rounded-md">
                  <img
                    alt={post.imageAlt}
                    src={post.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="aspect-video w-full rounded-md shadow-lg bg-slate-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-md shadow-lg inset-ring inset-ring-slate-900/10" />
                </div>
                <div className="flex max-w-xl grow flex-col justify-between">
                  <div className="mt-8 flex items-center gap-x-4 text-base">
                    <span className="relative z-10 rounded-md bg-teal-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-teal-100">
                      {post.category.title}
                    </span>
                    {post.time?.time && <span className="text-slate-500">{post.time.time}</span>}
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-xl font-semibold text-teal-700">{post.title}</h3>
                    <p className="mt-5 text-lg/6 text-slate-700">{post.description}</p>
                    {post.notice && (
                      <p className="mt-3 text-base text-slate-700 rounded-md bg-teal-50 p-4 ring-1 ring-slate-200">
                        <span className="font-semibold text-teal-700">Notice: </span>
                        {post.notice}
                      </p>
                    )}
                  </div>
                </div>

                {post.menu && post.menu.length > 0 && (
                  <div className="mt-6 w-full overflow-x-auto">
                    <table className="relative w-full min-w-full table-fixed divide-y divide-slate-300">
                      <colgroup>
                        <col className="w-14 sm:w-16" />
                        <col />
                        <col className="w-24 sm:w-28" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="w-16 py-3.5 pr-2 pl-0 text-left text-base font-semibold text-teal-600 sm:pl-0"
                          >
                            No.
                          </th>
                          <th
                            scope="col"
                            className="pl-2 pr-3 py-3.5 text-left text-base font-semibold text-teal-600"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-3 pr-0 text-right text-base font-semibold text-teal-600"
                          >
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {post.menu.map((item) => (
                          <tr key={item.no}>
                            <td className="w-16 py-4 pr-2 pl-0 text-sm font-medium whitespace-nowrap text-slate-900 sm:pl-0">
                              {item.no}
                            </td>
                            <td className="pl-2 pr-3 py-4 text-sm whitespace-nowrap text-slate-700">
                              {item.name}
                            </td>
                            <td className="py-4 pl-3 pr-0 text-sm whitespace-nowrap text-right text-slate-700">
                              {item.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
