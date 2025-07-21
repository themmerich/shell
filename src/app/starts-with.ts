import {UrlMatcher, UrlSegment} from '@angular/router';

export function startWith(path: string): UrlMatcher {
  return (segments: UrlSegment[]) => {
    return segments[0].path === path ? { consumed: segments } : { consumed: [] };
  };
}
