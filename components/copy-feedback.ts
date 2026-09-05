'use client';

import { useEffect, useState } from 'react';

const useCopyFeedback = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1250);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isCopied]);

  const copy = (value: string) => {
    void navigator.clipboard.writeText(value).then(
      () => {
        setIsCopied(true);
      },
      () => {
        return undefined;
      },
    );
  };

  return { copy, isCopied };
};

export { useCopyFeedback };
