const TheEvergreenHillEstate = '/Gallery/the_evergreen_hill_estate_gallery.jpg'
const AWarmWelcome = '/Gallery/A_warm_welcome_gallery.jpg'
const KalawGoldenHour = '/Gallery/kalaw_golden_hour_gallery.jpg'
const AmidstThePineForests = '/Gallery/amidst_the_pine_forests_gallery.jpg'
const DeluxeGardenGallery = '/Gallery/deluxe_garden_gallery.jpg'
const DeluxeMountainGallery = '/Gallery/deluxe_mountain_gallery.jpg'
const HoneymoonSuiteGallery = '/Gallery/honeymoon_suite_galllery.jpg'
const TheEvergreenHillSuiteGallery = '/Gallery/the_evergreen_hill_suite_gallery.jpg'
const DeluxeTwinGardenGallery = '/Gallery/deluxe_twin_garden_gallery.jpg'
const DeluxeTwinMountainGallery = '/Gallery/deluxe_twin_mountain_gallery.jpg'
const FamilySuiteGallery = '/Gallery/family_suite_gallery.jpg'
const ExecutiveSuiteGallery = '/Gallery/executive_suite_gallery.jpg'
const MountainViewDining = '/Gallery/mountain_view_dinning_gallery.jpg'
const AuthenticShanCuisine = '/Gallery/authentic_shan_cuisine_gallery.jpg'
const EveningCocktails = '/Gallery/evening_cocktails_galllery.jpg'
const BreakfastView = '/Gallery/breakfast_view_gallery.jpg'
const TranquilTreatment = '/Gallery/tranquil_treatment_gallery.jpg'
const TraditionalShanMassage = '/Gallery/traditional_shan_massage_gallery.jpg'
const HotelFitnessCenter = '/Gallery/hotel_fitness_center_gallery.jpg'
const PoolsideRelaxation = '/Gallery/poolside_relaxation_gallery.jpg'
const MorningYoga = '/Gallery/morning_yoga_galllery.jpg'
const GuidedMountainTreks = '/Gallery/guided_mountain_treks_gallery.jpg'
const CyclingTour = '/Gallery/cycling_gallery.jpg'
const LocalMarket = '/Gallery/local_market_gallery.jpg'

export interface GalleryItem {
  titleKey: string
  category: string
  source: string
  imgAltKey: string
}

export const allFiles: GalleryItem[] = [
  {
    titleKey: 'estate',
    category: 'The Hotel & Scenery',
    source: TheEvergreenHillEstate,
    imgAltKey: 'estate',
  },
  {
    titleKey: 'welcome',
    category: 'The Hotel & Scenery',
    source: AWarmWelcome,
    imgAltKey: 'welcome',
  },
  {
    titleKey: 'goldenHour',
    category: 'The Hotel & Scenery',
    source: KalawGoldenHour,
    imgAltKey: 'goldenHour',
  },
  {
    titleKey: 'pineForests',
    category: 'The Hotel & Scenery',
    source: AmidstThePineForests,
    imgAltKey: 'pineForests',
  },
  {
    titleKey: 'deluxeGarden',
    category: 'Rooms & Suites',
    source: DeluxeGardenGallery,
    imgAltKey: 'deluxeGarden',
  },
  {
    titleKey: 'deluxeMountain',
    category: 'Rooms & Suites',
    source: DeluxeMountainGallery,
    imgAltKey: 'deluxeMountain',
  },
  {
    titleKey: 'honeymoonSuite',
    category: 'Rooms & Suites',
    source: HoneymoonSuiteGallery,
    imgAltKey: 'honeymoonSuite',
  },
  {
    titleKey: 'evergreenSuite',
    category: 'Rooms & Suites',
    source: TheEvergreenHillSuiteGallery,
    imgAltKey: 'evergreenSuite',
  },
  {
    titleKey: 'deluxeTwinGarden',
    category: 'Rooms & Suites',
    source: DeluxeTwinGardenGallery,
    imgAltKey: 'deluxeTwinGarden',
  },
  {
    titleKey: 'deluxeTwinMountain',
    category: 'Rooms & Suites',
    source: DeluxeTwinMountainGallery,
    imgAltKey: 'deluxeTwinMountain',
  },
  {
    titleKey: 'familySuite',
    category: 'Rooms & Suites',
    source: FamilySuiteGallery,
    imgAltKey: 'familySuite',
  },
  {
    titleKey: 'executiveSuite',
    category: 'Rooms & Suites',
    source: ExecutiveSuiteGallery,
    imgAltKey: 'executiveSuite',
  },
  {
    titleKey: 'mountainDining',
    category: 'Dining & Bar',
    source: MountainViewDining,
    imgAltKey: 'mountainDining',
  },
  {
    titleKey: 'shanCuisine',
    category: 'Dining & Bar',
    source: AuthenticShanCuisine,
    imgAltKey: 'shanCuisine',
  },
  {
    titleKey: 'cocktails',
    category: 'Dining & Bar',
    source: EveningCocktails,
    imgAltKey: 'cocktails',
  },
  {
    titleKey: 'breakfast',
    category: 'Dining & Bar',
    source: BreakfastView,
    imgAltKey: 'breakfast',
  },
  {
    titleKey: 'treatmentRooms',
    category: 'Spa & Wellness Center',
    source: TranquilTreatment,
    imgAltKey: 'treatmentRooms',
  },
  {
    titleKey: 'shanMassage',
    category: 'Spa & Wellness Center',
    source: TraditionalShanMassage,
    imgAltKey: 'shanMassage',
  },
  {
    titleKey: 'fitnessCenter',
    category: 'Spa & Wellness Center',
    source: HotelFitnessCenter,
    imgAltKey: 'fitnessCenter',
  },
  {
    titleKey: 'poolside',
    category: 'Spa & Wellness Center',
    source: PoolsideRelaxation,
    imgAltKey: 'poolside',
  },
  {
    titleKey: 'yoga',
    category: 'Spa & Wellness Center',
    source: MorningYoga,
    imgAltKey: 'yoga',
  },
  {
    titleKey: 'treks',
    category: 'Activities',
    source: GuidedMountainTreks,
    imgAltKey: 'treks',
  },
  {
    titleKey: 'cycling',
    category: 'Activities',
    source: CyclingTour,
    imgAltKey: 'cycling',
  },
  {
    titleKey: 'market',
    category: 'Activities',
    source: LocalMarket,
    imgAltKey: 'market',
  },
]

export const galleryCategories = [
  'All Photos',
  'The Hotel & Scenery',
  'Rooms & Suites',
  'Dining & Bar',
  'Spa & Wellness Center',
  'Activities',
]
