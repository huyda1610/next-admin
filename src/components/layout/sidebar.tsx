'use client';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/shadcn/ui/accordion';
import { Card } from '@components/shadcn/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChartArea,
  ChevronDown,
  LayoutGrid,
  MessageSquareText,
  Minus,
  ScrollText,
  SquareMousePointer,
  X,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import NavLink from '@components/layout/nav-link';
import { cn } from '@lib/utils';
import { twMerge } from 'tailwind-merge';
import { APP_NAME } from '@core/const/app-const';

type Items = {
  name: string;
  link: string;
  icon?: React.ReactNode;
  items?: Items[];
};

type SidebarItems = {
  groupName?: string;
  items: Items[];
};

const iconClassName: string = 'size-[18px] shrink-0';

const sidebarItems: SidebarItems[] = [
  {
    groupName: 'Dashboard',
    items: [
      {
        name: 'Analytics',
        link: '/',
        icon: <ChartArea className={iconClassName} />,
      },
      {
        name: 'Workspace',
        link: '/workspace',
        icon: <LayoutGrid className={iconClassName} />,
      },
    ],
  },
  {
    groupName: 'Tables and Forms',
    items: [
      {
        name: 'Form Builder',
        link: '/form-builder',
        icon: <SquareMousePointer className={iconClassName} />,
      },
      {
        name: 'Crypto Dashboard',
        link: '/crypto-dashboard',
        icon: <MessageSquareText className={iconClassName} />,
      },
      {
        name: 'Test',
        link: '/crypto-dashboard',
        icon: <MessageSquareText className={iconClassName} />,
        items: [
          {
            name: 'test1',
            link: '/',
            icon: <MessageSquareText className={iconClassName} />,
          },
          {
            name: 'test2',
            link: '/crypto-dashboard',
            icon: <MessageSquareText className={iconClassName} />,
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.marginLeft = isSidebarOpen ? '260px' : '60px'; // Adjust this value as needed
    }
  };

  const toggleSidebarResponsive = () => {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('overlay')?.classList.toggle('open');
  };

  const isOpen = (): string => {
    // if (['/blog-list', '/blog-details', '/add-blog'].includes(pathName)) {
    //   return 'item-2';
    // } else if (
    //   [
    //     '/',
    //     '/crypto-dashboard',
    //     '/product-card',
    //     '/add-product',
    //     '/product-details',
    //     '/product-checkout',
    //   ].includes(pathName)
    // ) {
    //   return 'item-1';
    // } else if (['/invoice', '/invoice-details', '/create-invoice'].includes(pathName)) {
    //   return 'item-3';
    // } else if (
    //   [
    //     '/accordion-page',
    //     '/alert',
    //     '/alert-dialog',
    //     '/avatar',
    //     '/breadcrumbs',
    //     '/buttons',
    //     '/card-page',
    //     '/carousel',
    //     '/dropdown',
    //     '/empty-stats',
    //     '/hover-card',
    //     '/modal',
    //     '/popover',
    //     '/scroll-area',
    //     '/sonner',
    //     '/tabs',
    //     '/tag',
    //     '/toasts',
    //     '/toggle-group',
    //     '/tooltip',
    //   ].includes(pathName)
    // ) {
    //   return 'item-4';
    // } else if (
    //   ['/checkbox', '/combobox', '/command', '/form', '/inputs', '/input-otp'].includes(pathName)
    // ) {
    //   return 'item-5';
    // } else {
    //   return '';
    // }
    return '';
  };

  useEffect(() => {
    if (document?.getElementById('overlay')?.classList?.contains('open')) {
      toggleSidebarResponsive();
    }
  }, [pathName]);

  return (
    <>
      {/*Responsive Overlay*/}
      <div
        id="overlay"
        className="fixed inset-0 z-30 hidden bg-black/50"
        onClick={toggleSidebarResponsive}
      ></div>

      <Card
        id="sidebar"
        className={`sidebar fixed lg:relative -left-[260px] top-0 z-40 flex h-screen w-[260px] flex-col rounded-none transition-all duration-300 lg:left-0 ${isSidebarOpen ? 'closed' : ''}`}
      >
        <button
          type="button"
          onClick={toggleSidebar}
          className="absolute -right-3 top-[12px] hidden size-6 place-content-center rounded-full border border-gray-300 bg-white text-black lg:grid"
        >
          <ChevronDown className={`h-4 w-4 rotate-90 ${isSidebarOpen ? 'hidden' : ''}`} />
          <ChevronDown className={`hidden h-4 w-4 -rotate-90 ${isSidebarOpen ? '!block' : ''}`} />
        </button>

        {/*Icon*/}
        <Link
          className={twMerge(
            'py-2 pr-2.5 flex items-center gap-2 max-lg:hidden',
            isSidebarOpen ? 'pl-3' : 'pl-8',
          )}
          href={'/'}
          replace
        >
          <div className="w-8 h-8 relative">
            <Image src="/images/logo.webp" fill alt="Logo" className="h-full w-full object-cover" />
          </div>

          <strong className={`text-xl text-nowrap  ${isSidebarOpen ? 'hidden' : ''}`}>
            {APP_NAME}
          </strong>
        </Link>

        <div className="flex items-start justify-between border-b border-gray-300 px-2 py-3 lg:hidden">
          <Link
            className={twMerge(
              'py-2 pr-2.5 flex items-center gap-2',
              isSidebarOpen ? 'pl-3' : 'pl-8',
            )}
            href={'/'}
            replace
          >
            <div className="w-8 h-8 relative">
              <Image
                src="/images/logo.webp"
                fill
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <strong className={`text-xl text-nowrap  ${isSidebarOpen ? 'hidden' : ''}`}>
              {APP_NAME}
            </strong>
          </Link>
          <button type="button" onClick={toggleSidebarResponsive}>
            <X className="-mr-2 -mt-2 ml-auto size-4 hover:text-black" />
          </button>
        </div>
        <Accordion
          type="single"
          defaultValue={isOpen()}
          collapsible
          className="sidemenu grow overflow-y-auto overflow-x-hidden px-2.5 pb-10 pt-2.5 transition-all"
          key={pathName}
        >
          {sidebarItems.map((sidebar, index) => (
            <section key={sidebar.groupName}>
              {sidebar.groupName && (
                <h3
                  className={cn(
                    'whitespace-nowrap rounded-lg bg-gray-400 px-5 py-2.5 text-xs/tight font-semibold uppercase text-black',
                    index !== 0 && 'mt-2.5',
                  )}
                >
                  <span>{sidebar.groupName}</span>
                  <Minus className="hidden h-4 w-5 text-gray" />
                </h3>
              )}

              {sidebar.items.map((sidebarItems) => {
                if (sidebarItems?.items?.length) {
                  return (
                    <AccordionItem
                      key={sidebarItems.name}
                      value="item-3"
                      className="p-0 shadow-none"
                    >
                      <AccordionTrigger className="nav-link">
                        <ScrollText className={iconClassName} />
                        <span>{sidebarItems.name}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="submenu space-y-2 pl-12 pr-5">
                          {sidebarItems.items.map((subItem) => (
                            <li key={subItem.name}>
                              <NavLink href={subItem.link} isAccordion={true}>
                                {subItem.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <NavLink
                    key={sidebarItems.name}
                    href={sidebarItems.link}
                    className={`nav-link ${pathName === sidebarItems.link && '!text-black'}`}
                  >
                    {sidebarItems.icon}
                    <span>{sidebarItems.name}</span>
                  </NavLink>
                );
              })}
            </section>
          ))}
        </Accordion>
      </Card>
    </>
  );
};

export default Sidebar;
