/** @type {import('next').NextConfig} */
import path, { dirname } from "path";

const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(dirname('/'), "css")],
    },
    devIndicators: {
        buildActivity: false,
    },
};

export default nextConfig;
