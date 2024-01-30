import { useEffect, useState } from 'react';

interface UseScriptProps {
  id: string;
  src: string;
}

export const useScript = ({ id, src }: UseScriptProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const scriptExisting = document.querySelector(`script[id="${id}"]`);

    if (scriptExisting) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;

    const onScriptLoad = () => setLoaded(true);
    const onScriptError = () => {
      script.remove();
      setError(new Error(`Failed to load the script with src: ${src}`));
    };

    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);

    document.body.appendChild(script);

    // eslint-disable-next-line consistent-return
    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
    };
  }, [id, src]);

  return { loaded, error };
};
