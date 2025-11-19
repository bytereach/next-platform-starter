'use client';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919199877599"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl shadow-green-500/50 hover:scale-110 transition-all duration-300 hover:shadow-green-500/70 animate-bounce no-underline"
            aria-label="Chat on WhatsApp"
        >
            💬
        </a>
    );
}
