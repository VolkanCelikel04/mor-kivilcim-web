import { useEffect } from 'react';

let depth = 0;
let savedRobots: string | null = null;

/**
 * Admin rotalarında <meta name="robots"> için noindex, nofollow.
 * İç içe admin sayfaları / geçişlerde tek geri yükleme için sayaç kullanır.
 */
export function useAdminNoIndex(): void {
  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      return;
    }

    if (depth === 0) {
      savedRobots = meta.getAttribute('content');
    }
    depth += 1;
    meta.setAttribute('content', 'noindex, nofollow');

    return () => {
      depth = Math.max(0, depth - 1);
      if (depth === 0) {
        meta.setAttribute('content', savedRobots ?? 'index, follow');
      }
    };
  }, []);
}
