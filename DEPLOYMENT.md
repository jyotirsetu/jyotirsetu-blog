# JyotirSetu Blog Deployment Guide

## 🚀 Vercel Deployment

### Step 1: Prepare Your Repository

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial JyotirSetu Blog setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/jyotirsetu-blog.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Import your `jyotirsetu-blog` repository
   - Vercel will auto-detect Astro framework

3. **Configure Project**:
   - **Framework Preset**: Astro
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   Add these in Vercel dashboard:
   ```
   SITE_URL=https://blog.jyotirsetu.com
   SITE_NAME=JyotirSetu Cosmic Insights Blog
   GOOGLE_ANALYTICS_ID=your_ga_id
   ```

### Step 3: Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add `blog.jyotirsetu.com`
   - Vercel will provide DNS instructions

2. **Configure DNS**:
   Add this CNAME record at your domain registrar:
   ```
   Type: CNAME
   Name: blog
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Vercel automatically provides SSL
   - Wait 24-48 hours for DNS propagation

### Step 4: Verify Deployment

1. **Check Site**:
   - Visit `https://blog.jyotirsetu.com`
   - Test all pages and functionality

2. **Performance Check**:
   - Use Google PageSpeed Insights
   - Check mobile responsiveness

## 🔧 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "redirects": [...],
  "headers": [...],
  "env": {
    "SITE_URL": "https://blog.jyotirsetu.com"
  }
}
```

### astro.config.mjs
```javascript
export default defineConfig({
  site: 'https://blog.jyotirsetu.com',
  integrations: [tailwind()],
  output: 'static'
});
```

## 📊 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for `blog.jyotirsetu.com`

2. **Add Tracking Code**:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **Track Blog Events**:
   - Blog post views
   - Newsletter signups
   - Appointment clicks
   - Category navigation

## 📧 Newsletter Integration

### Mailchimp Setup

1. **Create Mailchimp Account**:
   - Sign up at [mailchimp.com](https://mailchimp.com)
   - Create audience for blog subscribers

2. **Get API Key**:
   - Go to Account → Extras → API Keys
   - Generate new API key

3. **Configure in Vercel**:
   ```
   NEWSLETTER_API_KEY=your_mailchimp_api_key
   NEWSLETTER_LIST_ID=your_audience_id
   ```

### ConvertKit Setup

1. **Create ConvertKit Account**:
   - Sign up at [convertkit.com](https://convertkit.com)
   - Create form for blog subscribers

2. **Get API Key**:
   - Go to Account Settings → API
   - Copy your API key

3. **Configure in Vercel**:
   ```
   NEWSLETTER_API_KEY=your_convertkit_api_key
   NEWSLETTER_LIST_ID=your_form_id
   ```

## 🔍 SEO Configuration

### Google Search Console

1. **Add Property**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add `https://blog.jyotirsetu.com`

2. **Verify Ownership**:
   - Use HTML file method
   - Upload verification file to public folder

3. **Submit Sitemap**:
   - Add sitemap URL: `https://blog.jyotirsetu.com/sitemap.xml`
   - Submit for indexing

### Meta Tags

All pages include:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## 🚀 Continuous Deployment

### Automatic Deployments

1. **GitHub Integration**:
   - Every push to `main` branch triggers deployment
   - Preview deployments for pull requests

2. **Build Process**:
   ```bash
   npm install
   npm run build
   npm run preview  # for testing
   ```

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

## 📱 Performance Optimization

### Image Optimization

1. **Use WebP Format**:
   - Convert images to WebP
   - Provide fallbacks for older browsers

2. **Lazy Loading**:
   - Images load as user scrolls
   - Improves initial page load

3. **CDN**:
   - Vercel provides global CDN
   - Images served from nearest location

### Code Optimization

1. **Minification**:
   - CSS and JS automatically minified
   - HTML optimized for production

2. **Tree Shaking**:
   - Unused code removed
   - Smaller bundle sizes

## 🔒 Security

### Headers Configuration

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### HTTPS

- Automatic SSL certificate
- HTTP to HTTPS redirects
- Secure headers enabled

## 📈 Monitoring

### Uptime Monitoring

1. **Vercel Analytics**:
   - Built-in performance monitoring
   - Real user metrics

2. **External Services**:
   - UptimeRobot for uptime monitoring
   - Pingdom for performance testing

### Error Tracking

1. **Vercel Functions**:
   - Serverless function logs
   - Error tracking and debugging

2. **Client-side Errors**:
   - JavaScript error tracking
   - User experience monitoring

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version (18+)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Domain Issues**:
   - Verify DNS settings
   - Check SSL certificate status
   - Wait for DNS propagation

3. **Performance Issues**:
   - Optimize images
   - Check bundle size
   - Use Vercel Analytics

### Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Astro Documentation**: [docs.astro.build](https://docs.astro.build)
- **GitHub Issues**: Create issue in repository

## 📋 Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Vercel project created and configured
- [ ] Custom domain added and DNS configured
- [ ] Environment variables set
- [ ] Analytics configured
- [ ] Newsletter integration setup
- [ ] SEO verification completed
- [ ] Performance testing done
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active
- [ ] Monitoring setup complete

---

**Your JyotirSetu Blog is now live at https://blog.jyotirsetu.com! 🎉**
