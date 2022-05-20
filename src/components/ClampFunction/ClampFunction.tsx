import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

interface Props {
  clampFunction: string;
}

const ClampFunction: React.FC<Props> = ({ clampFunction }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <div>{clampFunction}</div>
      <CopyToClipboard text={clampFunction} onCopy={onCopyText}>
        <span>{isCopied ? 'Copied!' : <MdContentCopy />}</span>
      </CopyToClipboard>
    </>
  );
};

export default ClampFunction;
