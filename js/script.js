// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileMenuButton = document.getElementById('button-open');
    const mobileMenuClose = document.getElementById('button-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // File conversion elements
    const selectFileBtn = document.getElementById('select-file-btn');
    const convertFormatInput = document.getElementById('convert-format');

    // Mobile menu functionality
    if (mobileMenuButton && mobileMenuClose && mobileMenu) {
        // Mobile menu open
        mobileMenuButton.addEventListener('click', (event) => {
            event.stopPropagation();
            mobileMenu.classList.add('mobile-menu-open');
        });

        // Mobile menu close
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (mobileMenu.classList.contains('mobile-menu-open') && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.remove('mobile-menu-open');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileMenu.classList.contains('mobile-menu-open')) {
                mobileMenu.classList.remove('mobile-menu-open');
            }
        });
    }

    // File selection functionality
    if (selectFileBtn) {
        selectFileBtn.addEventListener('click', function() {
            // Create a file input element
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.style.display = 'none';
            
            fileInput.addEventListener('change', function(event) {
                const file = event.target.files[0];
                if (file) {
                    console.log(`Selected file: ${file.name}`);
                    alert(`Selected file: ${file.name}\nYou can now choose the conversion format.`);
                    
                    // Focus on conversion format input
                    if (convertFormatInput) {
                        convertFormatInput.focus();
                    }
                }
            });
            
            document.body.appendChild(fileInput);
            fileInput.click();
            document.body.removeChild(fileInput);
        });
    }

    // Conversion format input functionality
    if (convertFormatInput) {
        convertFormatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const format = this.value.trim().toUpperCase();
                if (format) {
                    alert(`Converting to: ${format} format\nConversion process would start here.`);
                    // Add your conversion logic here
                } else {
                    alert('Please enter a valid file format (e.g., PDF, JPG, MP3)');
                }
            }
        });
    }

    // Add some sample conversion formats when input is focused
    if (convertFormatInput) {
        convertFormatInput.addEventListener('focus', function() {
            this.setAttribute('placeholder', 'e.g., PDF, JPG, MP3, DOCX');
        });

        convertFormatInput.addEventListener('blur', function() {
            this.setAttribute('placeholder', 'File format...');
        });
    }

    console.log('File Converter App initialized successfully');
});