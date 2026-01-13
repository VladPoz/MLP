import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function LectionPage() {
  const [link, setLink] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => {
        setLink(data[0].lecture[id].link);
      });
  }, [id]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="lection__contents">
      <div className="menu"></div>
        <Document
          file={link}
          className="lection__document"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              pageNumber={index + 1}
              renderTextLayer={false}
            />
          ))}
        </Document>
    </div>
  );
}

export default LectionPage;
