
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "DayBook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "No-Entry" */ '@/modules/daybook/views/NoEntrySelected')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "Entry" */ '@/modules/daybook/views/EntryViewSelected')
        }
    ]
}