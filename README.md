# Jaycee Tran portfolio

A modern, interactive 3D portfolio website built with Next.js, Three.js, and Framer Motion.

## 🚀 Features

- **3D Interactive Elements**: Built with Three.js and React Three Fiber
- **Modern UI/UX**: Beautiful animations with Framer Motion
- **Responsive Design**: Works seamlessly on all devices
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Performance Optimized**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **TypeScript**: Full type safety


## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Jaycee1996/Project_3DPortfolio.git
cd Project_3DPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment on Vercel

This project is optimized for Vercel deployment. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository: `Jaycee1996/Project_3DPortfolio`
5. Vercel will auto-detect Next.js settings
6. Configure environment variables (optional):
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` - Your EmailJS Service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key
   - `NEXT_PUBLIC_CONTACT_EMAIL` - Your contact email
   - `NEXT_PUBLIC_CONTACT_NAME` - Your name
7. Click **"Deploy"**

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Environment Variables (Optional)

The project works with default EmailJS configuration, but you can customize it by setting these environment variables in Vercel:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_NAME`

To add environment variables in Vercel:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add each variable for Production, Preview, and Development environments

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
Project_3DPortfolio/
├── app/
│   ├── components/      # React components
│   ├── constants/        # Constants and data
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── public/              # Static assets
├── next.config.mjs      # Next.js configuration
├── vercel.json          # Vercel deployment configuration
└── package.json         # Dependencies
```

## 🔧 Configuration

### Next.js Config
The `next.config.mjs` is optimized for Vercel with:
- Image optimization
- React strict mode
- SWC minification
- CSS optimization

### Vercel Config
The `vercel.json` includes:
- Build and dev commands
- Security headers
- Region configuration

## 📄 License

This project is private and proprietary.

## 👤 Author

**Jaycee Patel**
- Portfolio: [Your Portfolio URL]
- Email: jaycee.tran1996@gmail.com
- GitHub: [@Jaycee1996](https://github.com/Jaycee1996)

---

Built with ❤️ using Next.js and Three.js
