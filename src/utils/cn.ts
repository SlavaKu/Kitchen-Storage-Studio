import type { ClassValue } from '@/types/styles';

export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ');
}
