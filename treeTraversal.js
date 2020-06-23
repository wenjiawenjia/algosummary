var preorderTraversal = function (root) {
    const out = [];
    const stack = [];
    let p = root;
    while (stack.length || p) {
        if (p) {
            stack.push(p);
            out.push(p.val); // Add before going to children
            p = p.left;
        } else {
            p = stack.pop();
            p = p.right;
        }
    }
    return out;
}

var inorderTraversal = function (root) {

    const out = [];
    const stack = [];
    let p = root;
    while (stack.length || p) {
        if (p) {
            stack.push(p);
            p = p.left;
        } else {
            p = stack.pop();
            out.push(p.val); // Add after all left node visited
            p = p.right;
        }
    }
    return out;

};


var postorderTraversal = function (root) {
    const out = [];
    const stack = [];
    let p = root;
    while (p || stack.length) {
        if (p !== null) {
            out.unshift(p.val); //add at beginning of output
            stack.push(p);
            p = p.right; // user the reverse of pre-order
        } else {
            p = stack.pop();
            p = p.left;
        }
    }
    return out;

};