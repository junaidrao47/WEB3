import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: 'What is Funded Bull FX?',
    answer:
      'Funded Bull FX is a financial services platform that provides educational information on financial markets and trading. We do not offer investment services or act as a broker.',
  },
  {
    question: 'How does the Funded Bull FX platform work?',
    answer:
      'The Funded Bull FX platform leverages third-party liquidity providers to power our trading platforms and data feeds. We do not manage any customer funds or provide investment advice.',
  },
  {
    question: 'What is the risk disclosure for Funded Bull FX?',
    answer:
      'Funded Bull FX provides educational information only and does not offer investment services. All trading activities carry inherent risks, and users should thoroughly research and understand the markets before participating.',
  },
  {
    question: 'How can I get started?',
    answer:
      'To get started, visit our platform and explore our educational resources. We provide comprehensive information to help you understand financial markets.',
  },
  {
    question: 'Are there any fees?',
    answer:
      'Our platform provides educational resources. Specific fee structures depend on the services and educational content you choose to access.',
  },
  {
    question: 'What support is available?',
    answer:
      'We offer comprehensive support through our knowledge base, FAQ sections, and customer support channels to assist you with any inquiries.',
  }
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-white text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAQs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1 
              }}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-lg"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-between items-center w-full p-5 text-left 
                  hover:bg-gray-800 transition-colors duration-300 
                  focus:outline-none focus:ring-2 focus:ring-gray-700"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: expandedIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {expandedIndex === index ? (
                    <ChevronUpIcon className="w-6 h-6 text-blue-500" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-blue-500" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: { 
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: { 
                        duration: 0.2,
                        ease: "easeInOut"
                      }
                    }}
                    className="px-5 pb-5 text-gray-400 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;