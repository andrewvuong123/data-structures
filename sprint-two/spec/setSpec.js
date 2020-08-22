describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // additional tests
  it ('should not contain any values not in the set', function() {
    set.add('1');
    set.add('Andrew');
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains('1')).to.equal(true);
  });

  it ('should not remove values if there are not in the set', function() {
    set.add('nothing');
    set.remove('something');
    expect(set.contains('something')).to.equal(false);
  });

  it ('should not add duplicates to the set', function() {
    set.add('a');
    set.add('a');
    set.remove('a');
    expect(set.contains('a')).to.equal(false);
  });

  it ('should be able to take numbers as input', function() {
    set.add(1);
    set.add(2);
    set.add(3);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(2)).to.equal(true);
  });

  it ('should be able to take any type as input', function() {
    set.add({'obj': 1});
    set.add(true);
    set.add(false);
    set.remove(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains({'obj': 1})).to.equal(true);
  });
});
