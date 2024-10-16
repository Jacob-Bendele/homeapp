import {
    HomeIcon,
  } from '@heroicons/vue/24/outline'

import { NavItem } from '@monorepo/types'

export const userNavigation: NavItem[] = [
        { name: 'Your profile', href: '#', icon: HomeIcon, current: true, children: [] },
    ]    

