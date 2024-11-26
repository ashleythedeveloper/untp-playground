This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## untp-playground

We use Pulumi and GitHub actions to deploy the app. Please note that basePath is set to `/untp-playground`

GitHub cicd workflow requires the following secrets:
1. PULUMI_AWS_SECRET_KEY_ID
1. PULUMI_AWS_SECRET_ACCESS_KEY
1. PULUMI_CONFIG_PASSPHRASE

AWS credentials will be replaced with OIDC role in AWS account, Pulumi config encryption will be changed to awskms.

End-points:
1. test - https://test-playground.untp.showthething.com/untp-playground
1. production - https://test.uncefact.org/untp-playground

`next` branch is getting automatically deployed to test, tag is manually deployed to production.
In future production enddpoint will be replaced with a production url, and current endpoint will become test.


The production build is configured using Docker image https://nextjs.org/docs/pages/building-your-application/deploying#docker-image