### I was using Claude Code CLI with Opus 4.5 model

From this given screenshot, implement UI design in the frontend. Use tailwindcss for replicating the style, and components that will be used. Make sure to create components such as: Search.tsx, GameCard.tsx, GameList.tsx, CartDropdown.tsx, ProfileDropdown.tsx. Make a view Home.tsx. Mock games and their attributes to the GameList component.

Make me a tailwindcss color scheme, that have these colors: background color - 4518ac; text color - fbfafd; card borders color - 57a3ac; card color - 1f0a4d; success color - 72c72f;

From the given screenshot, implement @GameCard component design. Use tailwindcss color scheme.

Implement backend routes for endpoint /list. For this endpoint add a parameter search, for fuzzy searching. Write route and services for this endpoint.

When using fuzzy search, it returns the whole list. For example /list?search=elden does not find the Elden Ring search term. Implement a fix for the list search service.

In the frontend use Axios for calling the API. Remove mocked data from the GameList.tsx component and create fetchGames method.

Fix Cors errors. Use http://localhost:5173 for it.

Fix fetchGames method. Implement it in the @client/src/views/Home.tsx view. Use params for data in the @client/src/components/GameList.tsx component and querry seach in the @client/src/components/Navbar component.

Implement debounce, in the @client/src/components/Search.tsx component. Use lodash/debounce. Make it 500ms

Based on these attributes, id: "1", title: "Split Fiction EA App Key (PC) GLOBAL", platform: "EA App", region: "GLOBAL", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=500&fit=crop", originalPrice: 49.99, discountPercentage: -18, currentPrice: 40.93, cashback: 4.5, favorites: 626, hasCashback: true, platformIcon: "EA App", write me an SQL table games

Write me an sql querry for creating tables, for now I can I that we can make Games, table, Regions enum, Platforms enum

I need to connect to the DB in the backend and replace mocked games, with the getting games from the DB with querry

Perhaps there is a way to calculate the discounted price better way? I was thinking about implementing price discount calculation on the DB side, or on the backend side? what would be the best aproach for this project?

If discount percentage is 0 or null, don't render this: <span className="line-through font-bold"> €{game.originalPrice.toFixed(2)} </span> <span className="text-green-500 text-xs font-bold"> {game.discountPercentage}% </span>

{game.hasCashback && ( <div className="text-green-500 text-xs font-bold mb-2"> Cashback: €{game.cashback.toFixed(2)} </div> )} use conditional rendering like in vue v-show

In the backend implement error handling for edge cases, when database is not connected, no items found

use Axios interceptors in the frontend to catch errors. Make it so that Error appears in the Home page, not passed as param in the GameList component

On the information circle add disclaimer, when hovered on it, to show something like: Price is not final. Service fee applies at checkout
