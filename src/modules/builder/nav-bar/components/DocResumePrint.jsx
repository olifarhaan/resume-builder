import { StyledButton } from '../atoms';
import htmlDocx from 'html-docx-js/dist/html-docx';

export const DocResumePrint = () => {
  const handleDownloadDoc = () => {
    const resumeContent = document.getElementById('downloadDoc'); // Adjust the ID according to your actual content
    const fileName = `Resume_Builder_${Date.now()}.docx`;
    const content = resumeContent.innerHTML;
    const result = htmlDocx.asBlob(content, { orientation: 'portrait' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(result);
    link.download = fileName;
    link.click();
  };

  return (
    <StyledButton onClick={handleDownloadDoc} variant="outlined">
      Download as DOC
    </StyledButton>
  );
};
