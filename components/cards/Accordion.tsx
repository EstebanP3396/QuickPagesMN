"use client";

import { useState } from "react";
import { Heading, Text } from "@/components/typography";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-surface rounded-card border border-border overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-background transition-colors duration-200"
            aria-expanded={openItem === item.id}
            aria-controls={`panel-${item.id}`}
          >
            <Heading level="h3" size="subtitle" className="flex-1 pr-4">
              {item.question}
            </Heading>
            <ChevronDown
              className={`flex-shrink-0 transition-transform duration-200 ${
                openItem === item.id ? "rotate-180" : ""
              }`}
              size={20}
            />
          </button>

          <div
            id={`panel-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              openItem === item.id ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-8 pb-6">
              <Text size="body" color="secondary">
                {item.answer}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
