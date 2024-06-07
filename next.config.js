/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dl2vs6wk2ewna.cloudfront.net","swiperjs.com","showcase.demobw.com"],
  },
  basePath: '/test',
  // redirects: async ()=>{
  //   return [
  //     {
  //       source: '/blog',
  //       destination: "/",
  //       permanent: false
  //     },
  //     {
  //       source: '/blog/:dynamicComponentName',
  //       destination: "/",
  //       permanent: false
  //     }
  //   ]
  // }
  
}

module.exports = nextConfig
