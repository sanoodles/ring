import { NavigationItem } from '@ring/iclab/ui'
import { IConfig } from '../../types/generated/contentful'

export default function selectNavigationItems(
  config: IConfig,
): NavigationItem[] {
  return config.fields.navigation.map((navigationItem) => ({
    title: navigationItem.fields.title as string,
    slug: navigationItem.fields.slug as string,
  }))
}
