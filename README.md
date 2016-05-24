####Making a multi-player dice and hidden-role game to learn Redux, React, socket.io and syncing game data from multiple user-clients to a central db server.

#####React & Redux design decisions


I am using render-only "dumb" components (expressed as simple functions) for presentation _and_ container components on the React side of things.


I am using Redux purely for the store, action and reducer system. I am not using any react-redux modules. I am not using the connect() function to generate container components, as I want to structure my app with pure functions as react components, and I want each container components to contain an entire section of the react frontend, and get its data from its own field of the Redux store.


I am not using Provider to expose my store to all child components of my app. I am passing down the relevant sub-object of the redux store, and the relevant event-listeners for the presentation components, to each container component through props. This means I can avoid adding a contextTypes field to my components simply to allow Provider and Redux's way of exposing store.


I think this keeps the React components working in a purely "React way", and keeps the Redux area of my app at the top level, with no intrusion of redux down to my React components. (Except by event listeners, which could easily be swapped out for ones which did not dispatch Redux actions). The event listeners get access to the store at the top of the app, the store subscribes to the React component tree's render method at the top level.


Only the sub-section of the listeners and store state that are needed are passed down to container components, and only the data and exact listener functions required for the component itself are passed down to the presentation components.