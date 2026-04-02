import { Fragment } from 'react'
import { Dialog, DialogPanel, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const DeluxeGardenViewDetailsImgOne = '/ViewDetails/deluxe_garden_view_details_img_one.jpg'
const DeluxeGardenViewDetailsImgTwo = '/ViewDetails/deluxe_garden_view_details_img_two.jpg'
const DeluxeGardenViewDetailsImgThree = '/ViewDetails/deluxe_garden_view_details_img_three.jpg'
const DeluxeGardenViewDetailsImgFour = '/ViewDetails/deluxe_garden_view_details_img_four.jpg'

const DeluxeMountainViewDetailsImgOne = '/ViewDetails/deluxe_mountain_view_details_img_one.jpg'
const DeluxeMountainViewDetailsImgTwo = '/ViewDetails/deluxe_mountain_view_details_img_two.jpg'
const DeluxeMountainViewDetailsImgThree = '/ViewDetails/deluxe_mountain_view_details_img_three.jpg'
const DeluxeMountainViewDetailsImgFour = '/ViewDetails/deluxe_mountain_view_details_img_four.jpg'

const HoneymoonSuiteViewDetailsImgOne = '/ViewDetails/honeymoon_suite_view_details_one.jpg'
const HoneymoonSuiteViewDetailsImgTwo = '/ViewDetails/honeymoon_suite_view_details_two.jpg'
const HoneymoonSuiteViewDetailsImgThree = '/ViewDetails/honeymoon_suite_view_details_three.jpg'
const HoneymoonSuiteViewDetailsImgFour = '/ViewDetails/honeymoon_suite_view_details_four.jpg'

const TheEvergreenHillSuiteViewDetailsImgOne =
  '/ViewDetails/the_evergreen_hill_suite_view_details_one.jpg'
const TheEvergreenHillSuiteViewDetailsImgTwo =
  '/ViewDetails/the_evergreen_hill_suite_view_details_two.jpg'
const TheEvergreenHillSuiteViewDetailsImgThree =
  '/ViewDetails/the_evergreen_hill_suite_view_details_three.jpg'
const TheEvergreenHillSuiteViewDetailsImgFour =
  '/ViewDetails/the_evergreen_hill_suite_view_details_four.jpg'

const DeluxeTwinGardenViewDetailsImgOne = '/ViewDetails/deluxe_twin_garden_view_details_img_one.jpg'
const DeluxeTwinGardenViewDetailsImgTwo = '/ViewDetails/deluxe_twin_garden_view_details_img_two.jpg'
const DeluxeTwinGardenViewDetailsImgThree =
  '/ViewDetails/deluxe_twin_garden_view_details_img_three.jpg'
const DeluxeTwinGardenViewDetailsImgFour =
  '/ViewDetails/deluxe_twin_garden_view_details_img_four.jpg'

const DeluxeTwinMountainViewDetailsImgOne =
  '/ViewDetails/deluxe_twin_mountain_view_details_img_one.jpg'
const DeluxeTwinMountainViewDetailsImgTwo =
  '/ViewDetails/deluxe_twin_mountain_view_details_img_two.jpg'
const DeluxeTwinMountainViewDetailsImgThree =
  '/ViewDetails/deluxe_twin_mountain_view_details_img_three.jpg'
const DeluxeTwinMountainViewDetailsImgFour =
  '/ViewDetails/deluxe_twin_mountain_view_details_img_four.jpg'

const FamilySuiteViewDetailsImgOne = '/ViewDetails/family_suite_view_details_one.jpg'
const FamilySuiteViewDetailsImgTwo = '/ViewDetails/family_suite_view_details_two.jpg'
const FamilySuiteViewDetailsImgThree = '/ViewDetails/family_suite_view_details_three.jpg'
const FamilySuiteViewDetailsImgFour = '/ViewDetails/family_suite_view_details_four.jpg'

const ExecutiveSuiteViewDetailsImgOne = '/ViewDetails/executive_suite_view_details_one.jpg'
const ExecutiveSuiteViewDetailsImgTwo = '/ViewDetails/executive_suite_view_details_two.jpg'
const ExecutiveSuiteViewDetailsImgThree = '/ViewDetails/executive_suite_view_details_three.jpg'
const ExecutiveSuiteViewDetailsImgFour = '/ViewDetails/executive_suite_view_details_four.jpg'

interface ViewDetailsProps {
  open: boolean
  onClose: () => void
  room: {
    name?: string
    nameKey?: string
    gallery?: string[]
  } | null
  onBookNow?: (roomName?: string) => void
}

const galleryByRoomName: Record<string, string[]> = {
  deluxegarden: [
    DeluxeGardenViewDetailsImgOne,
    DeluxeGardenViewDetailsImgTwo,
    DeluxeGardenViewDetailsImgThree,
    DeluxeGardenViewDetailsImgFour,
  ],
  deluxemountain: [
    DeluxeMountainViewDetailsImgOne,
    DeluxeMountainViewDetailsImgTwo,
    DeluxeMountainViewDetailsImgThree,
    DeluxeMountainViewDetailsImgFour,
  ],
  honeymoonsuite: [
    HoneymoonSuiteViewDetailsImgOne,
    HoneymoonSuiteViewDetailsImgTwo,
    HoneymoonSuiteViewDetailsImgThree,
    HoneymoonSuiteViewDetailsImgFour,
  ],
  evergreensuite: [
    TheEvergreenHillSuiteViewDetailsImgOne,
    TheEvergreenHillSuiteViewDetailsImgTwo,
    TheEvergreenHillSuiteViewDetailsImgThree,
    TheEvergreenHillSuiteViewDetailsImgFour,
  ],
  deluxetwingarden: [
    DeluxeTwinGardenViewDetailsImgOne,
    DeluxeTwinGardenViewDetailsImgTwo,
    DeluxeTwinGardenViewDetailsImgThree,
    DeluxeTwinGardenViewDetailsImgFour,
  ],
  deluxetwinmountain: [
    DeluxeTwinMountainViewDetailsImgOne,
    DeluxeTwinMountainViewDetailsImgTwo,
    DeluxeTwinMountainViewDetailsImgThree,
    DeluxeTwinMountainViewDetailsImgFour,
  ],
  familysuite: [
    FamilySuiteViewDetailsImgOne,
    FamilySuiteViewDetailsImgTwo,
    FamilySuiteViewDetailsImgThree,
    FamilySuiteViewDetailsImgFour,
  ],
  executivesuite: [
    ExecutiveSuiteViewDetailsImgOne,
    ExecutiveSuiteViewDetailsImgTwo,
    ExecutiveSuiteViewDetailsImgThree,
    ExecutiveSuiteViewDetailsImgFour,
  ],
}

export default function ViewDetails({ open, onClose, room, onBookNow }: ViewDetailsProps) {
  const lookupKey = (room?.nameKey ?? '').toLowerCase().trim()
  const images =
    room?.gallery && room.gallery.length > 0 ? room.gallery : galleryByRoomName[lookupKey] || []

  return (
    <Transition show={open} as={Fragment}>
      <Dialog open={open} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-3xl w-full bg-white rounded-md shadow-lg flex flex-col max-h-[85vh]">
            <div className="flex-none flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">{room?.name ?? 'Room Details'}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close details"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 px-4 lg:px-6 py-6 overflow-y-auto bg-slate-50">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {images.length > 0 ? (
                  images.map((src, idx) => (
                    <div
                      key={idx}
                      className="rounded-md overflow-hidden bg-slate-200 border border-slate-200 shadow-sm"
                    >
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={src}
                          alt={`${room?.name} view ${idx + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-slate-500 py-12">
                    No images available for this room.
                  </div>
                )}
              </div>
            </div>

            <div className="flex-none flex justify-end gap-3 border-t border-slate-200 px-6 py-4 bg-white">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onBookNow?.(room?.name)}
                className="px-6 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600"
              >
                Book Now
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}
