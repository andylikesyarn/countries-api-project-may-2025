# Andy's Notes

## notes on required parts of assignment

I tried to be clever and avoid needing to get out of strict mode by incrementing .5 each view. Then I realized the REASON for strict mode is that it makes sure 2 attempts happen in case something goes wrong in 1 of them...so then I ended up with a view count of 12.5 for Uganda and had to fix it.

I managed to get everything working, but I still do NOT like a few things:

1. I want the save button to visually indicate whether or not a user has saved that country.
2. I want the home page to correctly display the country count.
3. I want the search button to work.

## fixing button

going to make 2 buttons, then conditionally render them
I got this working kind of, but kept struggling with all saved countries disappearing.
I've figured out that because I was filtering by CCA3, that's the issue: I wasn't passing this correctly as a prop.

## fixing search button

I had this set up as a form, but realized it was easier to just set it up as a link that took input from the search bar.

## fixing home page:

I was hardcoding the count on the home page, which is why it did't work: I forgot I'd just put in a 0 to stand in until i had working code. Whoops.

## list to comment through:

App.jsx

- commented through, explained th day/night logic. I don't think this was necessary but it helped my brain review the info. I'm definitely still a little confused on the meanings of some of the bootstrap classes I got from the navbar template here: https://getbootstrap.com/docs/4.0/components/navbar/

most of them make sense to me, but I want to learn more still.

SearchButton.jsx
Cleaned this while commenting: I had an old href that idk why it was even there. Eithrer way, this is a really straightforward component

Slider
Not adding too much here, I think it makes ENOUGH sense, but lmk if i need to comment through here

Button
THis component wasn't doing anything, since I ultimately formatted the Link attached to the search input to look like a button, and used the SaveButton for the like buttons.

CountryCardList

removed unused imports, then realized i was ALSO not using this component anywhere. I wrote a lot of this code, then realized i needed to make a var instead of a component, bc that actually makes sense. THEN, I used that data as a param in the ComponentCard component, bypassing the need for this file entirely. Deleted.

ComponentCard
https://fjolt.com/article/javascript-logical-and

here is the review of logical and I found most helpful

SavedCountries
I feel I'm confused on a couple things but the UI is functioning so I'll worry aboutthat later.

CountryDetail

https://refine.dev/blog/react-router-useparams/#what-is-react-useparams
https://www.geekster.in/articles/useparams-hooks-in-react/
https://reactrouter.com/api/hooks/useParams

Home
re-added comments I removed for no good reason.
