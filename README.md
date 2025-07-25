# Movie Analytics App

The idea is to built a analytics dashboard for a streaming service with the help of provided api's to show case with filter by genre and trending value calculations functionality

## Features / Tasks Implemented
1. Fetch movies from an API and display them in a list.

2. Implemented a two-page application with routing using react router, enabling navigation to a single movie's detail page.

3. Added charts for single movie analytics using Recharts.

4. Implemented a search bar to filter movies by their names.

5. Fetched another API to get viewership analytics data and display them on the charts.

6. Implemented a multi-select filter based on genres.

7. Calculated the trending increase/decrease in viewership using custom math logic.


## Difficulties Faced
- data to populate for single movie page, either it needs prop drilling or another api call to particularly fetch that movie detail (which we didn't have) so gone for context api (global store), and made use of custom hook to use it anywhere in the code 

- fetching 2 api's, i need to go with promise.allSettled(), i want responses from both the api's, even though one gets failed

- getting allGenres for my filter functionality, since giving movie array to the array dependency will again call the useMemo(), forced to use JSON.stringify() to not call again, needed to memoize the value, now this is small array, in real world the array would be big, filtering through them would be expensive

- did take math logics from the internet such as calculating trending increase or decrease and timestamp calculations, while kept implementation restricted to my own logic

- implemented charts using recharts, which is a popular one but took reference from the official site
used line and bar graph, to show the live counts and comparision of current and prev view counts

- tried implementing the testing, but jest config is not properly setup, couldn't test it, but wrote how it will be in real unit test

- thinking of using js reducer function to get the chart data for src/components/Chart/ViewsChart/ViewsChart.jsx, right now hardcoded some properties

---

## How to Run
```bash
cd folder_name (OPTIONAL)
npm install
npm run dev
