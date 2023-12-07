export const BookingConstant = {

    ApiEndPoints: {

    },
    Patterns : {

    },
    menus: [
        {
            path:  'clients',
            text: 'Client',
            roles: ['admin']
        },
        {
            path:  'user',
            text: 'User',
            roles: ['admin', 'client']
        },
        {
            path:  'packages',
            text: 'Pakage',
            roles: ['admin']
        },
        {
            path:  'clientsPackages',
            text: 'Client-Package',
            roles: ['admin']
        },
        {
            path:  'dashboard',
            text: 'Dashboard',
            roles: ['admin', 'client']
        },
        {
            path:  'rooms',
            text: 'Rooms',
            roles: ['client']
        },
        {
            path:  'booking',
            text: 'Room-Booking',
            roles: ['client']
        },
    ]
}