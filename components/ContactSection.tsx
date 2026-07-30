'use client';

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
  const { register, handleSubmit, reset } = useForm<ContactFormValues>();

  async function onSubmit(values: ContactFormValues) {
    try {
      await send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
      reset();
      alert('Message sent successfully.');
    } catch (error) {
      console.error(error);
      alert('Unable to send the message. Please try again later.');
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
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
