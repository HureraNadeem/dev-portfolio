import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

export const dynamic = 'force-static';

/**
 * Answer engines split into two kinds of crawler: ones that gather training
 * data (GPTBot, ClaudeBot, Google-Extended, CCBot, ...) and ones that fetch a
 * page because a user asked something right now (OAI-SearchBot, Claude-User,
 * PerplexityBot, ...). A portfolio wants both — being quoted in an answer is
 * the entire point — so every one of them is named and allowed rather than
 * left to the wildcard, which is also the clearest signal of intent if the
 * default ever changes.
 */
const AI_CRAWLERS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google / Apple / Meta / Amazon
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'Amazonbot',
  // Common Crawl, which many models train from
  'CCBot',
  // Others
  'cohere-ai',
  'YouBot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
