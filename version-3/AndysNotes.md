andy/s pseudocode is here:

there are a few main places I'm changing:

1/ the view count data.

2/ the form data.

3/ the country data.

for each, I'm going to make a list of places I need to edit:

## View Count Data

1. this is ONLY being updated in country detail.
2. Needs to be removed from main page.

i had trouble making this work w/ npm run dev and got some errors. However it worked the second I deployed to netlify...I had a similar issue with another site, and idk why.

## form data

this needs to happen on the saved country page

let buttonClick = await fetch(
"https://backend-answer-keys.onrender.com/add-one-user",

          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({{

"name": "Alice",
"country_name": "Germany",
"email": "alice@example.com",
"bio": "A little about Alice"
}}),
}
);
//const apiData = await apiResponse.json();
//console.log("Backend API response:", apiData);
//setCount(apiData.newCount);

## saved country data

I think this needs to happen on the button.

Actually no: needs to go in the component card bc this is the parent passing the onClick function down. 

### questions

- does user_id populate automatically from the API?