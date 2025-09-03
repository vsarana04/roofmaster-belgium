// Main JavaScript file for RoofMaster Belgium Website
// This file handles the core functionality and integrates all modules

// Global variables
let currentLanguage = CONFIG.language.default;

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const quoteBtn = document.getElementById('quote-btn');
const quoteFormContainer = document.getElementById('quote-form-container');
const quoteForm = document.getElementById('quote-form');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav__link');

// Translation function using the new structure
function translate(key, lang = currentLanguage) {
    const keys = key.split('.');
    let result = translations[lang];
    
    for (let i = 0; i < keys.length; i++) {
        if (result && result[keys[i]] !== undefined) {
            result = result[keys[i]];
        } else {
            // Fallback to English if translation not found
            result = translations[CONFIG.language.fallback];
            for (let j = 0; j < keys.length; j++) {
                if (result && result[keys[j]] !== undefined) {
                    result = result[keys[j]];
                } else {
                    return key; // Return key if no translation found
                }
            }
            break;
        }
    }
    
    return result;
}

// Update page language
function updatePageLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translate(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update all elements with data-translate-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = translate(key, lang);
        element.placeholder = translation;
    });
    
    // Update current language indicator
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        const langCodes = { 'en': 'EN', 'nl': 'NL', 'fr': 'FR' };
        currentLangElement.textContent = langCodes[lang] || 'EN';
    }
    
    // Update active language option
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    // Save language preference
    Storage.set('preferred-language', lang);
}

// Language switcher functionality
function initLanguageSwitcher() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (CONFIG.development.debug) {
        console.log('Initializing language switcher...');
        console.log('Elements found:', {
            languageBtn: !!languageBtn,
            languageDropdown: !!languageDropdown,
            languageSwitcher: !!languageSwitcher,
            languageOptions: languageOptions.length
        });
    }
    
    if (languageBtn && languageDropdown && languageSwitcher) {
        // Toggle dropdown
        DOM.on(languageBtn, 'click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = languageSwitcher.classList.contains('active');
            if (isActive) {
                languageSwitcher.classList.remove('active');
            } else {
                languageSwitcher.classList.add('active');
            }
        });
        
        // Handle language selection
        languageOptions.forEach((option, index) => {
            DOM.on(option, 'click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                
                updatePageLanguage(selectedLang);
                languageSwitcher.classList.remove('active');
                
                if (CONFIG.development.debug) {
                    console.log(`Language changed to: ${selectedLang}`);
                }
            });
        });
        
        // Close dropdown when clicking outside
        DOM.on(document, 'click', (e) => {
            if (!languageSwitcher.contains(e.target)) {
                languageSwitcher.classList.remove('active');
            }
        });
        
        // Close dropdown on escape key
        DOM.on(document, 'keydown', (e) => {
            if (e.key === 'Escape') {
                languageSwitcher.classList.remove('active');
            }
        });
    }
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function closeMobileNav() {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// Smooth scroll for anchor links
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    
    // Special handling for home link
    if (targetId === 'home' || targetId === '') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMobileNav();
        return;
    }
    
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        closeMobileNav();
    }
}

// Show/Hide quote form
function toggleQuoteForm() {
    if (quoteFormContainer) {
        quoteFormContainer.classList.toggle('active');
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translate('messages.sending')}`;
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        showNotification(translate('messages.success'), 'success');
        
        // Reset form
        Form.reset(form);
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Close form if auto-close is enabled
        if (CONFIG.forms.quote.autoClose) {
            setTimeout(() => {
                if (quoteFormContainer) {
                    quoteFormContainer.classList.remove('active');
                }
            }, CONFIG.forms.quote.closeDelay);
        }
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = DOM.create('div', `notification notification--${type}`, message);
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Enhanced loading screen
function createLoadingScreen() {
    if (!CONFIG.loading.enabled) return;
    
    // Build loading content based on config
    let loadingContent = '<div class="loading-content">';
    
    if (CONFIG.loading.showLogo) {
        loadingContent += `
            <div class="loading-logo">
                <i class="fas fa-home"></i>
                <span>RoofMaster</span>
            </div>
        `;
    }
    
    loadingContent += `
        <div class="loading-spinner"></div>
        <p class="loading-text">${translate('messages.loading')}</p>
    `;
    
    if (CONFIG.loading.showProgress) {
        loadingContent += `
            <div class="loading-progress">
                <div class="loading-progress-bar"></div>
            </div>
        `;
    }
    
    if (CONFIG.loading.showDots) {
        loadingContent += `
            <div class="loading-dots">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        `;
    }
    
    loadingContent += `</div>`;
    
    const loadingScreen = DOM.create('div', 'loading-screen', loadingContent);
    document.body.appendChild(loadingScreen);
    
    // Simulate loading progress if enabled
    if (CONFIG.loading.showProgress) {
        let progress = 0;
        const progressBar = loadingScreen.querySelector('.loading-progress-bar');
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            progressBar.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 200);
    }
    
    // Remove loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, CONFIG.loading.fadeOut);
    }, CONFIG.loading.duration);
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = DOM.create('button', 'back-to-top', '<i class="fas fa-arrow-up"></i>');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    const toggleBackToTop = Performance.throttle(() => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    }, 100);
    
    DOM.on(window, 'scroll', toggleBackToTop);
    
    // Scroll to top when clicked
    DOM.on(backToTopBtn, 'click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything
function init() {
    // Force scroll to top on page load/refresh
    if (CONFIG.scroll.alwaysStartAtTop) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    
    // Initialize language system
    const savedLanguage = Storage.get('preferred-language', CONFIG.language.default);
    updatePageLanguage(savedLanguage);
    
    // Initialize components
    initLanguageSwitcher();
    initBackToTop();
    
    if (CONFIG.loading.enabled) {
        createLoadingScreen();
    }
    
    // Mobile navigation
    if (navToggle) {
        DOM.on(navToggle, 'click', toggleMobileNav);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        DOM.on(link, 'click', smoothScrollToSection);
    });
    
    // Quote form toggle
    if (quoteBtn) {
        DOM.on(quoteBtn, 'click', toggleQuoteForm);
    }
    
    // Form submission
    if (quoteForm) {
        DOM.on(quoteForm, 'submit', handleFormSubmit);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        DOM.on(contactForm, 'submit', handleFormSubmit);
    }
    
    // Close mobile nav on window resize
    DOM.on(window, 'resize', Performance.debounce(() => {
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    }, 250));
    
    if (CONFIG.development.debug) {
        console.log('RoofMaster website initialized successfully!');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

// Additional scroll to top on window load
window.addEventListener('load', () => {
    if (CONFIG.scroll.alwaysStartAtTop) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
});

// Handle browser back/forward navigation
window.addEventListener('pageshow', () => {
    if (CONFIG.scroll.alwaysStartAtTop) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
});
