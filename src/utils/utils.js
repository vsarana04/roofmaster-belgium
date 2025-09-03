// Utility functions for RoofMaster Belgium Website
// This file contains helper functions used throughout the site

// DOM Utilities
const DOM = {
    // Get element by ID
    getById: (id) => document.getElementById(id),
    
    // Get elements by class
    getByClass: (className) => document.getElementsByClassName(className),
    
    // Get elements by selector
    query: (selector) => document.querySelector(selector),
    queryAll: (selector) => document.querySelectorAll(selector),
    
    // Create element
    create: (tag, className = '', content = '') => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.innerHTML = content;
        return element;
    },
    
    // Add event listener
    on: (element, event, handler) => {
        if (element) element.addEventListener(event, handler);
    },
    
    // Remove event listener
    off: (element, event, handler) => {
        if (element) element.removeEventListener(event, handler);
    }
};

// Animation Utilities
const Animation = {
    // Fade in element
    fadeIn: (element, duration = 300) => {
        if (!element) return;
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = performance.now();
        
        function animate(time) {
            let progress = (time - start) / duration;
            if (progress > 1) progress = 1;
            
            element.style.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    // Fade out element
    fadeOut: (element, duration = 300) => {
        if (!element) return;
        
        let start = performance.now();
        let initialOpacity = parseFloat(getComputedStyle(element).opacity);
        
        function animate(time) {
            let progress = (time - start) / duration;
            if (progress > 1) progress = 1;
            
            element.style.opacity = initialOpacity * (1 - progress);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    // Slide down element
    slideDown: (element, duration = 300) => {
        if (!element) return;
        
        element.style.height = '0px';
        element.style.overflow = 'hidden';
        element.style.display = 'block';
        
        let targetHeight = element.scrollHeight;
        let start = performance.now();
        
        function animate(time) {
            let progress = (time - start) / duration;
            if (progress > 1) progress = 1;
            
            element.style.height = (targetHeight * progress) + 'px';
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    // Slide up element
    slideUp: (element, duration = 300) => {
        if (!element) return;
        
        let startHeight = element.offsetHeight;
        let start = performance.now();
        
        element.style.overflow = 'hidden';
        
        function animate(time) {
            let progress = (time - start) / duration;
            if (progress > 1) progress = 1;
            
            element.style.height = (startHeight * (1 - progress)) + 'px';
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        }
        
        requestAnimationFrame(animate);
    }
};

// Form Utilities
const Form = {
    // Validate email
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate phone number (Belgian format)
    validatePhone: (phone) => {
        const re = /^(\+32|0)[1-9](\d{8})$/;
        return re.test(phone.replace(/\s/g, ''));
    },
    
    // Format phone number
    formatPhone: (phone) => {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.startsWith('32')) {
            return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`;
        }
        return phone;
    },
    
    // Get form data as object
    getFormData: (form) => {
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    },
    
    // Reset form
    reset: (form) => {
        if (form) form.reset();
    },
    
    // Show form errors
    showErrors: (form, errors) => {
        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(error => error.remove());
        
        // Add new errors
        Object.keys(errors).forEach(fieldName => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const errorDiv = DOM.create('div', 'error-message', errors[fieldName]);
                errorDiv.style.color = 'red';
                errorDiv.style.fontSize = '0.875rem';
                errorDiv.style.marginTop = '0.25rem';
                field.parentNode.appendChild(errorDiv);
            }
        });
    }
};

// Storage Utilities
const Storage = {
    // Set item
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    },
    
    // Get item
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('Could not read from localStorage:', e);
            return defaultValue;
        }
    },
    
    // Remove item
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Could not remove from localStorage:', e);
        }
    },
    
    // Clear all
    clear: () => {
        try {
            localStorage.clear();
        } catch (e) {
            console.warn('Could not clear localStorage:', e);
        }
    }
};

// URL Utilities
const URL = {
    // Get current page
    getCurrentPage: () => {
        return window.location.pathname.split('/').pop() || 'index.html';
    },
    
    // Get query parameters
    getParams: () => {
        const params = new URLSearchParams(window.location.search);
        const result = {};
        for (let [key, value] of params) {
            result[key] = value;
        }
        return result;
    },
    
    // Update URL without reload
    update: (url, title = '') => {
        if (history.pushState) {
            history.pushState(null, title, url);
        }
    }
};

// Device Detection
const Device = {
    // Check if mobile
    isMobile: () => {
        return window.innerWidth <= 768;
    },
    
    // Check if tablet
    isTablet: () => {
        return window.innerWidth > 768 && window.innerWidth <= 1024;
    },
    
    // Check if desktop
    isDesktop: () => {
        return window.innerWidth > 1024;
    },
    
    // Get device type
    getType: () => {
        if (Device.isMobile()) return 'mobile';
        if (Device.isTablet()) return 'tablet';
        return 'desktop';
    }
};

// Performance Utilities
const Performance = {
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Measure performance
    measure: (name, fn) => {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${name} took ${end - start} milliseconds`);
        return result;
    }
};

// Export utilities
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DOM,
        Animation,
        Form,
        Storage,
        URL,
        Device,
        Performance
    };
}
