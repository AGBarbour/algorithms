// Followed this tut https://www.youtube.com/watch?v=ZNH0MuQ51m4&ab_channel=TheCodingTrain
// Github https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_065.1_binary_tree/P5

function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function() {
    this.root.visit();
}

Tree.prototype.search = function(val) {
    var found = this.root.search(val);
    return found;
}

Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}








