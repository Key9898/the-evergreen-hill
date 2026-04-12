import { motion } from 'framer-motion'
import { TbBeach, TbHeartRateMonitor, TbToolsKitchen2, TbClock } from 'react-icons/tb'

interface QuickInfoCardsProps {
  onNavigate?: (page: string) => void
}

const quickInfoCards = [
  {
    id: 1,
    icon: TbBeach,
    title: 'Swimming Pool',
    hours: '7:00 AM - 9:00 PM',
    href: 'swimmingPool',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    id: 2,
    icon: TbHeartRateMonitor,
    title: 'Spa & Wellness',
    hours: '9:00 AM - 9:00 PM',
    href: 'spaAndWellnessCenter',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
  },
  {
    id: 3,
    icon: TbToolsKitchen2,
    title: 'Dining Hours',
    hours: '6:30 AM - 11:00 PM',
    href: 'DiningAndBar',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
  },
]

export default function QuickInfoCards({ onNavigate }: QuickInfoCardsProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {quickInfoCards.map((card) => (
        <motion.button
          key={card.id}
          type="button"
          onClick={() => onNavigate?.(card.href)}
          className={`flex items-center gap-4 rounded-lg border ${card.borderColor} ${card.bgColor} p-4 text-left transition-all hover:shadow-md hover:scale-[1.02]`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className={`rounded-full p-3 ${card.iconColor} bg-white shadow-sm`}>
            <card.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium text-slate-800">{card.title}</p>
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <TbClock className="h-4 w-4" />
              <span>{card.hours}</span>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  )
}
