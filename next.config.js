/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    DB_URL:"mongodb+srv://Ecom:Ecom@cluster0.nl1usi6.mongodb.net/post?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
