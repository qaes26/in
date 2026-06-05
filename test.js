
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            200: '#c7d2fe',
                            300: '#a5b4fc',
                            400: '#818cf8',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            800: '#3730a3',
                            900: '#312e81',
                        },
                        secondary: '#0f172a',
                        accent: {
                            light: '#a78bfa',
                            DEFAULT: '#8b5cf6',
                            dark: '#7c3aed'
                        },
                        darkbg: '#080c14',
                        darkcard: '#111827',
                        darkborder: '#1f2937'
                    },
                    fontFamily: {
                        arabic: ['"Cairo"', '"Tajawal"', 'sans-serif'],
                        english: ['"Outfit"', 'sans-serif']
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'spin-slow': 'spin 8s linear infinite',
                    }
                }
            }
        }
    