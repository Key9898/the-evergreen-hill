import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
const AllDayDiningImg = '/DiningAndBar/all_day_dining_dining_bar.jpg'

const posts = [
  {
    id: 1,
    title: 'Salads & Soups',
    description:
      "Fresh from Kalaw's gardens and our kitchen's heart. A refreshing selection of vibrant salads and comforting, flavorful soups.",
    imageAlt: 'Salads & Soups',
    imageUrl: AllDayDiningImg,
    category: { title: 'All-Day Dining' },
    time: { time: 'Served daily from 11:00 AM to 06:00 PM' },
    menu: [
      { no: 1, name: 'Classic Tea Leaf Salad', price: '7,500 MMK' },
      { no: 2, name: 'Evergreen Garden Salad', price: '8,500 MMK' },
      { no: 3, name: 'Classic Caesar Salad', price: '9,000 MMK' },
      { no: 4, name: 'Spicy Beef Salad', price: '10,500 MMK' },
      { no: 5, name: 'Greek Salad', price: '9,500 MMK' },
      { no: 6, name: 'Creamy Mushroom Soup', price: '7,000 MMK' },
      { no: 7, name: 'Shan Chicken & Gourd Soup', price: '6,500 MMK' },
      { no: 8, name: 'Roasted Pumpkin Soup', price: '7,000 MMK' },
      { no: 9, name: 'Creamy Tomato Soup', price: '7,500 MMK' },
      { no: 10, name: 'Tom Yum Goong', price: '9,500 MMK' },
    ],
  },
  {
    id: 2,
    title: 'Main Courses',
    description:
      'For a complete dining experience. Explore our main courses, featuring authentic regional cuisine and beloved international classics.',
    imageAlt: 'Main Courses',
    imageUrl: AllDayDiningImg,
    category: { title: 'All-Day Dining' },
    time: { time: 'Served daily from 11:00 AM to 06:00 PM' },
    menu: [
      { no: 1, name: 'Shan Pork Curry with Rice', price: '12,500 MMK' },
      { no: 2, name: 'Spaghetti Bolognese', price: '13,500 MMK' },
      { no: 3, name: 'Wok-fried Chicken with Nuts', price: '12,000 MMK' },
      { no: 4, name: 'Pan-Seared Lake Fish', price: '15,000 MMK' },
      { no: 5, name: 'Thai Green Curry with Chicken', price: '13,000 MMK' },
      { no: 6, name: 'Spaghetti Carbonara', price: '14,000 MMK' },
      { no: 7, name: 'Grilled Pork Chop', price: '18,000 MMK' },
      { no: 8, name: 'Classic Fish and Chips', price: '14,500 MMK' },
      { no: 9, name: 'Chicken Biryani', price: '13,000 MMK' },
      { no: 10, name: 'Vegetable Lasagna', price: '12,500 MMK' },
    ],
  },
  {
    id: 3,
    title: 'Sandwiches & Burgers',
    description:
      'Hearty, satisfying, and always delicious. Choose from our selection of classic sandwiches and gourmet burgers, all served with a side of crispy fries.',
    imageAlt: 'Sandwiches & Burgers',
    imageUrl: AllDayDiningImg,
    category: { title: 'All-Day Dining' },
    time: { time: 'Served daily from 11:00 AM to 06:00 PM' },
    menu: [
      { no: 1, name: 'The Evergreen Hill Sandwich', price: '13,000 MMK' },
      { no: 2, name: 'Highland Beef Burger', price: '14,500 MMK' },
      { no: 3, name: 'Grilled Vegetable Panini', price: '10,000 MMK' },
      { no: 4, name: 'Spicy Crispy Chicken Burger', price: '13,500 MMK' },
      { no: 5, name: 'Mushroom Swiss Burger', price: '15,000 MMK' },
      { no: 6, name: 'Tuna Melt Sandwich', price: '11,000 MMK' },
      { no: 7, name: 'Philly Cheesesteak Sandwich', price: '14,000 MMK' },
      { no: 8, name: 'Chicken Caesar Wrap', price: '12,000 MMK' },
      { no: 9, name: 'BLT Sandwich', price: '9,500 MMK' },
      { no: 10, name: 'Fish Fillet Sandwich', price: '12,500 MMK' },
    ],
  },
  {
    id: 4,
    title: 'Light Bites & Appetizers',
    description:
      'Perfect for sharing or as a light snack. Discover our collection of delicious appetizers, from local Shan specialties to international favorites.',
    imageAlt: 'Light Bites & Appetizers',
    imageUrl: AllDayDiningImg,
    category: { title: 'All-Day Dining' },
    time: { time: 'Served daily from 11:00 AM to 06:00 PM' },
    menu: [
      { no: 1, name: 'Shan Style Fried Tofu', price: '6,000 MMK' },
      { no: 2, name: 'Vegetable Spring Rolls', price: '6,500 MMK' },
      { no: 3, name: 'Chicken Satay Skewers', price: '8,000 MMK' },
      { no: 4, name: 'French Fries with Truffle Mayo', price: '7,000 MMK' },
      { no: 5, name: 'Bruschetta with Tomato & Basil', price: '7,500 MMK' },
      { no: 6, name: 'Crispy Calamari', price: '9,500 MMK' },
      { no: 7, name: 'Spicy Chicken Wings', price: '9,000 MMK' },
      { no: 8, name: 'Potato Samosas', price: '6,000 MMK' },
      { no: 9, name: 'Gyoza (Chicken or Pork)', price: '8,500 MMK' },
      { no: 10, name: 'Garlic Bread with Cheese', price: '5,500 MMK' },
    ],
  },
]

interface AllDayDiningProps {
  currentPage?: number
  postsPerPage?: number
  renderMode?: 'card'
}

export default function AllDayDining({
  currentPage = 1,
  postsPerPage,
  renderMode,
}: AllDayDiningProps) {
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
