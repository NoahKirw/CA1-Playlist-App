'use strict';

import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

let nextId = 1;

const playlistStore = {

  store: new JsonStore("./models/app-store.json", { playlistsStore: [] }),
  stores: "playlistsStore",
  array: "songs",

  getAllPlaylists() {
    return this.store.findAll(this.stores);
  },

  getPlaylist(id) {
    return this.store.findOneBy(this.stores, (playlist) => playlist.id == id);
  },

  getAppInfo() {
    const allPlaylists = this.getAllPlaylists();
    return {
      author: "Noah Kirwan",
      email: "noah@blahblahblah.com",
      appName: "Playlist Manager",
      version: "1.0.0",
      playlists: allPlaylists.length,
      songs: allPlaylists.reduce((total, p) => total + p.songs.length, 0)
    };
  } 

};

export default playlistStore;