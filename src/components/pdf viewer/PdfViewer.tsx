import React from 'react';
import { useLocation } from 'react-router-dom';

function PdfViewer() {
    const location = useLocation();
  const { pdfName } = location.state || {};
  return (
<iframe
      src={pdfName}
      width="100%"
      height="600px"
      title="PDF Viewer"
    ></iframe>
  );
}

export default PdfViewer;