import { z } from 'astro/zod';
import { icons } from './icons';

export function parseLink(link: string) {
  const email = z.email();
  const result = email.safeParse(link);
  if (result.success) {
    return `mailto:${link}`;
  } else {
    return link;
  }
}

export function getIcon(link: string) {
  const email = z.email();
  const result = email.safeParse(link);
  if (result.success) {
    return icons.email;
  } else if (link.includes("linkedin.com")) {
    return icons.linkedin;
  } else if (link.includes("github.com")) {
    return icons.github
  }
}
