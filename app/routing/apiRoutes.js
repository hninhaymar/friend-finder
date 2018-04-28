var friends = require("./../data/friends.js");
var apiRoutes = {
    getFriends : function(req,res){
        console.log(friends);
        res.json(friends);
    },
    postFriends : function(req,res){
        var newFriend = req.body;
        console.log(newFriend);

        var mostCompatibleFriend = determineCompatibleFriend(newFriend);
        res.json(mostCompatibleFriend);

        console.log("You are most compatible with " + mostCompatibleFriend.name);

        friends.push(newFriend);

    }

};

function determineCompatibleFriend(person){
    //compare person's scores against each friend in friends array's scores
    var diffs = [];
    friends.forEach(function(friend){
        var totalDiff = 0;
        friend.scores.forEach(function(score,index){
            //how do we ensure we're not comparing a person to him/herself?
            //make sure this function gets run before the newFriend is pushed to friends array
            if(score != person.scores[index]) {
                totalDiff += Math.abs(score-person.scores[index]);
            }
        });
        diffs.push(totalDiff);
    });

    console.log(diffs);
    var minIdx = findMinIndex(diffs);

    return friends[minIdx];
    
}

function findMinIndex(arr){
    var minIndex = 0;
    for(i = 1; i < arr.length; i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
    }

    return minIndex;
}



module.exports = apiRoutes;