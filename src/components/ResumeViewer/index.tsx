// @ts-nocheck

import React, { useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import parseResumePath from '../../utils/parseResumePath';
import { ResumePaths } from '../../types/resumeVersions';

interface ResumeViewerProps {
  fileUrl: string
  defaultDownloadName: string
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ fileUrl, defaultDownloadName = 'Hochschild, Isabella Resume' }) => {
  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [filePath, setFilePath] = React.useState('');

  useEffect(() => {
    const resumeType = parseResumePath(fileUrl);
    setFilePath(ResumePaths[resumeType]);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumberOfPages(numPages);
  };

  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = parseResumePath(filePath);
    link.download = defaultDownloadName;
    link.click();
  };

  return (
    <div>
      <Document
        file={filePath}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page
        {' '}
        {pageNumber}
        {' '}
        of
        {numberOfPages}
      </p>
      <button
        type="button"
        onClick={() => { setPageNumber(pageNumber - 1); }}
        disabled={pageNumber <= 1}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => { setPageNumber(pageNumber + 1); }}
        disabled={pageNumber >= numberOfPages}
      >
        Next Page
      </button>
      <button type="submit" onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default ResumeViewer;
