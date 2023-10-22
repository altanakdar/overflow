/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
        mdxRx: true,
        serverComponentsExternalPackages: ['mongoose']
    }
}

module.exports = nextConfig
