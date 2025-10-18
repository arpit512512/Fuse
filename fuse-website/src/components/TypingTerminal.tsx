"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingTerminalProps {
  className?: string;
}

interface TerminalLine {
  text: string;
  color: string;
  delay: number;
  typingSpeed?: number;
}

export function TypingTerminal({ className = "" }: TypingTerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines: TerminalLine[] = [
    { text: "$ fuse monitor --watch", color: "text-green-400", delay: 0, typingSpeed: 50 },
    { text: "→ Watching GitHub, Buildkite, Datadog, Slack...", color: "text-gray-300", delay: 1000, typingSpeed: 30 },
    { text: "→ Alert: AuthHandler latency spike detected", color: "text-red-400", delay: 2000, typingSpeed: 40 },
    { text: "→ Analyzing authentication service patterns...", color: "text-yellow-400", delay: 1500, typingSpeed: 35 },
    { text: "→ Found: Database connection pool exhaustion", color: "text-blue-400", delay: 1200, typingSpeed: 35 },
    { text: "→ Creating incident: 'Resolve AuthHandler latency'", color: "text-gray-300", delay: 1000, typingSpeed: 30 },
    { text: "→ Strategy: Increase connection pool size", color: "text-yellow-400", delay: 1500, typingSpeed: 30 },
    { text: "→ Creating PR: fix/auth-connection-pool", color: "text-gray-300", delay: 2000, typingSpeed: 35 },
    { text: "✓ PR created: https://github.com/company/repo/pull/635", color: "text-green-400", delay: 1000, typingSpeed: 30 },
    { text: "→ Monitoring Slack thread for revert decision", color: "text-gray-300", delay: 1500, typingSpeed: 30 },
    { text: "→ Detected: PR #634 mentioned in thread", color: "text-blue-400", delay: 2000, typingSpeed: 35 },
    { text: "→ Intent captured: Revert deployment if approved", color: "text-yellow-400", delay: 1500, typingSpeed: 30 },
    { text: "→ Draft PR structure identified", color: "text-gray-300", delay: 1000, typingSpeed: 30 },
    { text: "→ Waiting for Oct 11th trigger...", color: "text-yellow-400", delay: 2000, typingSpeed: 35 },
    { text: "$ ", color: "text-green-400", delay: 1000, typingSpeed: 50 },
  ];

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Reset after showing all lines
      setTimeout(() => {
        setCurrentLineIndex(0);
        setDisplayedText('');
        setIsTyping(false);
      }, 3000);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    setIsTyping(true);
    setDisplayedText('');

    const startTyping = () => {
      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < currentLine.text.length) {
          setDisplayedText(currentLine.text.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeChar, currentLine.typingSpeed || 50);
        } else {
          setIsTyping(false);
          // Move to next line after delay
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
          }, currentLine.delay);
        }
      };
      
      setTimeout(typeChar, currentLine.delay);
    };

    startTyping();
  }, [currentLineIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-4 font-mono text-sm">fuse-terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm min-h-[200px]">
        <div className="space-y-1">
          {terminalLines.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className={line.color}>
              {line.text}
            </div>
          ))}
          
          {currentLineIndex < terminalLines.length && (
            <div className={terminalLines[currentLineIndex].color}>
              {displayedText}
              {isTyping && showCursor && <span className="animate-pulse">|</span>}
            </div>
          )}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute -top-4 -right-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        Live Analysis
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-4 -left-4 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4 }}
      >
        Auto-fix Ready
      </motion.div>
    </div>
  );
}
