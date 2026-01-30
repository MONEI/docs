import {useState, useCallback} from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import {useLocation} from '@docusaurus/router';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';

function CopyMarkdownButton() {
  const [state, setState] = useState('idle');
  const location = useLocation();

  const handleCopy = useCallback(async () => {
    if (state === 'copying') return;
    setState('copying');
    try {
      const path = location.pathname.replace(/\/$/, '');
      const res = await fetch(`${path}.md`);
      if (!res.ok) throw new Error(`${res.status}`);
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        throw new Error('md file not available (dev mode?)');
      }
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setState('success');
    } catch {
      setState('error');
    }
    setTimeout(() => setState('idle'), 2000);
  }, [location.pathname, state]);

  const isSuccess = state === 'success';
  const isError = state === 'error';
  const label = isSuccess ? 'Copied!' : isError ? 'Error' : 'Copy page';
  const Icon = isSuccess ? IconSuccess : IconCopy;

  return (
    <button
      className={`copy-md-button${isSuccess ? ' copy-md-button--success' : ''}${isError ? ' copy-md-button--error' : ''}`}
      onClick={handleCopy}
      disabled={state === 'copying'}
      title="Copy page as Markdown"
      type="button"
    >
      <Icon width={14} height={14} />
      <span>{label}</span>
    </button>
  );
}

export default function DocBreadcrumbsWrapper(props) {
  return (
    <div className="breadcrumbs-copy-row">
      <DocBreadcrumbs {...props} />
      <CopyMarkdownButton />
    </div>
  );
}
