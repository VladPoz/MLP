import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Используем локальный worker из public
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const LectionPage = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div>
      <h2>Лекция 1</h2>
      <Document
        file="../data/lecture/lecture_1/Лекция 1.pdf" // PDF в public
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index + 1} pageNumber={index + 1} width={800} />
        ))}
      </Document>
    </div>
  );
};

export default LectionPage;
