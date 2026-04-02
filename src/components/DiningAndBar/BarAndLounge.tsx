import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const BarAndLoungeImg = '/DiningAndBar/bar_lounge_dining_bar.jpg'

const posts = [
  {
    id: 1,
    title: 'Wines & Beers',
    description:
      'Whether you prefer a crisp white wine, a bold red, or a refreshing beer, our curated list has you covered. Featuring selections from both local vineyards and renowned international producers.',
    imageAlt: 'Wines & Beers',
    imageUrl: BarAndLoungeImg,
    category: { title: 'Bar & Lounge' },
    time: { time: 'Served daily from 04:00 PM to 11:00 PM' },
    menu: [
      { no: 1, name: 'Aythaya Red (Local)', price: '38,000 MMK' },
      { no: 2, name: 'Aythaya White (Local)', price: '38,000 MMK' },
      { no: 3, name: 'Sauvignon Blanc (Chile)', price: '48,000 MMK' },
      { no: 4, name: 'Cabernet Sauvignon (AUS)', price: '52,000 MMK' },
      { no: 5, name: 'Ros\u00e9 (France)', price: '50,000 MMK' },
      { no: 6, name: 'Myanmar Beer (Draught)', price: '4,000 MMK' },
      { no: 7, name: 'Tiger (Bottle)', price: '5,000 MMK' },
      { no: 8, name: 'Heineken (Bottle)', price: '5,500 MMK' },
      { no: 9, name: 'Corona (Bottle)', price: '7,000 MMK' },
      { no: 10, name: 'Guinness Stout (Can)', price: '6,000 MMK' },
    ],
  },
  {
    id: 2,
    title: 'Cocktails',
    description:
      'A creative collection of handcrafted drinks. Discover our signature cocktails with a local Shan twist, or enjoy a timeless classic mixed to perfection.',
    imageAlt: 'Cocktails',
    imageUrl: BarAndLoungeImg,
    category: { title: 'Bar & Lounge' },
    time: { time: 'Served daily from 04:00 PM to 11:00 PM' },
    menu: [
      { no: 1, name: 'The Evergreen Hill G&T', price: '12,000 MMK' },
      { no: 2, name: 'Kalaw Sunset', price: '11,000 MMK' },
      { no: 3, name: 'Shan Highland Tea Sour', price: '12,500 MMK' },
      { no: 4, name: 'Classic Mojito', price: '9,500 MMK' },
      { no: 5, name: 'Margarita', price: '10,000 MMK' },
      { no: 6, name: 'Negroni', price: '11,000 MMK' },
      { no: 7, name: 'Espresso Martini', price: '12,000 MMK' },
      { no: 8, name: 'Whiskey Sour', price: '10,500 MMK' },
      { no: 9, name: 'Aperol Spritz', price: '11,000 MMK' },
      { no: 10, name: 'Pina Colada', price: '11,000 MMK' },
    ],
  },
  {
    id: 3,
    title: 'Bar Snacks & Platters',
    description:
      'The perfect accompaniment to your drink. Choose from a selection of savory bites, from light snacks to artisanal cheese and charcuterie platters designed for sharing.',
    imageAlt: 'Bar Snacks & Platters',
    imageUrl: BarAndLoungeImg,
    category: { title: 'Bar & Lounge' },
    time: { time: 'Served daily from 04:00 PM to 11:00 PM' },
    menu: [
      { no: 1, name: 'Mixed Nuts & Marinated Olives', price: '6,000 MMK' },
      { no: 2, name: 'Truffle Fries', price: '7,500 MMK' },
      { no: 3, name: 'Crispy Calamari', price: '9,500 MMK' },
      { no: 4, name: 'Spicy Chicken Wings', price: '9,000 MMK' },
      { no: 5, name: 'Mini Chicken Satay Skewers', price: '8,000 MMK' },
      { no: 6, name: 'Bruschetta with Tomato & Basil', price: '7,500 MMK' },
      { no: 7, name: 'Edamame with Sea Salt', price: '5,000 MMK' },
      { no: 8, name: 'Mini Meatballs in Tomato Sauce', price: '9,000 MMK' },
      { no: 9, name: 'Local & Imported Cheese Platter', price: '18,000 MMK' },
      { no: 10, name: 'Charcuterie Board', price: '22,000 MMK' },
    ],
  },
  {
    id: 4,
    title: 'Spirits & Liqueurs',
    description:
      "For the connoisseur. A carefully selected range of the world's finest whiskies, gins, rums, and more. Perfect for sipping slowly to unwind your evening.",
    imageAlt: 'Spirits & Liqueurs',
    imageUrl: BarAndLoungeImg,
    category: { title: 'Bar & Lounge' },
    time: { time: 'Served daily from 04:00 PM to 11:00 PM' },
    menu: [
      { no: 1, name: 'Johnnie Walker Black Label', price: '9,000 MMK' },
      { no: 2, name: 'Glenfiddich 12 Year', price: '14,000 MMK' },
      { no: 3, name: "Jack Daniel's (Bourbon)", price: '8,500 MMK' },
      { no: 4, name: 'Bombay Sapphire (Gin)', price: '9,000 MMK' },
      { no: 5, name: "Hendrick's (Premium Gin)", price: '12,000 MMK' },
      { no: 6, name: 'Absolut (Vodka)', price: '8,000 MMK' },
      { no: 7, name: 'Bacardi (White Rum)', price: '8,000 MMK' },
      { no: 8, name: 'Jose Cuervo (Tequila)', price: '8,500 MMK' },
      { no: 9, name: 'Hennessy V.S.O.P (Cognac)', price: '15,000 MMK' },
      { no: 10, name: 'Baileys Irish Cream (Liqueur)', price: '9,000 MMK' },
    ],
  },
]

interface BarAndLoungeProps {
  currentPage?: number
  postsPerPage?: number
  renderMode?: 'card'
}

export default function BarAndLounge({
  currentPage = 1,
  postsPerPage,
  renderMode,
}: BarAndLoungeProps) {
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
