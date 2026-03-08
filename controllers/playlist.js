'use strict'; //Strict mode that...

//Imports for printing messages to the console/log
import appStore from "../models/app-store.js";

//Controller object for handling playlist pages
const playlist = {

  //Function that creates and renders a playlist view
  createView(request, response) {

    //Gets the playlist ID from the URL parameters
    const playlistId = request.params.id;

    //Data that will be passed to the playlist template
    const viewData = {
      title: "Playlist",                          
      playlist: appStore.getPlaylist(playlistId)  //Gets the playlist from the store using its ID
    };

    //Renders the "playlist" template and send the data to it
    response.render("playlist", viewData);
  }
};

//Exports the playlist controller so it can be used in the routing
export default playlist;