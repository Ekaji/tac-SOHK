export const data = [
    {
        label: 'Home',
        content: [
            {href: ''}
        ],
        type: 'nav link'
    },
    {
        label: 'about',
        content : [
            {href: '/about_us', name: 'About Us'},
            {href: '/founder', name: 'Founder'},
            {href: '/our_team', name: 'Our Team'},
        ], 
        type: 'dropdown button' 
    },
    {
        label: 'labs',
        content : [
            {href: '/drone_and_counter_drone', name: 'Drone And Counter Drone'},
            {href: '/cyber_security_and_cyber_defense', name: 'Cyber Security And Cyber Defense'},
            {href: '/artificial_intelligence_and_robotics', name: 'AI And Robotics Lab'},
            {href: '/blockchain_and_crypto_lab', name: 'Blockchain And Crypto Lab'},
            {href: '/tech_for_social_good', name: 'Technology for social good'}
        ],
        type: 'dropdown button'
    },
    {
        label: 'contact',
        content: [
            {href: 'contact'}
        ],
        type: 'nav link'
    },
    {
        label: 'blog',
        content: [
            {href: 'blog'}
        ],
        type: 'button',
        details: {variant: 'primary'}

    },
    {
        label: 'Events',
        content: [
            {href: 'tac_events'}
        ],
        type: 'button',
        details: {variant: 'outline-primary'}
    }

];