# CONSILIENCE SYSTEMS

AI-Powered Matching & Blockchain Platform on Solana

## Features

- **AI Dashboard**: AI-guided matching and connections using OpenAI
- **Project Management**: Collaborate on projects with team members
- **NFT Gallery**: AI-generated NFT collection on Solana
- **Token Management**: Manage SOL and CNSL tokens

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- OpenAI API
- Solana Web3.js

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run development server:
```bash
npm run dev
```

## Vercel Deployment

### Environment Variables for Vercel:

Add these in your Vercel project settings:

- `OPENAI_API_KEY` - Your OpenAI API key
- `NEXT_PUBLIC_SOLANA_NETWORK` - `devnet` or `mainnet-beta`
- `NEXT_PUBLIC_SOLANA_RPC_URL` - Solana RPC endpoint
- `NEXT_PUBLIC_APP_URL` - Your production URL

### Deploy Steps:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Project Structure

```
├── app/
│   ├── api/ai/          # OpenAI API routes
│   ├── dashboard/       # AI matching dashboard
│   ├── projects/        # Project management
│   ├── nft-gallery/     # NFT gallery
│   ├── tokens/          # Token management
│   └── page.tsx         # Home page
├── components/
│   ├── navigation/      # Navigation components
│   └── ui/              # UI components (shadcn)
└── lib/
    └── utils.ts         # Utility functions
```
