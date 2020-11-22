// feature
class FriendList {
  friends = [];

  addFriend(name: string) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name: string) {
    global.console.log(`${name} is now my friend!`);
  }

  removeFriend(name: string) {
    const index = this.friends.indexOf(name);

    if (index === -1) {
      throw new Error('friend not found!');
    }

    this.friends.splice(index, 1);
  }
}

//tests
describe('FriendList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendList();
  });

  it('initialize friends List', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('add a friend to the List', () => {
    friendsList.addFriend('Ariel');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('Announce friendship', () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Ariel');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Ariel');
  });
  describe('remove friend', () => {
    it('Remove a friend from the List', () => {
      friendsList.addFriend('Ariel');
      expect(friendsList.friends[0]).toEqual('Ariel');
      friendsList.removeFriend('Ariel');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('Ariel')).toThrow(
        new Error('friend not found!'),
      );
    });
  });
});
