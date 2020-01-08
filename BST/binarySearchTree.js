let input, tree, postorder, send, display, object;

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

    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            }
            else {
                this.insertNode(currentNode.left, newNode);
            }
        }
        else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            }
            else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            postorder.value += node.data + " ";
        }
    }
}


object = new BST();

send.addEventListener("click", () => {
    let val;
    val = Number(input.value);
    object.insert(val);
    input.value = "";
    tree.value += val + ",";
});

display.addEventListener("click", () => {
    object.postorder(object.root);
});



