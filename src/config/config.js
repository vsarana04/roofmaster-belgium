// Configuration file for RoofMaster Belgium Website
// This file contains all configurable settings

const CONFIG = {
    // Website Information
    site: {
        name: 'RoofMaster Belgium',
        description: 'Professional roof installation and repair services in Belgium',
        url: 'https://roofmaster.be', // Change this to your actual domain
        email: 'info@roofmaster.be',
        phone: '+32 12 345 67 89',
        address: 'Brussels, Belgium'
    },
    
    // Language Settings
    language: {
        default: 'en',
        supported: ['en', 'nl', 'fr'],
        fallback: 'en'
    },
    
    // Contact Information
    contact: {
        phone: '+32 12 345 67 89',
        email: 'info@roofmaster.be',
        address: 'Brussels, Belgium',
        workingHours: {
            weekdays: '8:00-18:00',
            saturday: '9:00-15:00',
            sunday: 'Emergency only'
        }
    },
    
    // Social Media Links
    social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
    },
    
    // Animation Settings
    animations: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
    },
    
    // Form Settings
    forms: {
        quote: {
            enabled: true,
            autoClose: true,
            closeDelay: 3000
        },
        contact: {
            enabled: true,
            autoClose: true,
            closeDelay: 3000
        }
    },
    
    // Loading Screen Settings
    loading: {
        enabled: true,        // Set to false to disable loading screen
        duration: 3000,       // Duration in milliseconds
        fadeOut: 800,         // Fade out duration in milliseconds
        showProgress: true,   // Show progress bar
        showLogo: true        // Show RoofMaster logo
    },
    
    // Scroll Settings
    scroll: {
        behavior: 'smooth',
        offset: 80, // Header height
        alwaysStartAtTop: true
    },
    
    // Performance Settings
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        minifyCSS: false, // Set to true in production
        minifyJS: false   // Set to true in production
    },
    
    // Analytics (Add your tracking IDs here)
    analytics: {
        googleAnalytics: '', // Add your GA4 tracking ID
        facebookPixel: '',   // Add your Facebook Pixel ID
        enabled: false       // Set to true when you add tracking IDs
    },
    
    // SEO Settings
    seo: {
        title: 'RoofMaster Belgium - Professional Roof Installation & Repair',
        description: 'Professional roof installation and repair services in Belgium. Over 15 years of experience. Quality materials and warranty on all work.',
        keywords: 'roof installation, roof repair, Belgium, Brussels, roofing contractor, storm damage repair',
        ogImage: '/images/og-image.jpg', // Add your Open Graph image
        twitterCard: 'summary_large_image'
    },
    
    // Development Settings
    development: {
        debug: true,
        showConsoleLogs: true,
        enableHotReload: false
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
