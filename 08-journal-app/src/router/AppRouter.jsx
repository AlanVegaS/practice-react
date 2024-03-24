import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = [
    {
        path: '/',
        children: JournalRoutes
    },
    {
        path: '/auth/*',
        children: AuthRoutes
    },
]