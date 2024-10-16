import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    ChartBarIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'

import { NavItem } from '@monorepo/types'

export const sidebarConfig: NavItem[] = [
        { name: 'Dashboard', href: '#', icon: ChartBarIcon, current: true, children: [ { name: 'Engineering', href: '#' },
            { name: 'Human Resources', href: '/login' },
            { name: 'Customer Success', href: '/login' }] },
        { name: 'Properties', href: '/properties', icon: HomeIcon, current: false},
        { name: 'People', href: '/people', icon: UsersIcon, current: false},
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
        { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
        { name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
    ]  

