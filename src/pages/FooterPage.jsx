
const FooterPage = () => {
  return (
    <footer className="w-full bg-[#07101d] border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 px-4">
        
        {/* Social Contacts Section */}
        <div className="flex items-center space-x-6">
          {/* GitHub */}
            <a 
                href="https://github.com/leab-samchhay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 dark:hover:text-white transition-colors duration-300"
                aria-label="GitHub"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            </a>

          {/* Telegram */}
            <a 
                href="http://t.me/Chhay027" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                aria-label="Telegram"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
            </a>

          {/* Gmail */}
            <a 
                href="mailto:leabsamchhay993@gmail.com" 
                className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                aria-label="Email"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </a>
        </div>

        {/* Copyright & Tech Stack Section */}
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Leab Samchhay. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Built with React & Tailwind CSS
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default FooterPage;