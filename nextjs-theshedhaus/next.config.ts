import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const appRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: appRoot,
  turbopack: {
    // Keep Turbopack scoped to this app folder to avoid scanning the parent workspace.
    root: appRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  redirects: async () => [
    // Top-level category redirects (old site structure)
    {
      source: "/sheds/:path*",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/coops-kennels/:path*",
      destination: "/signature-styles/coops",
      permanent: true,
    },
    {
      source: "/gazebos-pergolas-barns/:path*",
      destination: "/signature-styles/gazebos",
      permanent: true,
    },
    { source: "/handmade-toys/:path*", destination: "/", permanent: true },
    {
      source: "/poly-furniture/:path*",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/garages/:path*",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/playhouses/:path*",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/small-structures/:path*",
      destination: "/signature-styles/small-structures",
      permanent: true,
    },
    // Note: /contact and /configuration already exist as real pages, so no redirects needed
    // /contact/:path* and /options/:path* would cause redirect loops

    // Portfolio category redirects
    {
      source: "/portfolio-category/barns/",
      destination: "/signature-styles/barns",
      permanent: true,
    },
    {
      source: "/portfolio-category/board-batten/",
      destination: "/signature-styles/board-and-batten",
      permanent: true,
    },
    {
      source: "/portfolio-category/fieldstone/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-category/garages/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-category/greenhouses/",
      destination: "/signature-styles/sheds/a-frame-with-greenhouse",
      permanent: true,
    },
    {
      source: "/portfolio-category/monterey/",
      destination: "/signature-styles/sheds/monterey-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-category/playhouses/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-category/poly-bench/",
      destination:
        "/signature-styles/poly-furniture/poly-benches-outdoor-accessories",
      permanent: true,
    },
    {
      source: "/portfolio-category/poly-chair/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-category/poly-dining-set/",
      destination: "/signature-styles/poly-furniture/poly-outdoor-dining-sets",
      permanent: true,
    },
    {
      source: "/portfolio-category/poly-furniture/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-category/pool-houses/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-category/sheds/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-category/sheds-and-garages/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-category/stucco/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/portfolio-category/duratemp-garages/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-category/duratemp-sheds/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    { source: "/portfolio-category/vinyl/", destination: "/", permanent: true },
    {
      source: "/portfolio-category/vinyl-garages/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-category/vinyl-sheds/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    { source: "/portfolio-category/wood/", destination: "/", permanent: true },

    // Portfolio product redirects
    {
      source: "/portfolio-item/swivel-bistro-chair/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/swivel-balcony-chair/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-swing/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-rocker/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/rustic-fanback-chair/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/patriot-blue-round-table/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/gray-white-pub-set/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/fanback-swing/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/fanback-settee/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/patriot-blue-fanback-glider/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/english-garden-swivel-chairs-and-table/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/dining-benches-and-table/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/conversation-table-with-fanback-chairs/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/poly-chaise-lounge/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/bistro-chairs-and-dining-table/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/bar-and-barstools/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/white-fanback-chair-3/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/white-fanback-chair-2/",
      destination: "/signature-styles/poly-furniture",
      permanent: true,
    },
    {
      source: "/portfolio-item/hobby-greenhouse/",
      destination: "/signature-styles/sheds/a-frame-with-greenhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/elite-hobby-greenhouse/",
      destination: "/signature-styles/sheds/a-frame-with-greenhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/hip-and-porch-poolhouse-2/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/hip-and-dormer-porch-poolhouse/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/clubhouse/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-pool-house/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/cedar-poolhouse/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/vinyl-garage/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/vinyl-quaker-shed/",
      destination: "/signature-styles/sheds/quaker-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/vinyl-cape-shed-green/",
      destination: "/signature-styles/sheds/cape-cod-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/vinyl-cape-shed/",
      destination: "/signature-styles/sheds/cape-cod-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/vinyl-a-frame-shed/",
      destination: "/signature-styles/sheds/a-frame-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/wood-double-wide-garage/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/dutch-barn-wood-shed/",
      destination:
        "/signature-styles/sheds/colonial-dutch-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-dormer-shed-12x16/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/classic-shed-8x12/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/classic-wood-garage-red/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/shed-classic-brown-8x12/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/aframe-light-gray-12x16/",
      destination: "/signature-styles/sheds/a-frame-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/garage-barnred-12x24/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-garage-12x20/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/quaker-almond-12x20/",
      destination: "/signature-styles/sheds/quaker-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-quaker-blue/",
      destination: "/signature-styles/sheds/quaker-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-colonial-gray/",
      destination: "/signature-styles/garages/deluxe-series-garage",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-quaker-beige/",
      destination: "/signature-styles/sheds/quaker-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/horse-run-in-shelter-10-x-20/",
      destination: "/signature-styles/board-and-batten/run-in-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/2-story-a-frame-barn-14-x-30/",
      destination: "/signature-styles/barns",
      permanent: true,
    },
    {
      source: "/portfolio-item/horse-barn-with-porch-12-x-48/",
      destination: "/signature-styles/board-and-batten/standard-horse-barn",
      permanent: true,
    },
    {
      source: "/portfolio-item/small-cabin-with-a-sleeping-loft-12-x-16/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/chicken-coop-storage-shed-combo-10x24/",
      destination: "/signature-styles/coops",
      permanent: true,
    },
    {
      source: "/portfolio-item/low-profile-barn-30x36/",
      destination: "/signature-styles/barns",
      permanent: true,
    },
    {
      source: "/portfolio-item/monitor-barn-30-x-24/",
      destination: "/signature-styles/barns",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x12-log-siding/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-madison/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x12-english-manor/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-12x12-the-new-england-cottage/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-12x12-new-england/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x12-fieldstone-front/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x12/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-12x30-estate/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-6x8/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-10x16/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x10/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x14/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x10-vinyl/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-villa-12x20/",
      destination: "/signature-styles/sheds/villa-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/signature-villa-10x16/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-villa-8x12-2/",
      destination: "/signature-styles/sheds/villa-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/signature-villa-8x12/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/quaker-cape-cod-8x12/",
      destination: "/signature-styles/sheds/quaker-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/quaker-cape-cod-10x14/",
      destination: "/signature-styles/sheds/quaker-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-12x20/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-10x16-2/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-12x28/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-poolhouse-12x20/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/mini-barn-10x12-2/",
      destination: "/signature-styles/sheds/mini-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-12x14/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-10x16/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/garage-colonial-dutch/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/colonial-dutch/",
      destination: "/signature-styles/sheds/colonial-dutch-barn-deluxe-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/shed-colonial-dutch/",
      destination:
        "/signature-styles/sheds/colonial-dutch-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-3/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-2/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/signature-10x12/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/classic-10x16/",
      destination: "/signature-styles/gazebos/classic-gazebo",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-garage-12x28/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/garage-a-frame-12x24/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-12x16/",
      destination: "/signature-styles/sheds/a-frame-pikes-peak",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-10x16/",
      destination: "/signature-styles/sheds/a-frame-pikes-peak",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-10x12/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-12x20/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/mini-barn-10x12/",
      destination: "/signature-styles/sheds/mini-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/shed-colonial-dutch12x16/",
      destination:
        "/signature-styles/sheds/colonial-dutch-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-8x10/",
      destination: "/signature-styles/sheds/a-frame-pikes-peak",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-8x10-2/",
      destination: "/signature-styles/sheds/a-frame-pikes-peak",
      permanent: true,
    },
    {
      source: "/portfolio-item/a-frame-10x12/",
      destination: "/signature-styles/sheds/a-frame-pikes-peak",
      permanent: true,
    },
    {
      source: "/portfolio-item/garage-a-frame-double-wide/",
      destination: "/signature-styles/garages/double-wide-garage",
      permanent: true,
    },
    {
      source: "/portfolio-item/cape-cod-12x20-2/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/classic-8x12/",
      destination: "/signature-styles/gazebos/classic-gazebo",
      permanent: true,
    },
    {
      source: "/portfolio-item/modern-deluxe-poolhouse-12x24/",
      destination: "/signature-styles/poolhouses/modern-poolhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/modern-vinyl-dutchlap-deluxe-poolhouse-10x12/",
      destination: "/signature-styles/poolhouses/modern-poolhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/modern-deluxe-poolhouse-12x16/",
      destination: "/signature-styles/poolhouses/modern-poolhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/modern-deluxe-poolhouse-10x12/",
      destination: "/signature-styles/poolhouses/modern-poolhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/5-corner-shed/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/hexagon-10x10-corner-shed/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/hexagon-shed/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-item/mini-barn-12x20-3/",
      destination: "/signature-styles/sheds/mini-barn-signature-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-cape-cod-red-2/",
      destination: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/deluxe-garage-10x16/",
      destination: "/signature-styles/garages/deluxe-series-garage",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x8-victorian/",
      destination: "/signature-styles/playhouses/victorian-style-playhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x8-a-frame/",
      destination: "/signature-styles/playhouses/a-frame-style-playhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x8-dutch-style/",
      destination: "/signature-styles/playhouses/dutch-style-playhouse",
      permanent: true,
    },
    {
      source: "/portfolio-item/playhouse-8x8-elite/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-item/wood-double-wide-garage-2/",
      destination: "/signature-styles/garages/double-wide-garage",
      permanent: true,
    },
    {
      source: "/portfolio-item/monterey-shed-10-x-14/",
      destination: "/signature-styles/sheds/monterey-signature-series-shed",
      permanent: true,
    },
    {
      source: "/portfolio-item/colonial-dutch-12x20/",
      destination: "/signature-styles/sheds/colonial-dutch-barn-deluxe-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/colonial-dutch-10x16/",
      destination: "/signature-styles/sheds/colonial-dutch-barn-deluxe-series",
      permanent: true,
    },
    {
      source: "/portfolio-item/colonial-dutch-12x20-2/",
      destination: "/signature-styles/sheds/colonial-dutch-barn-deluxe-series",
      permanent: true,
    },

    // Portfolio tag redirects
    {
      source: "/portfolio-tag/barns/",
      destination: "/signature-styles/barns",
      permanent: true,
    },
    {
      source: "/portfolio-tag/board-and-batten/",
      destination: "/signature-styles/board-and-batten",
      permanent: true,
    },
    {
      source: "/portfolio-tag/cedar-siding/",
      destination: "/",
      permanent: true,
    },
    { source: "/portfolio-tag/duratemp/", destination: "/", permanent: true },
    {
      source: "/portfolio-tag/duratemp-siding/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/portfolio-tag/garage/",
      destination: "/signature-styles/garages",
      permanent: true,
    },
    {
      source: "/portfolio-tag/greenhouses/",
      destination: "/signature-styles/sheds/a-frame-with-greenhouse",
      permanent: true,
    },
    {
      source: "/portfolio-tag/playhouses/",
      destination: "/signature-styles/playhouses",
      permanent: true,
    },
    {
      source: "/portfolio-tag/pool-house/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
    {
      source: "/portfolio-tag/shed/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    {
      source: "/portfolio-tag/sheds/",
      destination: "/signature-styles/sheds",
      permanent: true,
    },
    { source: "/portfolio-tag/vinyl/", destination: "/", permanent: true },
    {
      source: "/portfolio-tag/vinyl-siding/",
      destination: "/",
      permanent: true,
    },

    // Generic fallback redirect
    {
      source: "/portfolio-item/",
      destination: "/signature-styles/poolhouses",
      permanent: true,
    },
  ],
};

export default nextConfig;
