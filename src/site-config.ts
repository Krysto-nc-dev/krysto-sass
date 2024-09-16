export const SiteConfig = {
  title: "Krysto",
  description:
    "Krysto est un site web innovant à la gestion des déchets en entreprise. Notre plateforme offre aux entreprises des solutions efficaces pour réduire leur empreinte environnementale en optimisant leurs pratiques de gestion des déchets.",
  prodUrl: "https://krysto.nc",
  domain: "krysto.nc",
  appIcon: "/images/icon.png",
  company: {
    name: "Krysto SARL",
    address: "8 rue Higginson - Nouméa",
  },
  brand: {
    primary: "#9196CA",
  },
  email: {
    from: `Name <resend.demo.com>`,
    contact: "contact@krysto.nc",
  },
  maker: {
    image: "https://www.krysto.nc/images/logo.svg",
    website: "https://krysto.nc",
    name: "Stoyann for Krysto",
  },
  features: {
    /**
     * If enable, you need to specify the logic of upload here : src/features/images/uploadImageAction.tsx
     * You can use Vercel Blob Storage : https://vercel.com/docs/storage/vercel-blob
     * Or you can use Cloudflare R2 : https://mlv.sh/cloudflare-r2-tutorial
     * Or you can use AWS S3 : https://mlv.sh/aws-s3-tutorial
     */
    enableImageUpload: false as boolean,
    /**
     * If enable, you need to go to src/lib/auth/auth.ts and uncomment the line with the emoji 🔑
     * This feature will authorize users to login with a password.
     * Customize the signup form here : app/auth/signup/page.tsx
     */
    enablePasswordAuth: true as boolean,
    /**
     * If enable, the user will be redirected to `/orgs` when he visits the landing page at `/`
     * The logic is located in middleware.ts
     */
    enableLandingRedirection: false as boolean,
    /**
     * If enable, the user will be able to create only ONE organization and all his settings will be synced with it.
     * It's disable the `/settings` page from the organization and the `/orgs/new` page.
     */
    enableSingleMemberOrg: false as boolean,
  },
};
