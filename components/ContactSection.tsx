'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { send } from '@emailjs/browser';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>('info');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>();

  async function onSubmit(values: ContactFormValues) {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusType('error');
      setStatusMessage('EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local and restart the server.');
      return;
    }

    try {
      setStatusType('info');
      setStatusMessage('Sending message...');
      await send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        publicKey,
      );

      reset();
      setStatusType('success');
      setStatusMessage('Message sent successfully.');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
          ? error
          : error && typeof error === 'object'
          ? (error as { text?: string; status?: number; statusText?: string }).text ??
            (error as { text?: string; status?: number; statusText?: string }).statusText ??
            `HTTP ${
              (error as { status?: number }).status ?? 'unknown'
            }`
          : JSON.stringify(error);
      console.warn('EmailJS send warning:', error);
      setStatusType('error');
      setStatusMessage(`Unable to send the message. ${errorMessage}`);
    }
  }

  return (
    <section id="contact" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Contact" description="Send a message" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-8 shadow-sm">
          <p className="text-slate-300">Let's connect for enterprise cloud automation, platform engineering, and platform reliability work.</p>
          <div className="mt-8 space-y-4 text-slate-200">
            <p>Email: rupeshakhade1998@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/rupesh-akhade</p>
            <p>GitHub: github.com/rupeshakhade</p>
          </div>
        </div>
        <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-8 shadow-sm">
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Name</span>
            <input type="text" {...register('name')} className="w-full rounded-3xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" required />
          </label>
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <input type="email" {...register('email')} className="w-full rounded-3xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" required />
          </label>
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea {...register('message')} rows={5} className="w-full rounded-3xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20" required />
          </label>
          {statusMessage && (
            <p
              className={`text-sm ${
                statusType === 'success'
                  ? 'text-emerald-300'
                  : statusType === 'error'
                  ? 'text-rose-300'
                  : 'text-sky-200'
              }`}
            >
              {statusMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
