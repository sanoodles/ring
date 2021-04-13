import { Routes } from '@ring/iclab/ui'

// eslint-disable-next-line import/prefer-default-export
export const routes: Routes = {
  de: {
    '/about-us': '/uber-uns',
    '/contact': '/kontakt',
  },
  en: {
    '/uber-uns': '/about-us',
    '/kontakt': '/contact',
  },
}
