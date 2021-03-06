describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and properties "value" and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // additional tests
  it ('should take in any value, even strings', function() {
    tree.addChild('a');
    tree.addChild('b');
    tree.children[0].addChild('c');
    expect(tree.children[0].value).to.equal('a');
    expect(tree.contains('c')).to.equal(true);
  });

  it ('should be able to hold duplicate values', function() {
    tree.addChild('a');
    tree.addChild('a');
    tree.children[0].addChild('b');
    tree.children[1].addChild('c');
    expect(tree.children[0].value).to.equal('a');
    expect(tree.children[1].value).to.equal('a');
    expect(tree.children[1].children[0].value).to.equal('c');
    expect(tree.contains('c')).to.equal(true);
  });

  it ('should have a parent property that refers to the parent or null if there is no node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.parent).to.equal(null);
    expect(tree.children[0].parent).to.equal(null);
    expect(tree.children[1].parent).to.equal(null);
    expect(tree.children[0].children[0].parent).to.equal(5);
    expect(tree.children[1].children[0].parent).to.equal(6);
  });

  it('should execute a callback on each node in the tree', function() {
    var addFive = function(node) {
      return node.value + 5;
    };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(addFive);
    expect(tree.children[0].value).to.equal(10);
    expect(tree.children[1].value).to.equal(11);
    expect(tree.children[0].children[0].value).to.equal(12);
    expect(tree.children[1].children[0].value).to.equal(13);
    expect(tree.children[0].children[0].parent).to.equal(10);
    expect(tree.children[1].children[0].parent).to.equal(11);
  });
});
