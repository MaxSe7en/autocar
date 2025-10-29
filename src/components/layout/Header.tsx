// src/components/layout/Header.tsx
export default function Header() {
  return (
    <header className="text-center py-8 px-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="bg-blue-600 rounded-xl">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0H47.9844C56.8209 0 63.9844 7.16344 63.9844 16V47.9844C63.9844 56.8209 56.8209 63.9844 47.9844 63.9844H16C7.16344 63.9844 0 56.8209 0 47.9844V16Z"
              fill="url(#paint0_linear_2_6)"
            />
            <path
              d="M35.5913 24.394C35.347 24.6432 35.2102 24.9782 35.2102 25.3271C35.2102 25.6761 35.347 26.0111 35.5913 26.2603L37.7241 28.3931C37.9732 28.6373 38.3083 28.7741 38.6572 28.7741C39.0061 28.7741 39.3411 28.6373 39.5903 28.3931L43.7306 24.2541C44.1572 23.8248 44.881 23.9608 45.041 24.5447C45.4437 26.0095 45.4209 27.5587 44.9753 29.011C44.5297 30.4634 43.6797 31.7588 42.5247 32.7457C41.3698 33.7325 39.9576 34.3701 38.4536 34.5836C36.9495 34.7972 35.4157 34.578 34.0316 33.9517L23.4875 44.4958C22.9572 45.0259 22.2381 45.3237 21.4882 45.3236C20.7384 45.3234 20.0193 45.0254 19.4892 44.4951C18.9591 43.9648 18.6613 43.2457 18.6614 42.4958C18.6616 41.746 18.9596 41.0269 19.4899 40.4968L30.034 29.9527C29.4076 28.5686 29.1884 27.0348 29.402 25.5308C29.6156 24.0267 30.2531 22.6145 31.24 21.4596C32.2269 20.3046 33.5223 19.4546 34.9746 19.009C36.427 18.5634 37.9762 18.5406 39.441 18.9434C40.0248 19.1033 40.1608 19.8258 39.7329 20.2551L35.5913 24.394Z"
              stroke="white"
              stroke-width="2.66602"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_6"
                x1="0"
                y1="0"
                x2="63.9844"
                y2="63.9844"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#155DFC" />
                <stop offset="1" stop-color="#9810FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">AutoShop</h1>
      </div>

      <p className="text-gray-600 text-lg mb-4">
        Smart Car Care at Your Doorstep
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          AI Diagnostics
        </span>
        <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
          24/7 Roadside Help
        </span>
        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Parts Marketplace
        </span>
      </div>
    </header>
  );
}
