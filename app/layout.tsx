import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Rupesh Akhade | Senior DevOps & Cloud Engineer',
  description:
    'Enterprise-grade portfolio for Rupesh Akhade, Senior DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, GitOps, and DevSecOps.',
  keywords: [
    'DevOps',
    'Cloud Engineer',
    'Kubernetes',
    'GitOps',
    'Terraform',
    'AWS',
    'Azure',
    'CI/CD',
  ],
  metadataBase: new URL('https://rupesh-akhade.dev'),
  openGraph: {
    title: 'Rupesh Akhade | Senior DevOps & Cloud Engineer',
    description:
      'Enterprise-grade portfolio for Rupesh Akhade, Senior DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, GitOps, and DevSecOps.',
    type: 'website',
    url: 'https://rupesh-akhade.dev',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
