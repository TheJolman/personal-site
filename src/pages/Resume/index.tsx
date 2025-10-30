import { useState, useEffect } from 'preact/hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

export function Resume() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TheJolman/resume/main/resume.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center">
      <div className="flex justify-center my-4">
        <a
          href="https://github.com/TheJolman/resume/raw/main/resume.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>
      <main className="resume-container p-4 bg-base-200 rounded-box shadow-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </main>
    </div>
  );
}
