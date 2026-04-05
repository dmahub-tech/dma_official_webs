'use client';

import { useTheme } from '@/dva/context/ThemeContext';

const Map = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div 
      className="google-maps mt-100" 
      style={{ background: isDark ? '#0f172a' : '#f1f5f9' }}
    >
      <iframe 
        id="gmap_canvas" 
        src="https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed"
        style={{ filter: isDark ? 'grayscale(100%) invert(92%) contrast(83%)' : 'none' }}
      ></iframe>
    </div>
  )
}

export default Map;