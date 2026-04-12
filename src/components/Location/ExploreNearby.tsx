import { motion } from 'framer-motion'
import { useAnimation } from '../../hooks/useAnimation'
import { useWeather } from '../../hooks/useWeather'
import {
  LuClock,
  LuMapPin,
  LuMountain,
  LuCloudSun,
  LuThermometer,
  LuWind,
  LuDroplets,
  LuSun,
  LuCloud,
  LuCloudRain,
  LuCloudFog,
  LuSnowflake,
  LuCloudLightning,
  LuCloudDrizzle,
  LuRefreshCw,
} from 'react-icons/lu'

const KALAW_ELEVATION = 1310

const CLIMATE_INFO = {
  avgTempRange: '12°C - 25°C',
  bestSeason: 'Oct - Apr',
  description: 'Cool highland climate with misty mornings and pleasant afternoons',
}

const nearbyAttractions = [
  {
    id: 1,
    title: 'Kalaw Central Market',
    description:
      'Immerse yourself in local life at this vibrant market, famous for its fresh produce, Shan noodles, and colorful goods from surrounding hill tribes.',
    image: '/Location/kalaw_central_market.png',
    distance: '1.5 km',
    driveTime: '5 min',
    type: 'Market',
  },
  {
    id: 2,
    title: 'Scenic Trekking Trails',
    description:
      'Kalaw is the trekking capital of Myanmar. Allow us to arrange a guided trek, from a few hours to a multi-day adventure, through pine forests and local villages.',
    image: '/Location/trekking_trails.jpg',
    distance: 'From hotel',
    driveTime: 'Start here',
    type: 'Adventure',
  },
  {
    id: 3,
    title: 'Historic Railway Station',
    description:
      "Step back in time at this beautiful, well-preserved colonial-era train station, a perfect spot for photos and soaking in the town's history.",
    image: '/Location/historic_railway_station.jpg',
    distance: '2 km',
    driveTime: '5 min',
    type: 'Heritage',
  },
  {
    id: 4,
    title: 'Hnee Paya (Bamboo Buddha)',
    description:
      'Visit this unique and revered pagoda, home to a 500-year-old Buddha image woven from bamboo strips. A must-see spiritual landmark in Kalaw.',
    image: '/Location/hnee_paya_bamboo_buddha.png',
    distance: '4 km',
    driveTime: '10 min',
    type: 'Temple',
  },
  {
    id: 5,
    title: 'Inle Lake',
    description:
      "Myanmar's most famous lake, known for its floating villages, leg-rowing fishermen, and stunning sunsets. A UNESCO Biosphere Reserve.",
    image: '/Location/inle_lake.jpg',
    distance: '35 km',
    driveTime: '45 min',
    type: 'Nature',
  },
  {
    id: 6,
    title: 'Shwe Oo Min Cave',
    description:
      'A natural limestone cave filled with thousands of Buddha images, creating an otherworldly atmosphere. A sacred pilgrimage site.',
    image: '/Location/shwe_oo_min_cave.jpg',
    distance: '3 km',
    driveTime: '8 min',
    type: 'Cave',
  },
  {
    id: 7,
    title: 'Pindaya Caves',
    description:
      'Famous cave complex housing over 8,000 Buddha statues, set beside a serene lake. The journey offers stunning countryside views.',
    image: '/Location/pindaya_caves.jpg',
    distance: '50 km',
    driveTime: '1 hr',
    type: 'Cave',
  },
  {
    id: 8,
    title: 'Green Hill Valley Elephant Camp',
    description:
      'An ethical elephant sanctuary where retired logging elephants enjoy their golden years. Feed, bathe, and walk with these gentle giants.',
    image: '/Location/green_hill_valley_elephant_camp.png',
    distance: '25 km',
    driveTime: '35 min',
    type: 'Wildlife',
  },
]

const WEATHER_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sun: LuSun,
  CloudSun: LuCloudSun,
  Cloud: LuCloud,
  CloudRain: LuCloudRain,
  CloudFog: LuCloudFog,
  Snowflake: LuSnowflake,
  CloudLightning: LuCloudLightning,
  CloudDrizzle: LuCloudDrizzle,
}

interface ExploreNearbyProps {
  onNavigate?: (page: string) => void
}

export default function ExploreNearby({ onNavigate }: ExploreNearbyProps) {
  void onNavigate
  const { fadeInDown, fadeInUp, staggerContainer } = useAnimation()
  const { weather, condition, isLoading, error, refetch } = useWeather()

  const WeatherIcon = condition ? WEATHER_ICONS[condition.icon] || LuCloud : LuCloud

  return (
    <div className="relative isolate bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeInDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-teal-600">
            Explore Nearby
          </h2>
          <p className="mt-6 text-lg/8 text-slate-700">
            The Evergreen Hill is the perfect base from which to discover the charms of Kalaw and
            its beautiful surroundings.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 p-6 text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-white/20">
                <LuMountain className="size-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-teal-100">Elevation</p>
                <p className="text-2xl font-bold">{KALAW_ELEVATION.toLocaleString()} m</p>
              </div>
            </div>
            <p className="text-sm text-teal-100">
              Nestled in the Shan Highlands, Kalaw sits at an elevation of{' '}
              {KALAW_ELEVATION.toLocaleString()} meters above sea level, offering cool, refreshing
              mountain air year-round.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-6 text-white shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-12 rounded-full bg-white/20">
                  {isLoading ? (
                    <LuCloudSun className="size-6 animate-pulse" />
                  ) : (
                    <WeatherIcon className="size-6" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-amber-100">
                    {isLoading ? 'Loading...' : condition?.label || 'Weather'}
                  </p>
                  <p className="text-2xl font-bold">
                    {isLoading ? '--°' : `${weather?.temperature ?? '--'}°C`}
                  </p>
                </div>
              </div>
              <button
                onClick={refetch}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                title="Refresh weather"
              >
                <LuRefreshCw className="size-4" />
              </button>
            </div>

            {error ? (
              <p className="text-sm text-amber-100">Unable to load weather data</p>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-3 text-sm text-amber-100">
                  <div className="flex items-center gap-1">
                    <LuThermometer className="size-4" />
                    <span>{CLIMATE_INFO.avgTempRange}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuDroplets className="size-4" />
                    <span>{weather?.humidity ?? '--'}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuWind className="size-4" />
                    <span>{weather?.windSpeed ?? '--'} km/h</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-amber-100">{CLIMATE_INFO.description}</p>
              </>
            )}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-white/20">
                <LuMapPin className="size-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-300">Location</p>
                <p className="text-lg font-bold leading-tight">Shan State, Myanmar</p>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              A charming hill station town, Kalaw serves as the gateway to the Shan Highlands and
              offers easy access to Inle Lake and surrounding attractions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
        >
          {nearbyAttractions.map((attraction) => (
            <motion.article
              key={attraction.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-teal-700">
                    {attraction.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-semibold text-teal-700">{attraction.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
                  {attraction.description}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <LuMapPin className="size-3.5 text-teal-600" />
                    <span>{attraction.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuClock className="size-3.5 text-teal-600" />
                    <span>{attraction.driveTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-xs text-slate-400">
            Weather data provided by{' '}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 underline"
            >
              Open-Meteo
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
