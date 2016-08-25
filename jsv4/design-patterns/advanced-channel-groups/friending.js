// ************************************
// * User A and User B become friends
// ************************************
  
// Add User B to User A's groups: Add ch-user-b-present to cg-user-a-friends
p.channelGroups.addChannels(
    {
        channels: ["ch-user-b-present"],
        channelGroup: "cg-user-a-friends"  
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
  
// Add User B to User A's groups: ch-user-b-status to cg-user-a-status-feed
p.channelGroups.addChannels(
    {
        channels: ["ch-user-b-status"],
        channelGroup: "cg-user-a-status-feed"
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
  
// Add User A to User B's groups: Add ch-user-a-present to cg-user-b-friends
p.channelGroups.addChannels(
    {
        channels: ["ch-user-a-present"],
        channelGroup: "cg-user-b-friends"
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
  
// Add User B to User A's groups: ch-user-a-status to cg-user-b-status-feed
p.channelGroups.addChannels(
    {
        channels: ["ch-user-a-status"],
        channelGroup: "cg-user-b-status-feed"
         
    },
    function(status) {
        if (status.error) {
            console.log("operation failed w/ status: ", status);
        } else {
            console.log("Channel added to channel group")
        }
    }
);
