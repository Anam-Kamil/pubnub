// Add ch-user-a-present to cg-user-a-friends
p.channelGroups.addChannels(
    {
        channels: ["ch-user-a-present"],
        channelGroup: "cg-user-a-friends",
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
  
// Add ch-user-a-present to cg-user-a-status-feed
p.channelGroups.addChannels(
    {
        channels: ["ch-user-a-present"],
        channelGroup: "cg-user-a-status-feed",
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
