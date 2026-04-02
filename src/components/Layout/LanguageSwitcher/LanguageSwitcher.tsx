import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.startsWith('my') ? 'my' : 'en'

  const toggle = () => {
    const next = currentLang === 'en' ? 'my' : 'en'
    i18n.changeLanguage(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 transition-colors border border-white/20"
      aria-label={`Switch language to ${currentLang === 'en' ? 'မြန်မာ' : 'English'}`}
    >
      <span className="font-bold tracking-tight">{currentLang === 'en' ? 'EN' : 'MM'}</span>
    </button>
  )
}
