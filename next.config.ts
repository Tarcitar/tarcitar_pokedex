import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/*'),
            new URL('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/*')
        ]
    }
};

export default nextConfig;
