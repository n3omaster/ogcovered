import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: 'OGCovered - A better health for you',
  meta: ['ogcovered', 'health insurance broker', 'health insurance', 'better health insurance', 'ogcovered health'],
  link: ['https://www.ogcovered.com'],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative bg-white overflow-hidden' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
          <div className='bg-transparent'>
            <nav className='flex justify-between p-6 px-4'>
              <div className='flex justify-between items-center w-full'>
                <div className='w-1/2 xl:w-1/3'>
                  <a className='block max-w-max' href='/'>
                    <img className='h-16' src='logo/ogcovered-logo.svg' alt='OGCovered, a better health for you' />
                  </a>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <ul className='hidden xl:flex xl:justify-center'>
                    <li className='mr-12'>
                      <a className='text-coolGray-500 hover:text-coolGray-900 font-medium' href='#mission'>
                        Mision
                      </a>
                    </li>
                    <li className='mr-12'>
                      <a className='text-coolGray-500 hover:text-coolGray-900 font-medium' href='#becovered' >
                        Coverage
                      </a>
                    </li>
                    <li className='mr-12'>
                      <a className='text-coolGray-500 hover:text-coolGray-900 font-medium' href='#benefits'>
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a className='text-coolGray-500 hover:text-coolGray-900 font-medium' href='#qualify'>
                        Do I qualify?
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-1/2 xl:w-1/3'>
                  <div className='hidden xl:flex items-center justify-end'>
                    <a className='inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md' href='#contact'>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <button className='navbar-burger self-center xl:hidden'>
                <svg width={35} height={35} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' >
                  <rect className='text-coolGray-50' width={32} height={32} rx={6} fill='currentColor' />
                  <path className='text-coolGray-500'
                    d='M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z'
                    fill='currentColor' />
                </svg>
              </button>
            </nav>
            <div className='navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50'>
              <div className='fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white'>
                <nav className='relative p-6 h-full overflow-y-auto'>
                  <div className='flex flex-col justify-between h-full'>
                    <a className='inline-block' href='#'>
                      <img className='h-8' src='logo/ogcovered-logo.svg' alt='ogcovered'
                      />
                    </a>
                    <ul className='py-6'>
                      <li>
                        <a className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md' href='#'>
                          Insurance Plans
                        </a>
                      </li>
                      <li>
                        <a className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md' href='#'>
                          Benefits
                        </a>
                      </li>
                      <li>
                        <a className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md' href='#'>
                          Cost
                        </a>
                      </li>
                      <li>
                        <a className='block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md' href='#'>
                          Information
                        </a>
                      </li>
                    </ul>
                    <div className='flex flex-wrap'>
                      <div className='w-full'>
                        <a className='inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md' href='#'>
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
                <a className='navbar-close absolute top-5 p-4 right-3' href='#'>
                  <svg width={12} height={12} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z' fill='#556987' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='py-20 md:py-28'>
            <div className='container px-4 mx-auto'>
              <div className='flex flex-wrap xl:items-center -mx-4'>
                <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0'>
                  <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl'>
                    A better health for you
                  </span>
                  <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight'>
                    With OGCovered, it feels good to be covered.
                  </h1>
                  <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
                    You're a phone call away from a better health.
                  </p>
                  <div className='flex flex-wrap'>
                    <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                      <a className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm' href='#contact'>
                        We're here to help
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='relative mx-auto md:mr-0 max-w-max'>
                    <img
                      className='absolute z-10 -left-14 -top-12 w-28 md:w-auto'
                      src='flex-ui-assets/elements/circle3-yellow.svg'
                      alt='ogcovered'
                    />
                    <img
                      className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto'
                      src='flex-ui-assets/elements/dots3-blue.svg'
                      alt='ogcovered'
                    />
                    <svg className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer text-green-500 hover:text-green-600' width={64} height={64} viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <circle cx={32} cy={32} r={32} fill='currentColor' />
                      <path className='text-white' d='M40.5 31.13L26.5 23.05C26.348 22.9622 26.1755 22.916 26 22.916C25.8245 22.916 25.652 22.9622 25.5 23.05C25.3474 23.1381 25.2208 23.265 25.133 23.4177C25.0452 23.5705 24.9993 23.7438 25 23.92V40.08C24.9993 40.2562 25.0452 40.4295 25.133 40.5822C25.2208 40.735 25.3474 40.8619 25.5 40.95C25.652 41.0378 25.8245 41.084 26 41.084C26.1755 41.084 26.348 41.0378 26.5 40.95L40.5 32.87C40.6539 32.7828 40.7819 32.6563 40.871 32.5035C40.96 32.3506 41.007 32.1769 41.007 32C41.007 31.8231 40.96 31.6494 40.871 31.4965C40.7819 31.3437 40.6539 31.2172 40.5 31.13ZM27 38.35V25.65L38 32L27 38.35Z' fill='currentColor' />
                    </svg>
                    <div className='relative overflow-hidden rounded-7xl'>
                      <img src='https://images.unsplash.com/photo-1492552085122-36706c238263?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQxODU3MDZ8&ixlib=rb-4.0.3&q=85&w=554&h=464' />
                      <video className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none'
                        poster='flex-ui-assets/images/testimonials/video-frame.jpeg' muted='' >
                        <source src='https://static.shuffle.dev/files/video-placeholder.mp4' type='video/mp4' />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className='py-24 md:py-32 bg-white overflow-hidden' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center -mx-4'>
              <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0'>
                <div className='relative mx-auto md:ml-0 max-w-max'>
                  <img className='absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400' src='flex-ui-assets/elements/circle3-yellow.svg' alt='our mission at ogcovered' />
                  <img className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500' src='flex-ui-assets/elements/dots3-blue.svg' alt='our mission at ogcovered' />
                  <img className='rounded-3xl' src='imgs/ogcovered-mission.jpg' alt='our mission at ogcovered' />
                </div>
              </div>
              <div className='w-full md:w-1/2 px-4'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
                  Why choose us?
                </span>
                <h1 className='mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter'>
                  What is our mission?
                </h1>
                <p className='mb-6 text-lg md:text-xl text-coolGray-500 font-medium'>
                  We specialize in Health insurance coverage, working to help you get the best and most affordable health insurance plan that fits your needs.
                </p>
                <p className='mb-6 text-lg md:text-xl text-coolGray-500 font-medium'>
                  With entirely free consultations, we will help you decide between a list of health plans that are part of the Affordable Care Act. We are here to help you make an intelligent choice for your health and your family. Your protection is our priority.
                </p>
                <p className='mb-6 text-lg md:text-xl text-coolGray-500 font-medium'>
                  We are here to help you make an intelligent choice for your health and your family. Your protection is our priority.
                </p>
                <a className='inline-block py-4 px-5 w-full md:w-auto text-base leading-4 text-green-50 bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm'
                  href='#contact'>
                  Explore our plans
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="becovered" className='py-24 bg-white' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center', }}>
          <div className='container px-4 mx-auto'>
            <div className='xl:max-w-4xl mb-12 mx-auto text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
                Be covered
              </span>
              <h2 className='mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter'>
                What is the ACA?
              </h2>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                The Affordable Care Act was signed into law on March 23, 2010, with the primary goal of expanding access to health insurance coverage. It provides rights and protections that make health coverage fair and accessible to understand.
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0'>
                <div className='p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg'>
                    <svg width={24} height={21} viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M17 18.63H5C4.20435 18.63 3.44129 18.3139 2.87868 17.7513C2.31607 17.1887 2 16.4257 2 15.63V7.63C2 7.36479 1.89464 7.11043 1.70711 6.9229C1.51957 6.73536 1.26522 6.63 1 6.63C0.734784 6.63 0.48043 6.73536 0.292893 6.9229C0.105357 7.11043 0 7.36479 0 7.63L0 15.63C0 16.9561 0.526784 18.2279 1.46447 19.1655C2.40215 20.1032 3.67392 20.63 5 20.63H17C17.2652 20.63 17.5196 20.5246 17.7071 20.3371C17.8946 20.1496 18 19.8952 18 19.63C18 19.3648 17.8946 19.1104 17.7071 18.9229C17.5196 18.7354 17.2652 18.63 17 18.63ZM21 0.630005H7C6.20435 0.630005 5.44129 0.946075 4.87868 1.50868C4.31607 2.07129 4 2.83436 4 3.63V13.63C4 14.4257 4.31607 15.1887 4.87868 15.7513C5.44129 16.3139 6.20435 16.63 7 16.63H21C21.7956 16.63 22.5587 16.3139 23.1213 15.7513C23.6839 15.1887 24 14.4257 24 13.63V3.63C24 2.83436 23.6839 2.07129 23.1213 1.50868C22.5587 0.946075 21.7956 0.630005 21 0.630005ZM20.59 2.63L14.71 8.51C14.617 8.60373 14.5064 8.67813 14.3846 8.7289C14.2627 8.77966 14.132 8.8058 14 8.8058C13.868 8.8058 13.7373 8.77966 13.6154 8.7289C13.4936 8.67813 13.383 8.60373 13.29 8.51L7.41 2.63H20.59ZM22 13.63C22 13.8952 21.8946 14.1496 21.7071 14.3371C21.5196 14.5246 21.2652 14.63 21 14.63H7C6.73478 14.63 6.48043 14.5246 6.29289 14.3371C6.10536 14.1496 6 13.8952 6 13.63V4L11.88 9.88C12.4425 10.4418 13.205 10.7574 14 10.7574C14.795 10.7574 15.5575 10.4418 16.12 9.88L22 4V13.63Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    XXXXXXXXXXXXX
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXX
                  </p>
                </div>
                <div className='p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg'>
                    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5 18H9.24C9.37161 18.0008 9.50207 17.9755 9.62391 17.9258C9.74574 17.876 9.85656 17.8027 9.95 17.71L16.87 10.78L19.71 8C19.8037 7.90704 19.8781 7.79644 19.9289 7.67458C19.9797 7.55272 20.0058 7.42201 20.0058 7.29C20.0058 7.15799 19.9797 7.02728 19.9289 6.90542C19.8781 6.78356 19.8037 6.67296 19.71 6.58L15.47 2.29C15.377 2.19627 15.2664 2.12188 15.1446 2.07111C15.0227 2.02034 14.892 1.9942 14.76 1.9942C14.628 1.9942 14.4973 2.02034 14.3754 2.07111C14.2536 2.12188 14.143 2.19627 14.05 2.29L11.23 5.12L4.29 12.05C4.19732 12.1434 4.12399 12.2543 4.07423 12.3761C4.02446 12.4979 3.99924 12.6284 4 12.76V17C4 17.2652 4.10536 17.5196 4.29289 17.7071C4.48043 17.8946 4.73478 18 5 18ZM14.76 4.41L17.59 7.24L16.17 8.66L13.34 5.83L14.76 4.41ZM6 13.17L11.93 7.24L14.76 10.07L8.83 16H6V13.17ZM21 20H3C2.73478 20 2.48043 20.1054 2.29289 20.2929C2.10536 20.4804 2 20.7348 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C22 20.7348 21.8946 20.4804 21.7071 20.2929C21.5196 20.1054 21.2652 20 21 20Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    XXXXXXXXXXXXX
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXX
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                <img className='mx-auto' src='flex-ui-assets/images/features/stock.png' alt='ogcovered' />
              </div>
              <div className='w-full lg:w-1/3 lg:pt-6 px-4'>
                <div className='p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg'>
                    <svg width={22} height={12} viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    XXXXXXXXXXXXX
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXX
                  </p>
                </div>
                <div className='p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg'>
                    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
                      <path
                        d='M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    XXXXXXXXXXXXX
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className='py-24 bg-white' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center', }}>
          <div className='container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto text-center mb-16 md:mb-24'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
                We give you the better
              </span>
              <h2 className='mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter'>
                What are the benefits?
              </h2>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                One of the benefits is that, depending on your income, you might qualify for a subsidy in the form of a premium tax credit, reducing monthly premiums and out-of-pocket expenses and saving you hundreds of dollars on medical bills.
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-16'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      1
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Track your performance
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Stay connected and make informed decisions
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-16'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      2
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Get detailed analytics
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Access a comprehensive sales dashboard
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-16'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      3
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Efficiently manage your team
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Stay organized with our calendar feature
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      4
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Create your own website
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Build a stunning website without any coding
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-16 md:mb-0'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      5
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Integrate with multiple apps
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Centralize all your products in one platform
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='relative h-full px-8 pt-14 pb-8 bg-coolGray-50 rounded-md shadow-md'>
                  <div className='absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 bg-white rounded-full'>
                    <div className='inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-xl font-semibold text-white'>
                      6
                    </div>
                  </div>
                  <h3 className='md:w-64 mb-4 text-lg md:text-xl font-bold'>
                    Quick and easy project setup
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    All-in-one solution for your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="qualify" className='pt-24 bg-white' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mb-16'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm'>
                FAQ
              </span>
              <h2 className='mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter'>
                What do I need to qualify?
              </h2>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                XXXXXXXXXXXXXXX
              </p>
            </div>
            <div className='flex flex-wrap pb-16 -mx-4'>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <div className='inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full bg-green-500'>
                    <img src='flex-ui-assets/elements/faq/shield-icon.svg' alt='ogcovered' />
                  </div>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                    Citizenship
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <div className='inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full bg-green-500'>
                    <img src='flex-ui-assets/elements/faq/shield-icon.svg' alt='ogcovered' />
                  </div>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                    Green Card
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <div className='inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full bg-green-500'>
                    <img
                      src='flex-ui-assets/elements/faq/shield-icon.svg'
                      alt='ogcovered'
                    />
                  </div>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                    Work Permit (I-766)
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8 xl:mb-0'>
                <div className='md:max-w-xs'>
                  <div className='inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full bg-green-500'>
                    <img
                      src='flex-ui-assets/elements/faq/shield-icon.svg'
                      alt='ogcovered'
                    />
                  </div>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                    Temporary Stamp (in passport or I-94/I-94A)
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0'>
                <div className='md:max-w-xs'>
                  <div className='inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full bg-green-500'>
                    <img
                      src='flex-ui-assets/elements/faq/shield-icon.svg'
                      alt='ogcovered'
                    />
                  </div>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                    And more...
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    XXXXXXXXXXXXXXX
                  </p>
                </div>
              </div>
            </div>
            <div className='relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-coolGray-800 rounded-md overflow-hidden'>
              <img
                className='absolute top-0 left-0 h-full w-full object-cover'
                src='flex-ui-assets/elements/pattern-dark.svg'
                alt='ogcovered'
              />
              <div className='relative max-w-max mx-auto text-center'>
                <h3 className='mb-2 text-2xl md:text-5xl leading-tight font-bold text-white tracking-tighter'>
                  Have any additional questions?
                </h3>
                <p className='mb-6 text-base md:text-xl text-coolGray-400'>
                  For more info, contact us.
                </p>
                <a className='inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm' href='#contact' >
                  We're here to help
                </a>
              </div>
            </div>
          </div>
          <div className='h-64 bg-green-500' />
        </section>
        <section
          className='py-24 md:pb-28 bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center justify-center lg:justify-between -mx-4'>
              <div className='w-auto px-4 order-last lg:order-first'>
                <button className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100'>
                  <svg
                    width={12}
                    height={14}
                    viewBox='0 0 12 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.9999 6H3.4099L6.7099 2.71C6.8982 2.5217 7.00399 2.2663 7.00399 2C7.00399 1.7337 6.8982 1.47831 6.7099 1.29C6.52159 1.1017 6.2662 0.995911 5.9999 0.995911C5.73359 0.995911 5.4782 1.1017 5.2899 1.29L0.289896 6.29C0.198856 6.38511 0.127491 6.49725 0.0798963 6.62C-0.0201217 6.86346 -0.0201217 7.13654 0.0798963 7.38C0.127491 7.50275 0.198856 7.6149 0.289896 7.71L5.2899 12.71C5.38286 12.8037 5.49346 12.8781 5.61532 12.9289C5.73718 12.9797 5.86788 13.0058 5.9999 13.0058C6.13191 13.0058 6.26261 12.9797 6.38447 12.9289C6.50633 12.8781 6.61693 12.8037 6.7099 12.71C6.80363 12.617 6.87802 12.5064 6.92879 12.3846C6.97956 12.2627 7.00569 12.132 7.00569 12C7.00569 11.868 6.97956 11.7373 6.92879 11.6154C6.87802 11.4936 6.80363 11.383 6.7099 11.29L3.4099 8H10.9999C11.2651 8 11.5195 7.89465 11.707 7.70711C11.8945 7.51957 11.9999 7.26522 11.9999 7C11.9999 6.73479 11.8945 6.48043 11.707 6.2929C11.5195 6.10536 11.2651 6 10.9999 6Z'
                      fill='#404F65'
                    />
                  </svg>
                </button>
              </div>
              <div className='w-full lg:w-2/6 px-4 mb-12 lg:mb-0'>
                <div className='flex items-center'>
                  <img className='w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full'
                    src='https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQxODU3MDd8&ixlib=rb-4.0.3&q=85&w=88&h=88'
                    alt='ogcovered'
                  />
                  <div>
                    <h3 className='mb-2 text-xl md:text-2xl font-semibold'>
                      John Smith
                    </h3>
                    <span className='text-lg text-coolGray-500 font-medium'>
                      Health Insurance Client
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-2/6 px-4 mb-12 lg:mb-0'>
                <div className='relative pt-12 pb-6 sm:p-6'>
                  <img
                    className='absolute top-0 left-0'
                    src='flex-ui-assets/elements/testimonials/quote-top-green.svg'
                    alt='ogcovered'
                  />
                  <img
                    className='absolute bottom-0 right-0'
                    src='flex-ui-assets/elements/testimonials/quote-down-green.svg'
                    alt='ogcovered'
                  />
                  <div className='relative'>
                    <h2 className='text-2xl font-semibold tracking-tighter'>
                      The perfect choice for those who value their health and
                      financial security.
                    </h2>
                  </div>
                </div>
              </div>
              <div className='w-auto px-4 order-last'>
                <button className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-coolGray-50 hover:bg-coolGray-100'>
                  <svg width={12} height={14} viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg' >
                    <path
                      d='M11.92 6.62C11.8724 6.49725 11.801 6.38511 11.71 6.29L6.71 1.29C6.61676 1.19676 6.50607 1.1228 6.38425 1.07234C6.26243 1.02188 6.13186 0.995911 6 0.995911C5.7337 0.995911 5.4783 1.1017 5.29 1.29C5.19676 1.38324 5.1228 1.49393 5.07234 1.61575C5.02188 1.73758 4.99591 1.86814 4.99591 2C4.99591 2.2663 5.1017 2.5217 5.29 2.71L8.59 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89465 0.734784 8 1 8H8.59L5.29 11.29C5.19627 11.383 5.12188 11.4936 5.07111 11.6154C5.02034 11.7373 4.9942 11.868 4.9942 12C4.9942 12.132 5.02034 12.2627 5.07111 12.3846C5.12188 12.5064 5.19627 12.617 5.29 12.71C5.38296 12.8037 5.49356 12.8781 5.61542 12.9289C5.73728 12.9797 5.86799 13.0058 6 13.0058C6.13201 13.0058 6.26272 12.9797 6.38458 12.9289C6.50644 12.8781 6.61704 12.8037 6.71 12.71L11.71 7.71C11.801 7.6149 11.8724 7.50275 11.92 7.38C12.02 7.13654 12.02 6.86346 11.92 6.62Z'
                      fill='#404F65'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-24 md:pb-32 bg-white overflow-hidden' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center', }} >
          <div className='relative container px-4 mx-auto'>
            <div className='xl:max-w-4xl mb-18 md:mb-16 mx-auto text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
                Discover the Benefits
              </span>
              <h1 className='mb-4 text-3xl md:text-4xl leading-tight font-heading font-bold'>
                What covers?
              </h1>
              <p className='mb-6 text-lg md:text-xl text-coolGray-500 font-heading'>
                The marketplace health insurance plans cover many essential health benefits, such as hospitalizations, maternity and newborn care, preventive and wellness services, mental health issues, and more! It also allows applicants with pre-existing conditions to get coverage.
              </p>
              <a className='inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm' href='#contact' >
                Let us guide you
              </a>
            </div>
            <div className='relative max-w-4xl mx-auto'>
              <img className='absolute top-0 left-0 -mt-6 lg:-mt-12 -ml-6 lg:-ml-12 w-20 lg:w-auto z-10' src='flex-ui-assets/elements/circle3-yellow.svg' alt='ogcovered' />
              <img className='absolute bottom-0 right-0 -mb-6 lg:-mb-10-mr-6 lg:-mr-12 w-20 lg:w-auto' src='flex-ui-assets/elements/dots3-blue.svg' alt='ogcovered' />
              <img className='rounded-3xl relative' src='/imgs/ogcovered-what-covers.jpg' alt='ogcovered with us' />
            </div>
          </div>
        </section>
        <section id="contact" className='py-20 bg-white' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap mb-24 lg:mb-18 justify-between items-center'>
              <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl'>
                  Contact
                </span>
                <h3 className='mb-4 text-4xl md:text-5xl text-darkCoolGray-900 font-bold tracking-tighter leading-tight'>
                  Let’s stay connected
                </h3>
                <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                  It's never been easier to get in touch with Flex. Call us, use
                  our live chat widget or email and we'll get back to you as
                  soon as possible!
                </p>
              </div>
              <div className='w-full lg:w-auto'>
                <div className='flex flex-wrap justify-center items-center md:justify-start -mb-2'>
                  <a className='inline-block py-4 px-6 mb-2 md:mb-0 w-full md:w-auto md:mr-5 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm' href='#contact' >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4 mb-14 lg:mb-0'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full md:w-1/2 px-4 mb-10'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-500 rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.21 8.82L14 2.78C13.474 2.27986 12.7759 2.00095 12.05 2.00095C11.3241 2.00095 10.626 2.27986 10.1 2.78L3.89 8.78C3.61408 9.02087 3.39216 9.31731 3.23879 9.64991C3.08541 9.98251 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2193C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2193C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68623C20.6579 9.36189 20.4596 9.06752 20.21 8.82V8.82ZM11.44 4.22C11.593 4.08016 11.7927 4.00262 12 4.00262C12.2073 4.00262 12.407 4.08016 12.56 4.22L18 9.5L12.53 14.78C12.377 14.9198 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9198 11.41 14.78L6 9.5L11.44 4.22ZM19 19.29C18.9871 19.4863 18.8987 19.6699 18.7532 19.8023C18.6078 19.9347 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9347 5.24678 19.8023C5.10132 19.6699 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0726 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.97529 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8586 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8586 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0726 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Email
                      </h3>
                      <a
                        className='text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                        href='mailto:info@ogcovered.com'
                      >
                        info@ogcovered.com
                      </a>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4 mb-10'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-500 rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Phone
                      </h3>
                      <a
                        className='text-lg md:text-xl text-coolGray-500 font-medium'
                        href='tel:+1 773 800 4261'
                      >
                        +1 773 800 4261
                      </a>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4 mb-10 md:mb-0'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-500 rounded-full'>
                        <svg className='h-6 text-white' width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M18.0001 4.48C16.4088 2.8887 14.2505 1.99472 12.0001 1.99472C9.74961 1.99472 7.59135 2.8887 6.00005 4.48C4.40875 6.0713 3.51477 8.22957 3.51477 10.48C3.51477 12.7304 4.40875 14.8887 6.00005 16.48L11.2701 21.76C11.363 21.8537 11.4736 21.9281 11.5955 21.9789C11.7173 22.0297 11.848 22.0558 11.9801 22.0558C12.1121 22.0558 12.2428 22.0297 12.3646 21.9789C12.4865 21.9281 12.5971 21.8537 12.6901 21.76L18.0001 16.43C19.5847 14.8453 20.4749 12.6961 20.4749 10.455C20.4749 8.21395 19.5847 6.06468 18.0001 4.48ZM16.5701 15L12.0001 19.59L7.43005 15C6.5272 14.0963 5.91253 12.9452 5.66375 11.6923C5.41497 10.4393 5.54324 9.14075 6.03236 7.96068C6.52147 6.78062 7.34947 5.77205 8.41168 5.06248C9.4739 4.35291 10.7226 3.97418 12.0001 3.97418C13.2775 3.97418 14.5262 4.35291 15.5884 5.06248C16.6506 5.77205 17.4786 6.78062 17.9677 7.96068C18.4569 9.14075 18.5851 10.4393 18.3364 11.6923C18.0876 12.9452 17.4729 14.0963 16.5701 15ZM9.00005 7.41C8.19277 8.21977 7.73945 9.31657 7.73945 10.46C7.73945 11.6034 8.19277 12.7002 9.00005 13.51C9.59981 14.1108 10.3636 14.5211 11.1957 14.6894C12.0278 14.8577 12.891 14.7766 13.6771 14.4562C14.4632 14.1357 15.1372 13.5903 15.6145 12.8883C16.0918 12.1862 16.3512 11.3589 16.3601 10.51C16.3646 9.94321 16.2554 9.38126 16.039 8.85739C15.8225 8.33352 15.5033 7.85836 15.1001 7.46C14.7037 7.05458 14.2311 6.73154 13.7095 6.50947C13.1878 6.2874 12.6274 6.17068 12.0605 6.16603C11.4935 6.16138 10.9313 6.2689 10.406 6.48239C9.8808 6.69588 9.40297 7.01113 9.00005 7.41ZM13.6901 12.09C13.3111 12.4747 12.8103 12.7159 12.2732 12.7723C11.7361 12.8286 11.1961 12.6966 10.7456 12.3989C10.295 12.1012 9.96185 11.6562 9.80306 11.1401C9.64427 10.6239 9.6697 10.0686 9.87501 9.56916C10.0803 9.06967 10.4528 8.65702 10.9286 8.40174C11.4045 8.14646 11.9543 8.06441 12.484 8.16962C13.0137 8.27483 13.4904 8.56076 13.8326 8.97853C14.1748 9.39631 14.3612 9.91997 14.3601 10.46C14.3455 11.0773 14.0865 11.6635 13.6401 12.09H13.6901Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Operations
                      </h3>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        We cover all the
                      </p>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        Illinois State
                      </p>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-500 rounded-full'>
                        <svg className='h-6 text-white' width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-9 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Socials
                      </h3>
                      <a className='inline-block mr-8 text-green-500 hover:text-green-600' href='https://www.instagram.com/ogcovered/'>
                        <svg width={20} height={20} viewBox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z'
                            fill='currentColor'
                          />
                          <mask id='mask0_382_5883' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x={2} y={2} width={20} height={20}>
                            <path fillRule='evenodd' clipRule='evenodd' d='M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z' fill='white' />
                          </mask>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='px-4 py-8 md:p-10 bg-coolGray-50 rounded-md'>
                  <form>
                    <div className='mb-6'>
                      <label className='block mb-2 text-coolGray-800 font-medium leading-6' htmlFor=''>
                        Email
                      </label>
                      <input
                        className='block w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                        type='email' placeholder='myemail@gmail.com'
                      />
                    </div>
                    <div className='mb-6'>
                      <label className='block mb-2 text-coolGray-800 font-medium leading-6' htmlFor=''>
                        Message
                      </label>
                      <textarea
                        className='block h-32 md:h-52 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none'
                        type='text' placeholder='Leave us your message here, we`ll contact you...' defaultValue={''}
                      />
                    </div>
                    <button className='block w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm'>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='footer' className='bg-white overflow-hidden' style={{ backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center' }}>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center pt-24 pb-12 -mx-4'>
              <div className='w-full px-4'>
                <a className='block mb-8 max-w-max' href='/'>
                  <img className='h-32' src='logo/ogcovered-logo.svg' alt='ogcovered logo footer' />
                </a>
                <p className='mb-12 text-base md:text-lg text-coolGray-400'>
                  We also work with *Excess Telecom, a service provider for the government-funded Affordable Connectivity Program (ACP). The ACP is a government benefit program operated by the Federal Communication Commission (FCC) that provides discounts on monthly broadband Internet access service and specific connected devices.
                </p>
                <p className='mb-12 text-base md:text-lg text-coolGray-400'>
                  Suppose you are part of a government program such as Snap, Medicaid, or WIC or a student receiving a Pell Grant. In that case, you can get a tablet with a low-cost activation fee and a free phone with unlimited calls and internet service for a year through us. Contact us today to learn more about how you might be eligible.
                </p>
              </div>
            </div>
          </div>
          <div className='border-b border-coolGray-100' />
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center py-12 md:pb-32'>
              <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                <p className='text-coolGray-400 font-medium'>
                  © {new Date().getFullYear()} OGCovered. All rights reserved.
                </p>
              </div>
              {/* RRSS */}
              <div className='w-full md:w-1/2'>
                <div className='flex flex-wrap md:justify-end -mx-5'>
                  <div className='px-5'>
                    <a className='inline-block text-coolGray-300 hover:text-coolGray-400' href='https://www.instagram.com/ogcovered/'>
                      <svg width={20} height={20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

