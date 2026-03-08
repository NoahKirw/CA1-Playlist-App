'use strict'; //Ccatchs common JavaScript mistakes

//Imports for printing messages to the console/log
import appStore from "../models/app-store.js";

//Controller object for handling the dashboard page
const dashboard = {

  //Function that creates and renders the dashboard view
  createView(request, response) {

    //Data that will be sent to the dashboard template
    const viewData = {
      title: "Playlist Dashboard",                
      playlists: appStore.getAllPlaylists()        //Get all playlists from the app store
    };

    //Renders the dashboard Handlebars template and pass the data to it
    response.render("dashboard", viewData);
  }
};

//Export the dashboard controller so it can be used in the router
export default dashboard;