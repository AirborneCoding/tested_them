import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar','fr','es'],
  defaultLocale: 'en',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(en|ar|fr|es)/:path*']
};