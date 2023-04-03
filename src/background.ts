import React from "react";
import { URLStorage } from "./storage/store_url_array";

const VIEW_STATE_KEY = 'viewState';



//Creates a Context Menu right click option for saving pdf links
chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
        //identifier for right contextmenu item
        id: "rightclickoption",
        //message for the option
        title: "Send with Uplink",
        //only applies to links
        contexts:["link"],
        //initially set to false, but is updated depending on the view state
        visible:false,
    });
});

chrome.contextMenus.onClicked.addListener(function(info,tab){
    let link:string = info.linkUrl as string;

    //Updates the URL Array stored in memory with the new link
    URLStorage.putURL(link);
});