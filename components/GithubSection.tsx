'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

interface Repo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  description: string | null;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState({ stars: 0, forks: 0, repos: 0, followers: 0 });

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/rupeshakhade'),
          fetch('https://api.github.com/users/rupeshakhade/repos?per_page=6&sort=updated'),
        ]);

        if (!userRes.ok || !reposRes.ok) return;

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        const repoList = reposData.map((repo: any) => ({
          name: repo.name,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          html_url: repo.html_url,
          description: repo.description,
        }));

        setRepos(repoList);
        setStats({
          stars: repoList.reduce((acc, repo) => acc + repo.stargazers_count, 0),
          forks: repoList.reduce((acc, repo) => acc + repo.forks_count, 0),
          repos: userData.public_repos ?? 0,
          followers: userData.followers ?? 0,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchGitHub();
  }, []);

  return (
    <section id="github" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="GitHub" description="Open-source & contributions" />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="grid gap-4 rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm">
          <div className="rounded-[1.5rem] bg-slate-950/80 p-5 text-slate-300">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300/90">Repository stats</p>
            <div className="mt-6 grid gap-4">
              {[
                { label: 'Public repos', value: stats.repos },
                { label: 'Followers', value: stats.followers },
                { label: 'Stars', value: stats.stars },
                { label: 'Forks', value: stats.forks },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-slate-700/50 pb-3 last:border-b-0">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-lg font-semibold text-slate-100">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {repos.map((repo) => (
            <motion.a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-950/95">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{repo.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{repo.description ?? 'Repository details unavailable.'}</p>
                </div>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase text-slate-300">{repo.language ?? 'Code'}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
                <span>★ {repo.stargazers_count}</span>
                <span>⎇ {repo.forks_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
