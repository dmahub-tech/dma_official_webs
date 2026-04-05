'use client';

import { useTheme } from '@/dva/context/ThemeContext';
import contact from '@/dva/data/contact/contact.json';

const Info = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div className="cont-info pt-80 pb-80" style={{ background: isDark ? '#0f172a' : '#f8fafc' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {/* Visit Our Campus */}
              <div className="col-lg-4 mb-30">
                <div className="item">
                  <h6 className="fw-600 mb-15" style={{ color: 'var(--accent)' }}>Visit Our Campus</h6>
                  <p className="fz-14 mb-5" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>123 Tech Boulevard, Innovation District</p>
                  <p className="fz-14" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>San Francisco, CA 94107</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-lg-4 mb-30">
                <div className="item">
                  <h6 className="fw-600 mb-15" style={{ color: 'var(--accent)' }}>Contact Information</h6>
                  <p className="fz-14 mb-5" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>{contact.email}</p>
                  <p className="fz-14" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>{contact.phone}</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="col-lg-4 mb-30">
                <div className="item">
                  <h6 className="fw-600 mb-15" style={{ color: 'var(--accent)' }}>Office Hours</h6>
                  <p className="fz-14 mb-5" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>{contact.hours.weekdays}</p>
                  <p className="fz-14" style={{ color: isDark ? '#e2e8f0' : '#1e293b' }}>{contact.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info