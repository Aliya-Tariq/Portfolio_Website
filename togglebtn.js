 // Theme toggle functionality
            const themeToggle = document.getElementById('themeToggle');
            const body = document.body;
            
            // Theme options
            const themes = [
                { name: 'auto', icon: '🌓', label: 'Auto' },
                { name: 'light', icon: '☀️', label: 'Light' },
                { name: 'dark', icon: '🌙', label: 'Dark' }
            ];
            
            let currentThemeIndex = 0;
            
            // Load saved theme or default to auto
            const savedTheme = localStorage.getItem('portfolio-theme') || 'auto';
            currentThemeIndex = themes.findIndex(theme => theme.name === savedTheme);
            if (currentThemeIndex === -1) currentThemeIndex = 0;
            
            // Apply initial theme
            applyTheme(themes[currentThemeIndex]);
            
            // Theme toggle click handler
            themeToggle.addEventListener('click', () => {
                currentThemeIndex = (currentThemeIndex + 1) % themes.length;
                const newTheme = themes[currentThemeIndex];
                applyTheme(newTheme);
                localStorage.setItem('portfolio-theme', newTheme.name);
            });
            
            function applyTheme(theme) {
                body.setAttribute('data-theme', theme.name);
                themeToggle.innerHTML = `${theme.icon} ${theme.label}`;
                themeToggle.title = `Current: ${theme.label} mode. Click to switch.`;
            }
