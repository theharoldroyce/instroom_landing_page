'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon } from 'lucide-react/dynamic';
import Link from 'next/link'

export default function FAQsThree() {
    const faqItems = [
        {
            id: 'item-1',
            icon: 'layers',
            question: 'What is Instroom?',
            answer: 'Instroom is an all-in-one influencer marketing platform that helps brands and agencies organize, track, and scale their influencer campaigns—without the chaos of spreadsheets or multiple tools.',
        },
        {
            id: 'item-2',
            icon: 'workflow',
            question: 'How does Instroom simplify influencer management?',
            answer: 'Instroom centralizes your entire workflow with a Kanban-style dashboard, task management, real-time tracking, and automated insights—so you can manage outreach, collaborations, and performance all in one place. ',
        },
        {
            id: 'item-3',
            icon: 'upload',
            question: 'Can I import influencers I already work with?',
            answer: 'Yes! You can easily add influencers manually, import them in bulk, or use our Chrome Extension to source new influencers directly from social media.',
        },
        {
            id: 'item-4',
            icon: 'user',
            question: 'Does Instroom support team collaboration?',
            answer: 'Absolutely. Assign tasks, set permissions, and keep everyone aligned. Instroom makes it easy for teams to manage campaigns together without overlaps or confusion.',
        },
        {
            id: 'item-5',
            icon: 'rocket',
            question: 'When will Instroom be available?',
            answer: 'Instroom is currently in early access. Join the waitlist to be among the first to experience the platform once it launches.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link href="#" className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon name={item.icon} className="m-auto size-4" />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
