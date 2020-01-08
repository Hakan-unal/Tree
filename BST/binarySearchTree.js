let input, tree, postorder, send, display;

input = document.querySelector("#input");
tree = document.querySelector("#tree");
postorder = document.querySelector("#postorder");
send = document.querySelector("#send");
display = document.querySelector("#display");



class Node {
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}



