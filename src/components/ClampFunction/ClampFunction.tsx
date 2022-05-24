import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';
import { ClampWrapper, ClampContainer, CopyText } from './styles';

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
      <ClampContainer className="clampContainer">
        <ClampWrapper className="clampWrapper">{clampFunction}</ClampWrapper>
        <CopyToClipboard text={clampFunction} onCopy={onCopyText}>
          <span>
            {isCopied ? (
              <CopyText className={`copyText`}>Copied!</CopyText>
            ) : (
              <MdContentCopy size={'30px'} />
            )}
          </span>
        </CopyToClipboard>
      </ClampContainer>
    </>
  );
};

export default ClampFunction;
