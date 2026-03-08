'use strict';

let nextId = 1;

const appStore = {

  playlists: [
    {
      id: nextId++,
      title: "My Gym Playlist",
      songs: [
        { title: "Mulher de Verdade Gosta Mesmo E de, Pt.2", artist: "DJ NEGRESKO", duration: "2:59" },
        { title: "REPULSIVE IN ITS SPLENDID BEAUTY", artist: "Crowbar", duration: "3:58" },
        { title: "Existance Is Punishment", artist: "Crowbar", duration: "4:29" },
        { title: "Funeralopolis", artist: "Electric Wizard", duration: "8:43" },
        { title: "econ_yalu2008", artist: "ilyhiryu", duration: "1:31" }
      ]
    },
    {
      id: nextId++,
      title: "Just General Chill Music Playlist",
      songs: [
        { title: "Me And The Devil", artist: "Gil Scott-Heron", duration: "3:34" },
        { title: "Glory Box", artist: "Portishead", duration: "5:09" },
        { title: "Nine Years", artist: "Ticklah", duration: "3:31" },
        { title: "Would?", artist: "Alice in Chains", duration: "3:27" }
      ]
    },
    {
      id: nextId++,
      title: "Gnomepilled Playlist",
      songs: [
        { title: "Dancing Nihilist", artist: "pathetic240px", duration: "3:37" },
        { title: "L'amour Toujours", artist: "Gigi D'Agostino", duration: "4:02" },
        { title: "This Feeling - Sped Up", artist: "my!lane", duration: "2:28" },
        { title: "In Via", artist: "Vril", duration: "6:22" },
        { title: "Beachwalk", artist: "Whitewoods", duration: "2:08" },
        { title: "Keep Your Eyes Peeled", artist: "ULTRA SUNN", duration: "3:51" }
      ]
    }
  ],

  getAllPlaylists() {
    return this.playlists;
  },

  getPlaylist(id) {
    return this.playlists.find(p => p.id == id);
  },

  getAppInfo() {
    return {
      author: "Noah Kirwan",
      email: "noah@blahblahblah.com",
      appName: "Playlist Manager",
      version: "1.0.0",
      playlists: this.playlists.length,
      songs: this.playlists.reduce((total, p) => total + p.songs.length, 0)
    };
  } 

};

export default appStore;